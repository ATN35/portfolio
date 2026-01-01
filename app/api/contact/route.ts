import { Resend } from "resend"

type Body = {
  name?: string
  email?: string
  message?: string
  website?: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 3

declare global {
  var __contactRateLimit: Map<string, number[]>
}

const getIp = (req: Request) => {
  const h = req.headers
  const xff = h.get("x-forwarded-for")
  if (xff) return xff.split(",")[0]?.trim() || "unknown"
  return h.get("x-real-ip") || "unknown"
}

const json = (status: number, data: unknown) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  })

const sanitize = (v: string) => v.replace(/\s+/g, " ").trim()

export async function POST(req: Request) {
  try {
    if (req.method !== "POST") return json(405, { error: "Méthode non autorisée" })

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO_EMAIL
    if (!apiKey || !to) return json(500, { error: "Erreur serveur" })

    const ip = getIp(req)

    if (!globalThis.__contactRateLimit) globalThis.__contactRateLimit = new Map()
    const now = Date.now()
    const previous = globalThis.__contactRateLimit.get(ip) || []
    const recent = previous.filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
    if (recent.length >= RATE_LIMIT_MAX) return json(429, { error: "Trop de tentatives. Réessaie plus tard." })
    recent.push(now)
    globalThis.__contactRateLimit.set(ip, recent)

    const body = (await req.json()) as Body

    if (typeof body.website === "string" && body.website.trim().length > 0) {
      return json(200, { ok: true })
    }

    const name = typeof body.name === "string" ? sanitize(body.name) : ""
    const email = typeof body.email === "string" ? sanitize(body.email) : ""
    const message = typeof body.message === "string" ? body.message.trim() : ""

    if (!name || !email || !message) return json(400, { error: "Champs invalides" })
    if (name.length < 2 || name.length > 80) return json(400, { error: "Champs invalides" })
    if (email.length > 120 || !emailRegex.test(email)) return json(400, { error: "Email invalide" })
    if (message.length < 10 || message.length > 2000) return json(400, { error: "Message invalide" })

    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to,
      subject: `Nouveau message portfolio - ${name}`,
      replyTo: email,
      text: `Nom: ${name}\nEmail: ${email}\nIP: ${ip}\n\nMessage:\n${message}`,
    })

    return json(200, { ok: true })
  } catch {
    return json(500, { error: "Erreur serveur" })
  }
}

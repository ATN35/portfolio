import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as {
      name?: string
      email?: string
      message?: string
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Champs manquants" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO_EMAIL

    if (!apiKey || !to) {
      return new Response(JSON.stringify({ error: "Configuration email manquante" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to,
      subject: `Nouveau message portfolio - ${name}`,
      replyTo: email,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch {
    return new Response(JSON.stringify({ error: "Erreur serveur" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

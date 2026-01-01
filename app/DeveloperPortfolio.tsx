"use client"

import type React from "react"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { X, ArrowUp, Github, Mail, Code, Server, Sparkles, Zap, Palette } from "lucide-react"
import { projects } from "./data/projects"

const FloatingParticles = dynamic(() => import("./components/FloatingParticles"), { ssr: false })

export default function DeveloperPortfolio() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSending, setIsSending] = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)
  const [sendSuccess, setSendSuccess] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = (currentScrollY / scrollHeight) * 100
      setShowBackToTop(scrollPercentage > 30)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const technologies = [
    {
      title: "Développement Frontend",
      subtitle: "Je conçois des interfaces avec attention aux détails et souci de l'expérience utilisateur",
      items: [
        { name: "React", icon: "⚛️", description: "Développement d'applications interactives robustes" },
        { name: "JavaScript", icon: "🟨", description: "Maîtrise solide pour un code propre et efficace" },
        { name: "TypeScript", icon: "🔷", description: "Adoption pour une meilleure structure de code" },
        { name: "Tailwind CSS", icon: "🎨", description: "Création de designs cohérents et responsives" },
        { name: "Next.js", icon: "▲", description: "Framework moderne pour des performances optimales" },
      ],
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      bgGradient: "from-cyan-500/20 via-blue-500/20 to-purple-600/20",
      icon: Palette,
      pattern: "frontend",
    },
    {
      title: "Développement Backend",
      subtitle: "J’architecture des solutions serveur avec méthode et attention à la sécurité",
      items: [
        { name: "Node.js", icon: "🟢", description: "Développement d'APIs performantes et maintenables" },
        { name: "Python", icon: "🐍", description: "Automatisation et traitement de données efficaces" },
        { name: "PostgreSQL", icon: "🐘", description: "Gestion rigoureuse des données relationnelles" },
        { name: "MongoDB", icon: "🍃", description: "Solutions NoSQL adaptées aux besoins complexes" },
        { name: "Express", icon: "🚀", description: "Framework léger pour des architectures claires" },
      ],
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      bgGradient: "from-emerald-500/20 via-teal-500/20 to-cyan-600/20",
      icon: Zap,
      pattern: "backend",
    },
    {
      title: "Outils et Méthodes",
      subtitle: "J’applique des pratiques rigoureuses pour un développement organisé et collaboratif",
      items: [
        { name: "Git", icon: "🌿", description: "Versioning méticuleux et collaboration structurée" },
        { name: "Docker", icon: "🐳", description: "Conteneurisation pour des déploiements cohérents" },
        { name: "GitHub", icon: "🐙", description: "Gestion de projets avec workflows optimisés" },
        { name: "Figma", icon: "🎯", description: "Collaboration design-dev avec précision" },
        { name: "VS Code", icon: "💙", description: "Environnement configuré pour une productivité maximale" },
      ],
      gradient: "from-orange-400 via-red-500 to-pink-600",
      bgGradient: "from-orange-500/20 via-red-500/20 to-pink-600/20",
      icon: Sparkles,
      pattern: "tools",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setSendError(null)
    setSendSuccess(false)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        setSendError(data?.error ?? "Impossible d'envoyer le message")
        setIsSending(false)
        return
      }

      setSendSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      setIsSending(false)

      setTimeout(() => {
        setShowContactForm(false)
        setSendSuccess(false)
      }, 1200)
    } catch {
      setSendError("Erreur réseau. Réessaie.")
      setIsSending(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        <FloatingParticles />
      </div>

      <header className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-block relative">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                PORTFOLIO
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl -z-10" />
            </div>
          </div>

          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              Développeur web alliant{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                rigueur technique
              </span>{" "}
              et{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                passion créative
              </span>{" "}
              pour des solutions web de qualité
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Explorer les Projets
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={() => scrollToSection("tech-stack")}
              className="group relative px-8 py-4 border-2 border-purple-500 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                <Server className="w-5 h-5 mr-2" />
                Mes Services
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </header>

      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">À</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Propos
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Développeur web qui aborde chaque projet avec{" "}
                <span className="text-cyan-400 font-semibold">méthode et précision</span>. Ma passion pour le code se
                traduit par une attention particulière aux détails et une recherche constante de{" "}
                <span className="text-purple-400 font-semibold">solutions élégantes</span>.
              </p>
              <p>
                J&apos;applique une approche rigoureuse dans mes développements, de la conception à la mise en
                production. Chaque ligne de code est pensée pour la performance, la maintenabilité et
                l&apos;expérience utilisateur.
              </p>
              <p>
                Je mets ma <span className="text-pink-400 font-semibold">rigueur au service de votre vision</span>.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              {["Rigoureux", "Passionné", "Méticuleux", "Enthousiaste"].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tech-stack" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                COMPÉTENCES
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Maîtrise technique approfondie et passion pour l&apos;innovation au service de vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    transform: `translateY(${Math.sin(scrollY * 0.003 + index) * 20}px)`,
                  }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 group-hover:scale-105 group-hover:border-white/20">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${tech.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}
                    />

                    <div className="relative z-10 mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                      <p className="text-gray-400 text-sm">{tech.subtitle}</p>
                    </div>

                    <div className="relative z-10 space-y-4">
                      {tech.items.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center space-x-4 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <div className="text-2xl">{skill.icon}</div>
                          <div className="flex-1">
                            <div className="font-semibold text-white">{skill.name}</div>
                            <div className="text-xs text-gray-400">{skill.description}</div>
                          </div>
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-50" />
                        </div>
                      ))}
                    </div>

                    <div className="relative z-10 mt-8 flex justify-center">
                      <div className={`w-16 h-1 bg-gradient-to-r ${tech.gradient} rounded-full`} />
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500 -z-10`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                PROJETS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Réalisations techniques où rigueur et créativité se rencontrent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${project.color} aspect-video flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40" />
                  <span className="text-white font-bold text-3xl drop-shadow-2xl relative z-10">
                    {project.id.toString().padStart(2, "0")}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-white text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition">
                    Cliquer pour visiter →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <button
        onClick={() => {
          setSendError(null)
          setSendSuccess(false)
          setShowContactForm(true)
        }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-full shadow-2xl transition-all duration-300 z-40 flex items-center hover:scale-110 backdrop-blur-lg border border-white/20"
      >
        <Mail className="w-5 h-5 mr-2" />
        <span className="font-semibold">CONTACT</span>
      </button>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white p-4 rounded-full shadow-2xl transition-all duration-300 z-40 hover:scale-110 border border-white/20"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <footer className="relative py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Transformons vos idées en réalité digitale
          </h3>

          <div className="flex justify-center mb-8">
            <a
              href="https://github.com/ATN35"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full hover:border-white/20 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-7 h-7 text-white group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>

          <p className="text-gray-400">© 2025 Antoine Lelièvre</p>
        </div>
      </footer>

      {showContactForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Fermer"
              disabled={isSending}
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8">
              Discutons de votre projet
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  required
                  disabled={isSending}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  required
                  disabled={isSending}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all resize-none"
                  required
                  disabled={isSending}
                />
              </div>

              {sendError && (
                <div className="text-sm text-red-200 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  {sendError}
                </div>
              )}

              {sendSuccess && (
                <div className="text-sm text-emerald-200 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  Message envoyé. Je te réponds rapidement.
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:opacity-60 disabled:hover:from-cyan-500 disabled:hover:to-purple-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isSending ? "Envoi..." : "Envoyer"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

"use client"

import type React from "react"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import TechStackSection from "./components/TechStackSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactButton from "./components/ContactButton"
import ContactForm, { type FormData } from "./components/ContactForm"
import BackToTopButton from "./components/BackToTopButton"
import Footer from "./components/Footer"

const FloatingParticles = dynamic(() => import("./components/FloatingParticles"), { ssr: false })

export default function DeveloperPortfolio() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    website: "",
  })

  const [isSending, setIsSending] = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)
  const [sendSuccess, setSendSuccess] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)")
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      setScrollY(current)

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = scrollHeight > 0 ? (current / scrollHeight) * 100 : 0
      setShowBackToTop(pct > 30)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

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
      setFormData({ name: "", email: "", message: "", website: "" })
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

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden pb-28 sm:pb-0">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        <FloatingParticles />
      </div>

      <HeroSection
        onScrollToProjects={() => scrollToSection("projects")}
        onScrollToTech={() => scrollToSection("tech-stack")}
      />
      <AboutSection />
      <TechStackSection scrollY={scrollY} isMobile={isMobile} />
      <ProjectsSection />

      <ContactButton
        onClick={() => {
          setSendError(null)
          setSendSuccess(false)
          setShowContactForm(true)
        }}
      />
      <BackToTopButton show={showBackToTop} />
      <Footer />

      {showContactForm && (
        <ContactForm
          formData={formData}
          setFormData={setFormData}
          isSending={isSending}
          sendError={sendError}
          sendSuccess={sendSuccess}
          onSubmit={handleSubmit}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </div>
  )
}

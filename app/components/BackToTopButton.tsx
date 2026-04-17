"use client"

import { ArrowUp } from "lucide-react"

type Props = {
  show: boolean
}

export default function BackToTopButton({ show }: Props) {
  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 left-5 sm:bottom-8 sm:left-8 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white p-4 rounded-full shadow-2xl transition-all duration-300 z-40 hover:scale-110 border border-white/20 cursor-pointer"
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  )
}

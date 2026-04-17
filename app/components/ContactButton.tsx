"use client"

import { Mail } from "lucide-react"

type Props = {
  onClick: () => void
}

export default function ContactButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full shadow-2xl transition-all duration-300 z-40 flex items-center hover:scale-110 backdrop-blur-lg border border-white/20 text-sm sm:text-base max-w-[calc(100vw-2.5rem)] cursor-pointer"
    >
      <Mail className="w-5 h-5 mr-2" />
      <span className="font-semibold">CONTACT</span>
    </button>
  )
}

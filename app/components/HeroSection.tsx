"use client"

import { Code, Server } from "lucide-react"

type Props = {
  onScrollToProjects: () => void
  onScrollToTech: () => void
}

export default function HeroSection({ onScrollToProjects, onScrollToTech }: Props) {
  return (
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
            onClick={onScrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 cursor-pointer"
          >
            <span className="relative z-10 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Explorer les Projets
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={onScrollToTech}
            className="group relative px-8 py-4 border-2 border-purple-500 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="relative z-10 flex items-center">
              <Server className="w-5 h-5 mr-2" />
              Mes Compétences
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
  )
}

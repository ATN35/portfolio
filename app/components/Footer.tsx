import { Github } from "lucide-react"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
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
            className="group p-5 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full hover:border-white/20 hover:scale-110 transition-all duration-300 mr-4"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7 text-white group-hover:text-cyan-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/antoine-leli%C3%A8vre-7a510a3b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full hover:border-white/20 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7 text-white group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>

        <p className="text-gray-400">© 2025 Antoine Lelièvre</p>
      </div>
    </footer>
  )
}

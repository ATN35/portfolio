import Image from "next/image"
import { projects } from "../data/projects"

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 px-2">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 leading-none break-words">
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
              <div className="relative aspect-video overflow-hidden">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </>
                ) : (
                  <div className={`${project.color} w-full h-full flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="text-white font-bold text-3xl drop-shadow-2xl relative z-10">
                      {project.id.toString().padStart(2, "0")}
                    </span>
                  </div>
                )}
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
  )
}

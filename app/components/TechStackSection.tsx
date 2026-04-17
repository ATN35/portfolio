"use client"

import { Palette, Sparkles, Zap } from "lucide-react"

const technologies = [
  {
    title: "Développement Frontend",
    subtitle: "Interfaces soignées, fluides et accessibles",
    items: [
      { name: "React", icon: "⚛️", description: "Applications interactives robustes" },
      { name: "JavaScript", icon: "🟨", description: "Code propre et efficace" },
      { name: "TypeScript", icon: "🔷", description: "Structure et fiabilité" },
      { name: "Tailwind CSS", icon: "🎨", description: "Design responsive cohérent" },
      { name: "Next.js", icon: "▲", description: "Performance & SEO" },
    ],
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    bgGradient: "from-cyan-500/20 via-blue-500/20 to-purple-600/20",
    icon: Palette,
  },
  {
    title: "Développement Backend",
    subtitle: "APIs claires, sécurité et données maîtrisées",
    items: [
      { name: "Node.js", icon: "🟢", description: "APIs maintenables" },
      { name: "Express", icon: "🚀", description: "Architecture REST" },
      { name: "PostgreSQL", icon: "🐘", description: "Données relationnelles solides" },
      { name: "MongoDB", icon: "🍃", description: "NoSQL quand c'est pertinent" },
      { name: "Docker", icon: "🐳", description: "Environnements cohérents" },
    ],
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    bgGradient: "from-emerald-500/20 via-teal-500/20 to-cyan-600/20",
    icon: Zap,
  },
  {
    title: "Outils et Méthodes",
    subtitle: "Travail structuré, qualité et collaboration",
    items: [
      { name: "Git", icon: "🌿", description: "Versioning rigoureux" },
      { name: "GitHub", icon: "🐙", description: "Workflows propres" },
      { name: "Figma", icon: "🎯", description: "Passerelle design → dev" },
      { name: "VS Code", icon: "💙", description: "Productivité au quotidien" },
      { name: "Tests", icon: "✅", description: "Vérifier ce qui compte" },
    ],
    gradient: "from-orange-400 via-red-500 to-pink-600",
    bgGradient: "from-orange-500/20 via-red-500/20 to-pink-600/20",
    icon: Sparkles,
  },
]

type Props = {
  scrollY: number
  isMobile: boolean
}

export default function TechStackSection({ scrollY, isMobile }: Props) {
  return (
    <section id="tech-stack" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 px-2">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 leading-none break-words">
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
                key={tech.title}
                className="group relative"
                style={
                  isMobile
                    ? undefined
                    : {
                        transform: `translateY(${Math.sin(scrollY * 0.003 + index) * 20}px)`,
                      }
                }
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
                    {tech.items.map((skill) => (
                      <div
                        key={skill.name}
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
  )
}

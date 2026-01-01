export type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  url: string
  color: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Lesage-Lelièvre",
    description: "Site vitrine complet (frontend + backend) pour une entreprise de pompes funèbres.",
    tech: ["Next.js", "Tailwind", "Node.js", "Express"],
    url: "https://lesage-lelievre.vercel.app",
    color: "bg-gradient-to-br from-emerald-500 to-teal-700",
    image: "/lesage-lelievre.png",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Portfolio moderne avec animations, projets cliquables et formulaire de contact.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    url: "https://example.com",
    color: "bg-gradient-to-br from-blue-500 to-purple-700",
    image: "/portfolio.png",
  },
  {
    id: 3,
    title: "Application de Gestion de Tâches",
    description: "Outil de productivité avec une interface claire et une organisation efficace.",
    tech: ["React", "PWA"],
    url: "https://example.com",
    color: "bg-gradient-to-br from-purple-600 to-fuchsia-700",
    image: "/todo.png",
  },
]

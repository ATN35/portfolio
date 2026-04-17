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
    title: "Espoir Funéraire",
    description: "Site vitrine moderne pour une entreprise de pompes funèbres, avec présentation des services et formulaire de contact.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    url: "https://www.espoir-funeraire.fr/",
    color: "bg-gradient-to-br from-blue-500 to-purple-700",
    image: "/espoir-funeraire.png",
  },
  {
    id: 3,
    title: "Bureaulink",
    description: "Plateforme collaborative pour la gestion de documents et d’équipes en ligne.",
    tech: ["React", "Next.js", "TypeScript"],
    url: "https://bureaulink.vercel.app/",
    color: "bg-gradient-to-br from-purple-600 to-fuchsia-700",
    image: "/bureaulink.png",
  },  {
    id: 4,
    title: "Gouvernail",
    description: "Application de menu interactif en ligne.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://gouvernail-menu.vercel.app/",
    color: "bg-gradient-to-br from-orange-500 to-red-700",
    image: "/gouvernail.png",
  },
  {
    id: 5,
    title: "Miravelata",
    description: "Site vitrine moderne pour une entreprise.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    url: "https://miravelata.vercel.app/",
    color: "bg-gradient-to-br from-sky-500 to-indigo-700",
    image: "/miravelata.png",
  },
  {
    id: 6,
    title: "LuxWatch",
    description: "Site e-commerce élégant dédié à la vente de montres de luxe.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    url: "https://luxwatch-eight.vercel.app/",
    color: "bg-gradient-to-br from-yellow-600 to-amber-800",
    image: "/luxwatch.png",
  },
]

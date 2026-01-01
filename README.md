# Portfolio – Antoine Lelièvre

Portfolio professionnel de développeur web & web mobile réalisé avec Next.js.
Ce projet présente mes compétences, mes projets concrets et permet un contact direct.

## 🌐 Liens
- Démo : https://lesage-lelievre.vercel.app
- GitHub : https://github.com/ATN35

---

## 🎯 Objectif du projet

- Présenter mes projets réels et évolutifs
- Démontrer mes compétences frontend / fullstack
- Proposer un contact simple et professionnel
- Disposer d’une base propre, maintenable et déployable

---

## ✨ Fonctionnalités

- Interface moderne et animée
- Responsive complet (desktop / tablette / mobile)
- Section projets dynamique
- Images de projets personnalisées
- Formulaire de contact fonctionnel avec retour utilisateur
- Envoi d’email côté serveur
- Déploiement automatique sur Vercel

---

## 🛠️ Stack technique

- Framework : Next.js (App Router)
- Langage : TypeScript
- Style : Tailwind CSS
- Icônes : Lucide React
- Email : Resend
- Déploiement : Vercel

---

## 📂 Structure du projet

app/
├─ api/
│  └─ contact/
│     └─ route.ts
├─ components/
│  ├─ DeveloperPortfolio.tsx
│  └─ FloatingParticles.tsx
├─ data/
│  └─ projects.ts
├─ layout.tsx
├─ page.tsx
└─ globals.css

public/
├─ projects/
│  ├─ lesage-lelievre.png
│  ├─ portfolio.png
│  └─ todo.png

---

## 🧩 Gestion des projets

Les projets sont centralisés dans le fichier :
data/projects.ts

Chaque projet contient :
- title
- description
- tech
- url
- image

Pour ajouter un projet :
1. Ajouter l’image dans public/projects
2. Ajouter une entrée dans projects.ts

Aucune modification du composant principal n’est nécessaire.

---

## 🖼️ Images des projets

Les images doivent être placées dans :
public/projects

Le chemin utilisé est absolu, par exemple :
/projects/lesage-lelievre.png

---

## 📬 Formulaire de contact

Le formulaire utilise une API interne Next.js pour envoyer un email.

Variables d’environnement à définir dans un fichier .env.local (non versionné) :

RESEND_API_KEY=ta_cle_resend
CONTACT_TO_EMAIL=ton@email.com

---

## 🔒 Sécurité et bonnes pratiques

- Clés API jamais exposées côté client
- Envoi d’email uniquement côté serveur
- Validation des champs côté backend
- Séparation claire des responsabilités
- Code structuré et maintenable

---

## ▶️ Lancer le projet en local

npm install
npm run dev

Puis ouvrir :
http://localhost:3000

---

## 🚀 Déploiement

Le projet est déployé sur Vercel :
- HTTPS automatique
- Variables d’environnement sécurisées
- Build et déploiement continus

---

## 🧾 Améliorations récentes

- Correction complète du responsive mobile
- Ajout des images dans la section projets
- Centralisation des projets via projects.ts
- Ajout du formulaire de contact fonctionnel
- Amélioration de la cohérence visuelle globale

---

## 👤 Auteur

Antoine Lelièvre  
Développeur Web & Web Mobile

GitHub : https://github.com/ATN35  
Portfolio : https://lesage-lelievre.vercel.app

---

## 📄 Licence

Projet personnel.
Libre d’inspiration, non destiné à la revente.

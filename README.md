# Blog Astro Minimaliste

Ce projet est un blog statique inspiré par Paul Stamatiou, construit avec [Astro](https://astro.build/) et [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Lancer le projet

```bash
npm install
npm run dev
```

## ✍️ Ajouter un article

1. Crée un fichier `.md` dans le dossier `posts/`.
2. Utilise ce modèle de frontmatter :

```md
---
title: "Titre de l'article"
description: "Courte description de l'article."
date: "2025-03-13"
image: "/chemin/vers/image.png" # optionnel
---

Contenu en markdown…
```

3. Le post apparaîtra automatiquement sur la page d’accueil.

## 🗂️ Structure
- `src/pages/index.astro` : Page d’accueil (bio + liste d’articles)
- `src/pages/blog/[slug].astro` : Page individuelle d’article
- `posts/` : Tous les articles au format Markdown

## 🌐 Déploiement Vercel

1. Poussez ce repo sur GitHub.
2. Connectez-le à [Vercel](https://vercel.com/).
3. Vercel détectera Astro automatiquement.

## 📄 Licence
MIT 
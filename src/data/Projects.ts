import { projectType } from "../interfaces";

export const projects = [
  {
    title: "Codex",
    content: `My own personal blog, made with <3 and Gatsby, with features like markdown blog, dynamic code highlighting and code blocks`,
    link: "https://blog.manishk.dev",
    image: "codex.webp",
    stack: ["TypeScript", "React", "Gatsby", "Netlify", "Markdown"],
    github: "https://github.com/manishprivet/codex",
  } as projectType,
  {
    title: "Electify",
    content: `A web app created for creating anonymous elections, voting and sharing results.`,
    link: "https://electify.manishk.dev",
    image: "electify.webp",
    stack: ["TypeScript", "React", "NextJS", "NodeJS", "Vercel", "DynamoDB"],
    github: "https://github.com/manishprivet/electify",
  } as projectType,
  {
    title: "Gnome Dynamic Wallpapers",
    content: `A collection of awesome dynamic wallpapers for Gnome, and easy scripts to install them`,
    link: "https://wallpapers.manishk.dev",
    image: "dynamic-wallpaper.webp",
    stack: ["Bash", "Gnome", "Jekyll"],
    github: "https://github.com/manishprivet/dynamic-gnome-wallpapers",
  } as projectType,
  {
    title: "IEEE Student Branch Website",
    content: `Managed Design, Development and Deployment of the site. Built User Authentication using various OAuth services and an implementation of our own. Built Interactive Forms, Dynamic Content delivery and optimization, content upload and management system and cost-effective cloud architecture for deployment.`,
    link: "https://ieee.iiitm.ac.in",
    image: "abvieee.webp",
    stack: ["JavaScript", "React", "NextJS", "NodeJS", "Mongo", "AWS"],
  } as projectType,
  {
    title: "Word Ladder",
    content: `An AI based Web App/Game which uses Search Algorithms and a Word Dictionary to play the popular Word Game`,
    link: "https://word-ladder.manishk.dev",
    image: "word-ladder.webp",
    github: "https://github.com/manishprivet/word-ladder",
    stack: ["TypeScript", "Svelte", "Vercel"],
  } as projectType,
  {
    title: "Fab Fashion",
    content: `A sample E-commerce site project with an attractive UI, and features like shopping cart, google/email authentication and payment with stripe`,
    link: "https://fab.manishk.dev",
    image: "fab-fashion.webp",
    github: "https://github.com/manishprivet/fab-fashion",
    stack: ["TypeScript", "React", "Firebase"],
  } as projectType,
];

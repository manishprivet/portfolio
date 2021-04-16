import { projectType } from "../interfaces/Project";

export const projects = [
  {
    title: "Codex",
    content: `My own personal blog, made with <3 and Gatsby, with features like markdown blog, dynamic code highlighting and code blocks`,
    link: "https://blog.manish.codes",
    image: "codex.png",
    stack: ["TypeScript", "React", "Gatsby", "Netlify", "Markdown"],
    github: "https://github.com/manishprivet/codex",
  } as projectType,
  {
    title: "Electify",
    content: `A web app created for creating anonymous elections, voting and sharing results.`,
    link: "https://electify.manish.codes",
    image: "electify.jpeg",
    stack: ["TypeScript", "React", "NextJS", "NodeJS", "Vercel", "DynamoDB"],
    github: "https://github.com/manishprivet/electify",
  } as projectType,
  {
    title: "IEEE Student Branch Website",
    content: `Managed Design, Development and Deployment of the site. Built User Authentication using various OAuth services and an implementation of our own. Built Interactive Forms, Dynamic Content delivery and optimization, content upload and management system and cost-effective cloud architecture for deployment.`,
    link: "https://ieee.iiitm.ac.in",
    image: "abvieee.jpeg",
    stack: ["JavaScript", "React", "NextJS", "NodeJS", "Mongo", "AWS"],
  } as projectType,
  {
    title: "Word Ladder",
    content: `An AI based Web App/Game which uses Search Algorithms and a Word Dictionary to play the popular Word Game`,
    link: "https://qord-ladder.manish.codes",
    image: "word-ladder.png",
    github: "https://github.com/manishprivet/word-ladder",
    stack: ["TypeScript", "Svelte", "Vercel"],
  } as projectType,
  {
    title: "Fab Fashion",
    content: `A sample E-commerce site project with an attractive UI, and features like shopping cart, google/email authentication and payment with stripe`,
    link: "https://fab.manish.codes",
    image: "fab-fashion.png",
    github: "https://github.com/manishprivet/fab-fashion",
    stack: ["TypeScript", "React", "Firebase"],
  } as projectType,
];

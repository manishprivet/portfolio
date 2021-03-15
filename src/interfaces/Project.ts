export interface projectType {
  title: string;
  content: string;
  link: string;
  image: string;
  stack: Array<stackTypes>;
  direction?: "row" | "row-reverse";
  github?: string;
}

export type stackTypes =
  | "Go"
  | "JavaScript"
  | "Python"
  | "CSS"
  | "HTML"
  | "React"
  | "NodeJS"
  | "Docker"
  | "Mongo"
  | "Webpack"
  | "Saas"
  | "Heroku"
  | "AWS"
  | "Babel"
  | "DigitalOcean"
  | "Gatsby"
  | "Git"
  | "Github"
  | "Gitlab"
  | "Gnome"
  | "GCP"
  | "Linux"
  | "Mocha"
  | "NextJS"
  | "PostgreSQL"
  | "Python"
  | "Redux"
  | "Rust"
  | "Sentry"
  | "TypeScript"
  | "Ubuntu"
  | "Vercel"
  | "WebAssembly"
  | "WebPack"
  | "WireGuard"
  | "GithubActions"
  | "DynamoDB"
  | "Firebase"
  | "Markdown"
  | "Jest"
  | "Netlify"
  | "DialogFlow";

import React from "react";
import { stackTypes } from "../../interfaces/Project";
import DevIcons from "../DevIcons/DevIcons";

const stacks: Array<stackTypes> = [
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "Gatsby",
  "Redux",
  "Mongo",
  "GithubActions",
  "Firebase",
  "AWS",
  "Babel",
  "CSS",
  "DigitalOcean",
  "Docker",
  "DynamoDB",
  "GCP",
  "Git",
  "Github",
  "Gitlab",
  "Gnome",
  "Go",
  "Heroku",
  "Linux",
  "Mocha",
  "NextJS",
  "NodeJS",
  "PostgreSQL",
  "Python",
  "Rust",
  "Saas",
  "Sentry",
  "Ubuntu",
  "Vercel",
  "Netlify",
  "WebAssembly",
  "WebPack",
  "WireGuard",
  "Jest",
  "DialogFlow",
  "Svelte",
  "Deno",
];

export default () => {
  return (
    <div
      id='technologies'
      style={{
        width: "100%",
        background: "rgba(255, 255, 255, 0.1)",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          width: "75%",
          color: "white",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <h1>Technologies I know</h1>
        <DevIcons className='devicon-large' stacks={stacks.sort()} />
      </div>
    </div>
  );
};

import { Technology, ColorTypes } from "../interfaces";
import { Icons } from "./Icons";

export const Technologies: Technology[] = [
  {
    name: "AWS",
    Icon: Icons.SiAmazonaws,
    description:
      "A secure cloud services platform, offering compute power, database storage, content delivery and other functionality",
    url: "https://aws.amazon.com",
    primaryColor: "#FF9900",
  },
  {
    name: "Babel",
    Icon: Icons.SiBabel,
    description: "A free and open-source JavaScript transcompiler",
    url: "https://babeljs.io",
    primaryColor: "#F9DC3E",
  },
  {
    name: "CSS",
    Icon: Icons.SiCss3,
    description: "The language we use to style an HTML document",
    url: "https://www.w3schools.com/css/",
    primaryColor: "#1572B6",
  },
  {
    name: "Deno",
    Icon: Icons.SiDeno,
    description:
      "A simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust",
    url: "https://deno.land",
    primaryColor: ColorTypes.DEFAULT,
  },
  {
    name: "DialogFlow",
    Icon: Icons.DialogFlowIcon,
    description:
      "A natural language understanding platform that makes it easy to design and integrate a conversational user interface into your mobile app, web application, device, bot, interactive voice response system, and so on",
    url: "https://cloud.google.com/dialogflow",
    primaryColor: "#FF9800",
  },
  {
    name: "DigitalOcean",
    description:
      "Helping millions of developers easily build, test, manage, and scale applications of any size – faster than ever before.",
    Icon: Icons.SiDigitalocean,
    url: "https://digitalocean.com",
    primaryColor: "#0080FF",
  },
  {
    name: "Docker",
    description:
      "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers",
    Icon: Icons.SiDocker,
    url: "https://www.docker.com",
    primaryColor: "#2496ED",
  },
  {
    name: "DynamoDB",
    description:
      "A key-value and document database that delivers single-digit millisecond performance at any scale",
    Icon: Icons.DynamoDBIcon,
    url: "https://aws.amazon.com/dynamodb/",
    primaryColor: "#4053D6",
  },
  {
    name: "Firebase",
    description:
      "Google's mobile platform that helps you quickly develop high-quality apps and grow your business",
    Icon: Icons.SiFirebase,
    url: "https://firebase.google.com/",
    primaryColor: "#FFCA28",
  },
  {
    name: "GCP",
    description:
      "A suite of cloud computing services that runs on the same infrastructure that Google",
    Icon: Icons.SiGooglecloud,
    url: "https://cloud.google.com/",
    primaryColor: "#4285F4",
  },
  {
    name: "Gatsby",
    description:
      "A free and open source framework based on React that helps developers build blazing fast websites and apps",
    Icon: Icons.SiGatsby,
    url: "https://www.gatsbyjs.com/",
    primaryColor: "#663399",
  },
  {
    name: "Git",
    description:
      "A free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency",
    Icon: Icons.SiGit,
    url: "https://git-scm.com/",
    primaryColor: "#F05032",
  },
  {
    name: "Github",
    description:
      "A provider of Internet hosting for software development and version control using Git",
    Icon: Icons.SiGithub,
    url: "https://github.com/",
    primaryColor: ColorTypes.DEFAULT,
  },
  {
    name: "GithubActions",
    description:
      "GitHub Actions helps you build, test, and deploy applications, but you can also use it to automate other tasks common to your developer workflows",
    Icon: Icons.SiGithubactions,
    url: "https://github.com/features/actions",
    primaryColor: "#2088FF",
  },
  {
    name: "Gitlab",
    description:
      "A web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and continuous integration and deployment pipeline features",
    Icon: Icons.SiGitlab,
    url: "https://about.gitlab.com/",
    primaryColor: "#FCA121",
  },
  {
    name: "Gnome",
    description:
      "A free and open-source desktop environment for Unix-like operating systems",
    Icon: Icons.SiGnome,
    url: "https://www.gnome.org/",
    primaryColor: "#4A86CF",
  },
  {
    name: "Go",
    description:
      "A statically typed, compiled programming language designed at Google",
    Icon: Icons.SiGo,
    url: "https://golang.org/",
    primaryColor: "#00ADD8",
  },
  {
    name: "HTML",
    description:
      "The standard markup language for documents designed to be displayed in a web browser",
    Icon: Icons.SiHtml5,
    url: "https://html.com/",
    primaryColor: "#E34F26",
  },
  {
    name: "Heroku",
    description:
      "A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud",
    Icon: Icons.SiHeroku,
    url: "https://www.heroku.com/",
    primaryColor: "#430098",
  },
  {
    name: "JavaScript",
    description:
      "A fun and flexible programming language and one of the core technologies of web development and can be used on both the front-end and the back-end",
    Icon: Icons.SiJavascript,
    url: "https://www.javascript.com/",
    primaryColor: "#F7DF1E",
  },
  {
    name: "Jest",
    description:
      "A JavaScript testing framework designed to ensure correctness of any JavaScript codebase",
    Icon: Icons.SiJest,
    url: "https://jestjs.io/",
    primaryColor: "#C21325",
  },
  {
    name: "Linux",
    description:
      "A family of open-source Unix-like operating systems based on the Linux kernel",
    Icon: Icons.SiLinux,
    url: "https://www.linux.org/",
    primaryColor: "#FCC624",
  },
  {
    name: "Markdown",
    description:
      "A lightweight markup language for creating formatted text using a plain-text editor.",
    Icon: Icons.SiMarkdown,
    url: "https://www.markdownguide.org/",
    primaryColor: ColorTypes.DEFAULT,
  },
  {
    name: "Mocha",
    description:
      "A feature-rich JavaScript test framework running on Node. js and in the browser, making asynchronous testing simple and fun",
    Icon: Icons.SiMocha,
    url: "https://mochajs.org/",
    primaryColor: "#8D6748",
  },
  {
    name: "Mongo",
    description:
      "A general purpose, document-based, distributed database built for modern application developers and for the cloud era",
    Icon: Icons.SiMongodb,
    url: "https://www.mongodb.com/",
    primaryColor: "#47A248",
  },
  {
    name: "Netlify",
    description:
      "A cloud computing company that offers hosting and serverless backend services for web applications and static websites",
    Icon: Icons.SiNetlify,
    url: "https://www.netlify.com/",
    primaryColor: "#00C7B7",
  },
  {
    name: "NextJS",
    description:
      "An open-source React front-end development web framework created by Vercel that enables functionality such as server-side rendering and generating static websites for React based web applications",
    Icon: Icons.SiNextDotJs,
    url: "https://nextjs.org/",
    primaryColor: ColorTypes.DEFAULT,
  },
  {
    name: "NodeJS",
    description:
      "An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser",
    Icon: Icons.SiNodeDotJs,
    url: "https://nodejs.org/",
    primaryColor: "#339933",
  },
  {
    name: "PostgreSQL",
    description:
      "A free and open-source relational database management system emphasizing extensibility and SQL compliance",
    Icon: Icons.SiPostgresql,
    url: "https://www.postgresql.org/",
    primaryColor: "#336791",
  },
  {
    name: "Python",
    description:
      "An interpreted high-level general-purpose programming language",
    Icon: Icons.SiPython,
    url: "https://www.python.org/",
    primaryColor: "#3776AB",
  },
  {
    name: "React",
    description:
      "An open-source, front end, JavaScript library for building user interfaces or UI components",
    Icon: Icons.SiReact,
    url: "https://reactjs.org/",
    primaryColor: "#61DAFB",
  },
  {
    name: "Redux",
    description: "A Predictable State Container for JS Apps",
    Icon: Icons.SiRedux,
    url: "https://redux.js.org/",
    primaryColor: "#764ABC",
  },
  {
    name: "Rust",
    description:
      "A multi-paradigm programming language designed for performance and safety, especially safe concurrency",
    Icon: Icons.SiRust,
    url: "https://www.rust-lang.org/",
    primaryColor: ColorTypes.DEFAULT,
  },
  {
    name: "Saas",
    description:
      "A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets",
    Icon: Icons.SiSass,
    url: "https://sass-lang.com/",
    primaryColor: "#CC6699",
  },
  {
    name: "Sentry",
    description:
      "Self-hosted and cloud-based error monitoring that helps software teams discover, triage, and prioritize errors in real-time",
    Icon: Icons.SiSentry,
    url: "https://sentry.io/",
    primaryColor: "#FB4226",
  },
  {
    name: "Svelte",
    description:
      "A new way to build web applications. It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM",
    Icon: Icons.SiSvelte,
    url: "https://svelte.dev/",
    primaryColor: "#FF3E00",
  },
  {
    name: "TypeScript",
    description:
      "An open-source language which builds on JavaScript, one of the world's most used tools, by adding static type definitions",
    Icon: Icons.SiTypescript,
    url: "https://www.typescriptlang.org/",
    primaryColor: "#007ACC",
  },
  {
    name: "Ubuntu",
    description:
      "The modern, open source operating system on Linux for the enterprise server, desktop, cloud, and IoT",
    Icon: Icons.SiUbuntu,
    url: "https://ubuntu.com/",
    primaryColor: "#E95420",
  },
  {
    name: "Vercel",
    description:
      "A deployment and collaboration platform for frontend developers",
    Icon: Icons.VercelIcon,
    url: "https://vercel.com/",
    primaryColor: ColorTypes.DEFAULT,
  },
  {
    name: "WebAssembly",
    description:
      "A binary instruction format for a stack-based virtual machine, designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications",
    Icon: Icons.SiWebassembly,
    url: "https://webassembly.org/",
    primaryColor: "#654FF0",
  },
  {
    name: "WebPack",
    description: "A static module bundler for JavaScript applications",
    Icon: Icons.SiWebpack,
    url: "https://webpack.js.org/",
    primaryColor: "#8DD6F9",
  },
  {
    name: "WireGuard",
    description:
      "A general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances",
    Icon: Icons.SiWireguard,
    url: "https://www.wireguard.com/",
    primaryColor: "#88171A",
  },
];

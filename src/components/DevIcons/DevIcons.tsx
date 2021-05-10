import React from "react";
import {
  SiJavascript,
  SiGo,
  SiCss3,
  SiDocker,
  SiHeroku,
  SiHtml5,
  SiMongodb,
  SiNodeDotJs,
  SiPython,
  SiReact,
  SiSass,
  SiWebpack,
  SiAmazonaws,
  SiBabel,
  SiDigitalocean,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGnome,
  SiGooglecloud,
  SiLinux,
  SiMocha,
  SiJest,
  SiNextDotJs,
  SiPostgresql,
  SiRedux,
  SiRust,
  SiSentry,
  SiNetlify,
  SiTypescript,
  SiUbuntu,
  SiWebassembly,
  SiWireguard,
  SiGatsby,
  SiFirebase,
  SiMarkdown,
  SiSvelte,
  SiDeno,
} from "react-icons/si";
import { ReactComponent as VercelIcon } from "../../Stack/vercel.svg";
import { ReactComponent as DynamoDBIcon } from "../../Stack/aws-dynamodb.svg";
import { ReactComponent as DialogFlowIcon } from "../../Stack/dialogflow.svg";
import { stackTypes } from "../../interfaces/Project";

export default ({
  stacks,
  className,
}: {
  stacks: Array<stackTypes>;
  className: string;
}) => {
  const rest = {
    className,
  };
  const iconList: Record<stackTypes, JSX.Element> = {
    Go: <SiGo fill='#00ADD8' {...rest} />,
    JavaScript: <SiJavascript fill='#F7DF1E' {...rest} />,
    Python: <SiPython fill='#3776AB' {...rest} />,
    CSS: <SiCss3 fill='#1572B6' {...rest} />,
    HTML: <SiHtml5 fill='#E34F26' {...rest} />,

    React: <SiReact fill='#61DAFB' {...rest} />,
    NodeJS: <SiNodeDotJs fill='#339933' {...rest} />,
    Docker: <SiDocker fill='#2496ED' {...rest} />,
    Mongo: <SiMongodb fill='#47A248' {...rest} />,
    Webpack: <SiWebpack fill='#8DD6F9' {...rest} />,
    Saas: <SiSass fill='#CC6699' {...rest} />,
    Heroku: <SiHeroku fill='#430098' {...rest} />,
    AWS: <SiAmazonaws fill='#FF9900' {...rest} />,
    DynamoDB: <DynamoDBIcon {...rest} />,
    Babel: <SiBabel fill='#F9DC3E' {...rest} />,
    DigitalOcean: <SiDigitalocean fill='#0080FF' {...rest} />,
    Gatsby: <SiGatsby fill='#663399' {...rest} />,
    Git: <SiGit fill='#F05032' {...rest} />,
    Github: <SiGithub fill='#fefefe' {...rest} />,
    GithubActions: <SiGithubactions fill='#2088FF' {...rest} />,
    Gitlab: <SiGitlab fill='#FCA121' {...rest} />,
    Gnome: <SiGnome fill='#4A86CF' {...rest} />,
    GCP: <SiGooglecloud fill='#4285F4' {...rest} />,
    Linux: <SiLinux fill='#FCC624' {...rest} />,
    Mocha: <SiMocha fill='#8D6748' {...rest} />,
    NextJS: <SiNextDotJs fill='#fff' {...rest} />,
    PostgreSQL: <SiPostgresql fill='#336791' {...rest} />,
    Redux: <SiRedux fill='#764ABC' {...rest} />,
    Rust: <SiRust fill='#fefefe' {...rest} />,
    Sentry: <SiSentry fill='#FB4226' {...rest} />,
    TypeScript: <SiTypescript fill='#007ACC' {...rest} />,
    Ubuntu: <SiUbuntu fill='#E95420' {...rest} />,
    Vercel: <VercelIcon fill='#fffe' {...rest} />,
    WebAssembly: <SiWebassembly fill='#654FF0' {...rest} />,
    WebPack: <SiWebpack fill='#8DD6F9' {...rest} />,
    WireGuard: <SiWireguard fill='#88171A' {...rest} />,
    Firebase: <SiFirebase fill='#FFCA28' {...rest} />,
    Markdown: <SiMarkdown fill='#ffffff' {...rest} />,
    Jest: <SiJest fill='#C21325' {...rest} />,
    Netlify: <SiNetlify fill='#00C7B7' {...rest} />,
    DialogFlow: <DialogFlowIcon fill='#FF9800' {...rest} />,
    Svelte: <SiSvelte fill='#FF3E00' {...rest} />,
    Deno: <SiDeno fill='#FEFEFE' {...rest} />,
  };

  const icons = stacks.map((s) => {
    // Add Title to SVG
    const Icon = Object.assign({}, iconList[s], {
      props: { ...iconList[s].props, title: s },
    });
    return Icon;
  });
  return <div style={{ margin: "0 10px" }}>{icons}</div>;
};

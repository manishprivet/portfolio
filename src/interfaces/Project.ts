import { Interface } from "readline";

export interface projectType {
  title: string;
  content: string;
  link: string;
  image: string;
  stack: Array<string>;
  direction?: "row" | "row-reverse";
}

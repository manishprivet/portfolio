import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

const USERNAME = process.env.GITHUB_USERNAME;
const TOKEN = process.env.GITHUB_ACCESS_TOKEN;

export default async (_: VercelRequest, response: VercelResponse) => {
  let buffer = Buffer.from(`${USERNAME}:${TOKEN}`);
  let base64data = buffer.toString("base64");
  const res = await fetch(`https://api.github.com/users/${USERNAME}/repos`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Basic ${base64data}`,
    },
  });

  const data = await res.json();
  response.status(200).json(data);
};

import { VercelRequest, VercelResponse } from "@vercel/node";
import { fetchContributions } from "../utils/fetchers/contributions";

const TOKEN = process.env.GITHUB_ACCESS_TOKEN;

const handler = async (_: VercelRequest, res: VercelResponse) => {
  const data = await fetchContributions("manishprivet", TOKEN || "");
  res.status(200).json(data);
};

export default handler;

import { VercelRequest, VercelResponse } from "@vercel/node";
import { fetchSpotifyData } from "../utils/fetchers/spotify";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_SECRET_ID = process.env.SPOTIFY_SECRET_ID;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const handler = async (_: VercelRequest, res: VercelResponse) => {
  res
    .status(200)
    .json(
      await fetchSpotifyData(
        SPOTIFY_CLIENT_ID,
        SPOTIFY_SECRET_ID,
        SPOTIFY_REFRESH_TOKEN
      )
    );
};

export default handler;

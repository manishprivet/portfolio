import { VercelRequest, VercelResponse } from "@vercel/node";
import Axios from "axios";
import qs from "qs";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_SECRET_ID = process.env.SPOTIFY_SECRET_ID;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const SPOTIFY_URL_REFRESH_TOKEN = "https://accounts.spotify.com/api/token";
const SPOTIFY_URL_NOW_PLAYING =
  "https://api.spotify.com/v1/me/player/currently-playing";
const SPOTIFY_URL_RECENTLY_PLAY =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

const handler = async (_: VercelRequest, res: VercelResponse) => {
  const token = await refreshToken();
  let data = await nowPlaying(token);
  if (!data) data = await recentlyPlayed(token);
  res.status(200).json(data);
};

const getAuth = () =>
  Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_SECRET_ID}`).toString("base64");

const refreshToken = async () => {
  const data = {
    grant_type: "refresh_token",
    refresh_token: SPOTIFY_REFRESH_TOKEN,
  };
  const res = await Axios.post(SPOTIFY_URL_REFRESH_TOKEN, qs.stringify(data), {
    headers: {
      Authorization: `Basic ${getAuth()}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
  return res.data.access_token;
};

const recentlyPlayed = async (token: string) => {
  const res = await Axios.get(SPOTIFY_URL_RECENTLY_PLAY, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

const nowPlaying = async (token: string) => {
  const res = await Axios.get(SPOTIFY_URL_NOW_PLAYING, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export default handler;

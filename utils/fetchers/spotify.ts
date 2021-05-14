import axios from "axios";
import qs from "qs";
import { SpotifyResponse, TrackDetails } from "../../@types/interfaces";

const SPOTIFY_URL_REFRESH_TOKEN = "https://accounts.spotify.com/api/token";
const SPOTIFY_URL_NOW_PLAYING =
  "https://api.spotify.com/v1/me/player/currently-playing";
const SPOTIFY_URL_RECENTLY_PLAY =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

const getAuth = (id: string, secret: string) =>
  Buffer.from(`${id}:${secret}`).toString("base64");

const getAccessToken = async (
  id: string,
  secret: string,
  refreshToken: string
) => {
  const data = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  };
  const res = await axios.post(SPOTIFY_URL_REFRESH_TOKEN, qs.stringify(data), {
    headers: {
      Authorization: `Basic ${getAuth(id, secret)}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
  return res.data.access_token;
};

const recentlyPlayed = async (token: string) => {
  const res = await axios.get(SPOTIFY_URL_RECENTLY_PLAY, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data as SpotifyResponse;
};

const nowPlaying = async (token: string): Promise<SpotifyResponse | null> => {
  const res = await axios.get(SPOTIFY_URL_NOW_PLAYING, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return { items: [{ track: res.data?.item }] } as SpotifyResponse | null;
};

export const fetchSpotifyData = async (
  id: string,
  secret: string,
  refreshToken: string
) => {
  const token = await getAccessToken(id, secret, refreshToken);
  let data = await nowPlaying(token);
  const type = data.items[0].track ? "Now Playing" : "Recently Played";
  if (!data.items[0].track) data = await recentlyPlayed(token);
  const track = data.items[0].track;

  const returnData: TrackDetails = {
    albumArt: track.album.images[0].url,
    artist: track.artists.reduce((a, d) => a + d.name + " ", ""),
    name: track.name,
    preview: track.preview_url,
    url: track.external_urls.spotify,
  };

  return { data: returnData, type };
};

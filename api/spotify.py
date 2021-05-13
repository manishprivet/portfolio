import os
import json
import requests

from base64 import b64encode
from dotenv import load_dotenv, find_dotenv
from flask import Flask, Response, jsonify, render_template

load_dotenv(find_dotenv())

# Spotify:
#   user-read-currently-playing
#   user-read-recently-played
SPOTIFY_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
SPOTIFY_SECRET_ID = os.getenv("SPOTIFY_SECRET_ID")
SPOTIFY_REFRESH_TOKEN = os.getenv("SPOTIFY_REFRESH_TOKEN")

SPOTIFY_URL_REFRESH_TOKEN = "https://accounts.spotify.com/api/token"
SPOTIFY_URL_NOW_PLAYING = "https://api.spotify.com/v1/me/player/currently-playing"
SPOTIFY_URL_RECENTLY_PLAY = "https://api.spotify.com/v1/me/player/recently-played?limit=10"

app = Flask(__name__)


def getAuth():
    return b64encode(f"{SPOTIFY_CLIENT_ID}:{SPOTIFY_SECRET_ID}".encode()).decode("ascii")


def refreshToken():
    data = {
        "grant_type": "refresh_token",
        "refresh_token": SPOTIFY_REFRESH_TOKEN,
    }

    headers = {"Authorization": "Basic {}".format(getAuth())}

    response = requests.post(SPOTIFY_URL_REFRESH_TOKEN,
                             data=data, headers=headers)
    return response.json()["access_token"]


def recentlyPlayed():
    token = refreshToken()
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.get(SPOTIFY_URL_RECENTLY_PLAY, headers=headers)

    if response.status_code == 204:
        return {}

    return response.json()


def nowPlaying():
    token = refreshToken()
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.get(SPOTIFY_URL_NOW_PLAYING, headers=headers)

    if response.status_code == 204:
        return {}

    return response.json()


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def catch_all(path):
    now_playing = nowPlaying()
    recently_payed = recentlyPlayed()

    data = {"now_playing": now_playing, "recently_played": recently_payed}

    resp = Response(json.dump(data), mimetype="application/json")
    resp.headers["Cache-Control"] = "s-maxage=1"

    return resp


if __name__ == "__main__":
    app.run(debug=True)

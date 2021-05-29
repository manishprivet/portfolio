import Spinner from "../Spinner";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect, useRef } from "react";
import { SpotifyAPIResponse } from "../../../@types/interfaces";
import { LinkToNewTab } from "../Primitives/Link";
import { CircularImage } from "../Primitives/Images";
import { SubSectionContainer } from "../Primitives/Containers";
import styles from "./Spotify.module.scss";
import { FaPause, FaPlay } from "react-icons/fa";

type APIResponse = AxiosResponse<SpotifyAPIResponse>;

const Spotify = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<SpotifyAPIResponse | undefined>(undefined);
  const [playing, setPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);

  const fetchData = async () => {
    setLoading(true);
    const apiData = (await axios.get("/api/spotify")) as APIResponse;
    setData(apiData.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (audio.current) audio.current.volume = 0.4;
    if (playing) audio.current?.play();
    else audio.current?.pause();
  }, [playing]);

  return (
    <SubSectionContainer>
      <h2>I like 🎵 and I</h2>
      {loading && <Spinner small text='Browsing my playlist' />}
      {!loading && (
        <section>
          {data?.type === "now"
            ? `Am currently listening to `
            : `Recently listened to `}
          <br />
          <div className='horizontal'>
            <CircularImage
              height='80px'
              width='80px'
              src={data?.data.albumArt}
              alt={data?.data.name}
            />
            {data?.data.preview && (
              <button
                className={styles.controlButton}
                onClick={() => setPlaying(!playing)}
              >
                {playing ? <FaPause /> : <FaPlay />}
              </button>
            )}
            <LinkToNewTab className={styles.song} href={data?.data.url}>
              <section>
                {data?.data.name}
                <br />
                <span>{data?.data.artist.slice(0, -2)}</span>
              </section>
            </LinkToNewTab>
          </div>
          {data?.data.preview && (
            <audio
              ref={audio}
              loop
              style={{ display: "none" }}
              src={data?.data.preview}
            />
          )}
        </section>
      )}
    </SubSectionContainer>
  );
};

export default Spotify;

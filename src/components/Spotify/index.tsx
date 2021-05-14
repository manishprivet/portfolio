import Spinner from "../Spinner";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { SpotifyAPIResponse } from "../../../@types/interfaces";
import styles from "./styles.module.scss";
import { LinkToNewTab } from "../Primitives/Link";
import { CircularImage } from "../Primitives/Images";

type APIResponse = AxiosResponse<SpotifyAPIResponse>;

const Spotify = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<SpotifyAPIResponse | undefined>(undefined);

  const fetchData = async () => {
    setLoading(true);
    const apiData = (await axios.get("/api/spotify")) as APIResponse;
    setData(apiData.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className={styles.infoContainer}>
        <h2>I like 🎵 and I</h2>
        {loading && <Spinner small text='Browsing my playlist' />}
        {!loading && (
          <p>
            {data?.type === "now"
              ? `Currently listening to `
              : `Recently listened to `}
            <br />
            <LinkToNewTab href={data?.data.url}>
              <CircularImage
                height='80px'
                width='80px'
                src={data?.data.albumArt}
                alt={data?.data.name}
              />
              <section>
                {data?.data.name}
                <br />
                <span>{data?.data.artist.slice(0, -2)}</span>
              </section>
            </LinkToNewTab>
          </p>
        )}
      </section>
    </>
  );
};

export default Spotify;

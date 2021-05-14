import Spinner from "../Spinner";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { userDetails } from "../../../@types/interfaces";
import Graph from "./Graph";
import styles from "./styles.module.scss";

type APIResponse = AxiosResponse<userDetails>;

const Github = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<userDetails | undefined>(undefined);

  const fetchData = async () => {
    setLoading(true);
    const apiData = (await axios.get(
      "/api/github-contributions"
    )) as APIResponse;
    setData(apiData.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Spinner text='Fetching Github Stats' />;

  return (
    <>
      <section className={styles.infoContainer}>
        <h2>I ❤️ Open Source</h2>
        <p>
          and made a total of <span>{data?.totalContributions}</span>{" "}
          contributions in <span>{data?.contributedTo}</span> repos till now, in
          which I have
        </p>
        <ul>
          <li>
            <span>{data?.commits}</span> commits in{" "}
            <span>{data?.commitRepos}</span> repos
          </li>
          <li>
            <span>{data?.pullRequests}</span> Pull Requests in{" "}
            <span>{data?.pullRequestRepos}</span> repos
          </li>
          <li>
            <span>{data?.pullRequestReviews}</span> code reviews in{" "}
            <span>{data?.reviewRepos}</span> repos
          </li>
          <li>
            raised <span>{data?.issues}</span> issues in{" "}
            <span>{data?.issueRepos}</span> repos
          </li>
          <li>
            and created <span>{data?.noOfRepositories}</span> repositories of my
            own
          </li>
        </ul>
      </section>
      <Graph userData={data} />
    </>
  );
};

export default Github;

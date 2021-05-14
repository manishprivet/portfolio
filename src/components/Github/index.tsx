import Spinner from "../Spinner";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { userDetails } from "../../../@types/interfaces";
import Graph from "./Graph";

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

  if (loading) return <Spinner />;

  return (
    <>
      <section>
        <h2>
          I've made a total of {data?.totalContributions} contributions in{" "}
          {data?.contributedTo} repos till now, in which
        </h2>
        <ul>
          <li>
            {data?.commits} commits in {data?.commitRepos} repos
          </li>
          <li>
            {data?.pullRequests} PRs in {data?.pullRequestRepos} repos
          </li>
          <li>
            {data?.pullRequestReviews} code reviews in {data?.reviewRepos} repos
          </li>
          <li>
            raised {data?.issues} issues in {data?.issueRepos} repos
          </li>
          <li>and created {data?.noOfRepositories} repositories of my own</li>
        </ul>
      </section>
      <Graph userData={data} />
    </>
  );
};

export default Github;

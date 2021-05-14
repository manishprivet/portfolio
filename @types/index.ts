import { AxiosResponse } from "axios";
import { query, GithubContributionsResponse, userDetails } from "./interfaces";

export type gqlQuery = (username: string) => query;
export type fetcher = (
  data: query,
  token: string
) => Promise<AxiosResponse<GithubContributionsResponse>>;
export type fetchContribution = (
  username: string,
  token: string
) => Promise<userDetails | string>;

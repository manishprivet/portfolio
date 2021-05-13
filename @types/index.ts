import { AxiosResponse } from "axios";
import { query, responseOfApi, userDetails } from "./interfaces";

export type gqlQuery = (username: string) => query;
export type fetcher = (data: query) => Promise<AxiosResponse<responseOfApi>>;
export type fetchContribution = (
  username: string,
  graphqlQuery: gqlQuery,
  fetch: fetcher
) => Promise<userDetails | string>;

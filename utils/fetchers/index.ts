import axios from "axios";
import { fetcher } from "../../@types";
import { query } from "../../@types/interfaces";

export const fetch: fetcher = (data: query, token: string) =>
  axios({
    url: "https://api.github.com/graphql",
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
    },
    data,
  });

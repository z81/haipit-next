import axios from "axios"
import { memoize } from "lodash";

export const getApiClient = memoize(() => axios.create({
  baseURL: 'https://api.haipit.news/api/v2',
}));
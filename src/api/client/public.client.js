import axios from "axios";
import queryString from "query-string";

axios.defaults.withCredentials = true;
const baseURL = "http://127.0.0.1:5005/api/v1";

const publicClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params) => queryString.stringify(params),
  },
});

publicClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    Headers: {
      "Content-type": "application/json",
    },
  };
});

publicClient.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
  return response;
}, (err) => {
    throw err.response.data;
});

export default publicClient;

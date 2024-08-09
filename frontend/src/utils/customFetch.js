import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api/v1",
});

customFetch.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${authToken}`;
  return config;
});

customFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    try {
      const { response } = error;
      if (response?.status === 401) {
        localStorage.removeItem("token");
      }
    } catch (e) {
      console.error(e);
    }
    // throw error;
  }
);

export default customFetch;

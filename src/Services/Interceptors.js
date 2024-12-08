import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  // withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      // Try to refresh the token
      const refreshResponse = await axios.post("/api/auth/refresh-token");
      if (refreshResponse.status === 200) {
        const newToken = refreshResponse.data.token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance.request(error.config); // Retry the failed request
      }
    }
    return Promise.reject(error);
  }
);

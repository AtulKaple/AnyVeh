import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://anyveh-backend.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;

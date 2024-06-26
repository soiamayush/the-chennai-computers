// src/utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  withCredentials: true, // If you are using cookies for authentication
});

export default axiosInstance;

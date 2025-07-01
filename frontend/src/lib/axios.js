import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://chatapp-1-d7fi.onrender.com/api",
    withCredentials: true,
});

import axios from "axios";

const url = import.meta.env.VITE_PUBLIC_API_URL || '';
const urlAuth = import.meta.env.VITE_PUBLIC_API_AUTH || '';

export default axios.create({
    baseURL: urlAuth
});

export const api = axios.create({
    baseURL: url,
    headers: {"Content-Type": "application/json"},
    withCredentials: true
})

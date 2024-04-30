import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.APP_URL,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

apiClient.defaults.timeout = 10000;

export { apiClient };
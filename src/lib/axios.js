import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        'Authorization': `Bearer ${process.env.API_BEARER_TOKEN}`,
        'Content-Type': 'application/json',
    },
    timeout: 5000, // 5 seconds timeout
});

export default axiosInstance;


import axios from 'axios';

export default axios.create({
    baseURL: import.meta.env.VITE_NOCODB_API_URL,
    headers: {
        'xc-token': import.meta.env.VITE_NOCODB_API_TOKEN,
        'Content-Type': 'application/json',
    },
});
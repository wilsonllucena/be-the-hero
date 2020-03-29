import axios from 'axios';

const api = axios.create({
    baseURL: 'https://beheroapi.herokuapp.com/'
});

export default api;
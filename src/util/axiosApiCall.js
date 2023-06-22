import axios from 'axios';

export const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const axiosConfigLocal = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_LOCAL,
});

export const axiosConfigLocalPost = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_LOCAL,
});
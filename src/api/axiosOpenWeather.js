// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-

const axiosOpenWeather = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosOpenWeather.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
})
axiosOpenWeather.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});
export default axiosOpenWeather;
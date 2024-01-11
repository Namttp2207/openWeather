import axiosOpenWeather from "./axiosOpenWeather";

const API_KEY = process.env.REACT_APP_API_KEY

const CityApi = {
    getSearch: (KeySearch) => {
        const url = `/data/2.5/find?q=${KeySearch}&appid=${API_KEY}`;
        return axiosOpenWeather.get(url);
    },
    getFlag: (IconFlag) => {
        const url = `/data/images/flags/${IconFlag}.png`;
        return axiosOpenWeather.get(url);
    },
    getWeatherForecast: (Lat, Lon) => {
        const url = `data/2.5/onecall?lat=${Lat}&lon=${Lon}&appid=${API_KEY}`;
        return axiosOpenWeather.get(url);
    }
}
export default CityApi;
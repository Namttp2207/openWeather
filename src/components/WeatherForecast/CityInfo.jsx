import React from 'react'
import { useRecoilValue } from 'recoil';
import { WeatherForecastState } from '../../globalState/weatherForecastState';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/vi'
dayjs.extend(timezone);

export default function CityInfo() {
    const weatherForecast = useRecoilValue(WeatherForecastState);
    dayjs.tz.setDefault(weatherForecast?.timezone);

    return (
        weatherForecast && <div className='d-flex flex-column'>
            <p>{dayjs.unix(weatherForecast.current.dt).format('MMM DD, hh:mmA')}</p>
            <h1>{sessionStorage.getItem('cityName')}</h1>
            <div className='d-flex align-items-center'>
                <img src={`https://openweathermap.org/img/wn/${weatherForecast.current.weather[0].icon}@2x.png`} alt="iconWeather" />
                <h2>{Math.floor(weatherForecast.current.temp) + '°C'}</h2>
            </div>
            <h5>Feel like {Math.floor(weatherForecast.current.feels_like)}°C. {weatherForecast.current.weather[0].description}</h5>
            <div className='border-start border-3 border-dark'>
                <p className='px-2'>Mặt trời mọc: {dayjs.unix(weatherForecast.current.sunrise).format('hh:mm a')}</p>
                <p className='px-2'>Mặt trời lặn: {dayjs.unix(weatherForecast.current.sunset).format('hh:mm a')}</p>
            </div>
        </div>
    )
}

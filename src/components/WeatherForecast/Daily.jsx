import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import { WeatherForecastState } from '../../globalState/weatherForecastState';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/vi'
import { useRecoilState } from 'recoil';
import { dailyState } from '../../globalState/dailyState';

dayjs.extend(timezone);
export default function Daily() {
    const weatherForecast = useRecoilValue(WeatherForecastState);
    const [daily, SetDaily] = useRecoilState(dailyState)
    const [checked, SetChecked] = useState()

    //set timezone
    dayjs.tz.setDefault(weatherForecast?.timezone);

    const HandleDaily = (daily) => {
        SetChecked(daily.dt * daily.sunrise)
        SetDaily(daily)
    }

    return (
        weatherForecast && <div className='container w-100'>
            <h5>Dự báo trong 8 ngày tới:</h5>
            <ul className='list-group list-group-horizontal w-100 text-center overflow-x-auto '>
                {weatherForecast.daily.map((daily, index) => {
                    return <li style={{ width: '12.5%' }} role="button" className={`list-group-item overflow-x-hidden border-dark ${checked == daily.dt * daily.sunrise ? 'checked' : ''}`} key={index} onClick={() => HandleDaily(daily)}>
                        < img className='w-100' src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`
                        } alt="WeatherIcon" />
                        <p className='m-0 p-0'>{Math.floor(daily.temp.day) + '°C'}</p>
                        <h6 className='my-0 mx-0 py-1'>{dayjs.unix(daily.dt).format('ddd')}</h6>
                        <p style={{ fontSize: '0.5em', padding: '0px', margin: '0px' }}>({dayjs.unix(daily.dt).format('DD/MM/YYYY')})</p>
                    </li>
                })}
            </ul>
        </div >

    )
}

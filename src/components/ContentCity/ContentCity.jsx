import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { cityState } from '../../globalState/cityState';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityApi from '../../api/cityApi';
import { WeatherForecastState } from '../../globalState/weatherForecastState';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { dailyState } from '../../globalState/dailyState';
import Skeleton from 'react-loading-skeleton';

export default function ContentCity() {
    const dataCity = useRecoilValue(cityState);
    const [daily, SetDaily] = useRecoilState(dailyState)
    const nav = useNavigate()
    const [checked, SetChecked] = useState()

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);


    const HandleCity = async (city, index) => {
        nav(`/${city.coord.lat}/${city.coord.lon}`, { replace: true })
        sessionStorage.setItem('cityName', city.name)
        SetChecked(city.name + index)
        SetDaily(undefined)
    }
    return (
        dataCity &&
        <div className={`fadeIn ${isVisible ? 'active d-flex align-items-center flex-wrap' : ''}`}>
            <ul className='list-group list-group-horizontal w-100 text-center overflow-x-auto gap-3'>
                {
                    dataCity.map((city, index) => {
                        return <li role='button' style={{}} className={`list-group-item overflow-x-hidden border border-dark ${checked == (city.name + index) ? 'checked' : ''}`} key={index} onClick={() => HandleCity(city, index)} >
                            <img className='img-fluid p-1' src={`https://openweathermap.org/images/flags/${city.sys.country.toLowerCase()}.png`} alt="countryLogo" />
                            <p className='d-inline p-1'>{city.name + '(' + city.sys.country + ')'}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

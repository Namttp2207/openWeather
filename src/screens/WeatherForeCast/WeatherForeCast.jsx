import React, { useEffect } from 'react'
import './WeatherForeCast.scss'
import SearchCity from '../../components/SearchCity/SearchCity'
import ContentCity from '../../components/ContentCity/ContentCity'
import Daily from '../../components/WeatherForecast/Daily'
import DetailsDaily from '../../components/WeatherForecast/DetailsDaily'
import Hourly from '../../components/WeatherForecast/Hourly'
import CityInfo from '../../components/WeatherForecast/CityInfo'
import { useParams } from 'react-router-dom'
import CityApi from '../../api/cityApi'
import { useRecoilState } from 'recoil'
import { WeatherForecastState } from '../../globalState/weatherForecastState'
export default function WeatherForeCast() {
    const { lat, lon } = useParams()
    const [weatherForecast, SetWeatherForecast] = useRecoilState(WeatherForecastState)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await CityApi.getWeatherForecast(lat, lon)
                console.log('Fetch weatherdata successfully: ', response);
                SetWeatherForecast(response)

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchData()
    }, [lat])
    console.log(lat);
    return (
        <div className='WeatherForeCast'>
            <div className='headW d-flex w-100 py-5'>
                <div style={{ width: '40%' }} className='Search d-flex px-3 '>
                    <SearchCity />
                </div>
                <div style={{ width: '60%' }} className='Content d-flex px-3 '>
                    <ContentCity />
                </div>
            </div>
            <div className='bodyW d-flex flex-wrap w-100'>
                <div style={{ width: '40%' }} className='CityInfo px-3'>
                    <CityInfo />
                    <Hourly />
                </div>
                <div style={{ width: '60%' }} className='Daily px-3'>
                    <Daily />
                    <div className='p-3'>
                        <DetailsDaily />
                    </div>
                </div>
            </div>

        </div>
    )
}

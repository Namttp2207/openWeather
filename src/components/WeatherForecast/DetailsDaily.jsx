import React from 'react'
import { dailyState } from '../../globalState/dailyState';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/vi'
import { WeatherForecastState } from '../../globalState/weatherForecastState';

dayjs.extend(timezone);
export default function DetailsDaily() {
    const detailsDaily = useRecoilValue(dailyState);
    const weatherForecast = useRecoilValue(WeatherForecastState);

    dayjs.tz.setDefault(weatherForecast?.timezone);




    return (
        detailsDaily && <div className='d-flex'>
            <div className='d-flex flex-column align-items-start w-100'>
                <div className='d-flex align-item-center border-bottom border-dark w-100 pt-3'>
                    <div>
                        <img className='img-fluid' src={`https://openweathermap.org/img/wn/${detailsDaily.weather[0].icon}@2x.png`} alt="WeatherIcon" />
                    </div>
                    <div className='d-flex flex-column align-items-start justify-content-center w-100'>
                        <h5>{
                            detailsDaily.weather[0].description
                        }</h5>
                        <div className='d-flex flex-wrap gap-1 w-100'>
                            <div className='d-flex flex-column align-items-start me-5'>
                                <p>Nhiệt độ cao nhất: {Math.floor(detailsDaily.temp.max)}°C</p>
                                <p>Nhiệt độ thấp nhất: {Math.floor(detailsDaily.temp.min)}°C</p>
                            </div>
                            <div className='d-flex flex-column align-items-start'>
                                <p>Mặt trời mọc: {dayjs.unix(detailsDaily.sunrise).format('HH:mm')}"</p>
                                <p>Mẳt trời lặn: {dayjs.unix(detailsDaily.sunset).format('HH:mm')}"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-wrap justify-content-between gap-1 px-1 pt-2 border-bottom border-dark w-100'>
                    <div className='d-flex flex-column align-items-start pe-3'>
                        <p className=''>Xác suất mưa(PoP): {detailsDaily.pop}%</p>
                        <p className=''>Độ ẩm: {detailsDaily.humidity}%</p>
                    </div>
                    <div className='d-flex flex-column align-items-start pe-3 '>
                        <p className=''>Tốc độ gió: {detailsDaily.wind_speed}m/s</p>
                        <p className=''>UV: {Math.floor(detailsDaily.uvi)}</p>
                    </div>
                    <div>
                    </div>
                    <div className='d-flex flex-column align-items-start pe-3'>
                        <p className=''>Áp suất: {detailsDaily.pressure}hPa</p>
                        <p className=''>Điểm sương: {Math.floor(detailsDaily.dew_point)}°C</p>
                    </div>
                </div>
                <div className='table-responsive w-100'>
                    <table className='table table-borderless'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Buổi sáng</th>
                                <th>Buổi chiều</th>
                                <th>Buổi tối</th>
                                <th>Buổi đêm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Nhiệt độ</th>
                                <td>{Math.floor(detailsDaily.temp.morn)}°C </td>
                                <td>{Math.floor(detailsDaily.temp.day)}°C </td>
                                <td>{Math.floor(detailsDaily.temp.eve)}°C </td>
                                <td>{Math.floor(detailsDaily.temp.night)}°C </td>
                            </tr>
                            <tr>
                                <th>Cảm giác</th>
                                <td>{Math.floor(detailsDaily.feels_like.morn)}°C </td>
                                <td>{Math.floor(detailsDaily.feels_like.day)}°C </td>
                                <td>{Math.floor(detailsDaily.feels_like.eve)}°C </td>
                                <td>{Math.floor(detailsDaily.feels_like.night)}°C </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

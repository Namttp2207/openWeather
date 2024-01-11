import React from 'react'
import { useRecoilValue } from 'recoil';
import { WeatherForecastState } from '../../globalState/weatherForecastState';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/vi'
dayjs.extend(timezone);

export default function Hourly() {
    const weatherForecast = useRecoilValue(WeatherForecastState);
    dayjs.tz.setDefault(weatherForecast?.timezone);


    const data = {
        labels: weatherForecast?.hourly.map(hourly => {
            return dayjs.unix(hourly.dt).format('ha')
        }),
        datasets: [
            {
                label: 'Nhiệt độ °C',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#EA6E4A',
                borderColor: '#EA6E4A',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#EA6E4A',
                pointBackgroundColor: '#EA6E4A',
                pointBorderWidth: 5,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#EA6E4A',
                pointHoverBorderColor: '#EA6E4A',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: weatherForecast?.hourly.map(hourly => {
                    return hourly.temp
                })
            },
        ],
    };

    // Cấu hình biểu đồ
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => ` Nhiệt độ: ${context.parsed.y} °C`,
                },
            },
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'x',
                        value: 25, // Giá trị muốn chú thích
                        borderColor: 'red',
                        borderWidth: 2,
                        label: {
                            enabled: true,
                            content: 'Thông tin ở phía trên',
                        },
                    },
                ],
            },
        },
    };

    return (
        weatherForecast && <div className='py-3'>
            <h5>Nhiệt độ trong 24 giờ tới</h5>
            <div className=''>
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

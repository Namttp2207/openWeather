import React from 'react'
import SearchCity from '../../components/SearchCity/SearchCity'
import ContentCity from '../../components/ContentCity/ContentCity'

import './Home.scss'

export default function Home() {
    return (
        <div className='Home d-flex flex-column justify-content-center align-items-center'>
            <h1>Welcome to Open Weather</h1>
            <div className='w-75'>
                <SearchCity />
            </div>
            <div className='w-75 py-5'>
                <ContentCity />
            </div>
        </div>
    )
}

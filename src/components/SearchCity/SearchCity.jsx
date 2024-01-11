import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CityApi from '../../api/cityApi';
import { useRecoilState } from 'recoil';
import { cityState } from '../../globalState/cityState';


export default function SearchCity() {

    const keySearch = useRef()
    const [dataCity, SetDataCity] = useRecoilState(cityState)
    const HandleSearch = async (e) => {
        try {
            const response = await CityApi.getSearch(keySearch.current.value);
            console.log('Fetch citydata successfully: ', response);
            SetDataCity(response.list);
        } catch (error) {
            console.log('Failed to fetch product list: ', error);
        }
    }
    return (
        <div className='w-100'>
            <div className="input-group">
                <input type="text"
                    className="form-control"
                    placeholder="Search city"
                    aria-label="Search..."
                    aria-describedby="button-addon3"
                    ref={keySearch}
                    onKeyUp={(e) => e.keyCode === 13 ? HandleSearch() : ''}
                />
                <button
                    className="btn btn-dark text-white"
                    type="button"
                    id="button-addon2"
                    onClick={() => HandleSearch()}
                >
                    Search
                </button>
            </div>
        </div>
    )
}

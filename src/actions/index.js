import axios from 'axios';

const API_KEY = 'c82abdfdad4d8d5420aff3d0139fb345';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATER = 'FETCH_WEATER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request : ', request);

    return{
        type : FETCH_WEATER,
        payload : request
    };
}
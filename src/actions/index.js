const API_KEY = '3097d9e29cdafbb58d604d1f9518184e';
//used es6 template string. Nice!
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = fetch(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

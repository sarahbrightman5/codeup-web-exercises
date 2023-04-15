import {keys} from './keys.js'
export const initMap = async()=>{
    mapboxgl.accessToken = keys.MAPBOX_APPID
    let map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
        zoom: 9, // starting zoom
        center: [-98.4916, 29.4252] // [lng, lat]
    });
    return map;
}
export const getCurrentWeather = async (lng,lat)=>{
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${keys.OPEN_WEATHER_APPID}&units=imperial`);
        let data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}
export const getWeeklyForcast = async(lng,lat)=>{
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${keys.OPEN_WEATHER_APPID}&units=imperial`);
        let data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }

}

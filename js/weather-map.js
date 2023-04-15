import {initMap, getCurrentWeather, getWeeklyForcast} from './mapbox-utils.js'

(async ()=>{
    const map = await initMap();
    const currentWeather = await getCurrentWeather(-98.4936,29.4221);
    console.log(currentWeather);
    const weeklyWeather = await getWeeklyForcast(-98.4936,29.4221);
    console.log(weeklyWeather);
})();
"use strict"
mapboxgl.accessToken = MAPBOX_APPID
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
    zoom: 9, // starting zoom
    center: [-98.4916, 29.4252] // [lng, lat]
});
const $firstCard = $("#firstCard");
let foreCard = [];

let SALat= 29.4221;
let SALong =-98.4936;
let lat=29.4221;
let lon=-98.4936;
// window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
// window.myWidgetParam.push({id: 15,cityid: '4726206',appid: 'OPEN_WEATHER_APPID',units: 'imperial',containerid: 'openweathermap-widget-15',  });

// const cards = [
//     {id: 1, cardHeaderCity: 'dallas', cardDate: 'date', cardTemp: 'temp', cardDescription: 'description', cardHumidity: 'humidity', cardWind: 'wind', cardPressure: 'pressure'},
//     {id: 2, cardHeaderCity: 'San Antonio', cardDate: 'date', cardTemp: 'temp', cardDescription: 'description', cardHumidity: 'humidity', cardWind: 'wind', card: 'pressure'},
//     {id: 3, cardHeaderCity: 'San Antonio', cardDate: 'date', cardTemp: 'temp', cardDescription: 'description', cardHumidity: 'humidity', cardWind: 'wind', card: 'pressure'},
//     {id: 4, cardHeaderCity: 'San Antonio', cardDate: 'date', cardTemp: 'temp', cardDescription: 'description', cardHumidity: 'humidity', cardWind: 'wind', card: 'pressure'},
//
// ]
$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`) // end of get
    .done(data=> {
        console.log('current weather');
        console.log(data);//array
        console.log(data.dt);//not readable date
        console.log(data.coord);//lng and lat
        console.log(data.weather[0].description);
        console.log(data.main.temp);
        console.log(data.main.pressure);
        console.log(data.main.humidity);
        console.log(data.wind.speed);
        console.log(data.name);




        // function renderCards(test){
        let html =`<div id="cards">`;
        html += `<div class="ch-wrapper">`;
        html += '<h2 class="card-header card-city"></h2>';
        html += '<div class="card-header card-date"></div>';
        html += '</div>';
        html += '<div class="ct-wrapper">';
        html += '<p class="card-temp">' + data.main.temp + '</p>';
        html += '</div>';
        html += '<div class="cd-wrapper">';
        html += '<p class=" card-description">' + data.weather[0].description+ '</p>';
        html += '</div>';
        html += '<div class="chum-wrapper">';
        html += '<p class=" card-humidity">' + data.main.humidity + '</p>';
        html += '</div>';
        html += '<div class="cw-wrapper">';
        html += '<p class="card-wind">' +data.wind.speed + '</p>';
        html += '</div>';
        html += '<div class="cp-wrapper">';
        html += '<p class="card-pressure">' +data.main.pressure + '</p>';
        html += '</div>';
        html += '</div>';
        //     return html;
        // }

        $("#weather").html(html);

    });

$.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(weekdata =>{
        console.log('weekly forecast')
        console.log(weekdata);
        let forecastHtml = '';
        // console.log("The temperature is: " + data.main.temp);
        weekdata.list.forEach((forecast, index) => {
                if (index % 8 === 0 && index !== 0) {
                    foreCard.push(forecast)
                    const time = new Date(forecast.dt * 1000);
                    console.log(time.getHours());
                    console.log(time.getTime());
                    console.log(time.getDay());
                    console.log(forecast.main.temp);
                    console.log(forecast.main.humidity);
                    console.log(forecast.main.pressure);
                    console.log(forecast.dt_txt);
                    console.log(forecast.weather[0].description);
                    console.log(forecast.wind.speed);
                    console.log('data end');

                    forecastHtml +=`<div id="cards">`;
                    forecastHtml += `<div class="ch-wrapper">`;
                    forecastHtml += '<h2 class="card-header card-city"></h2>';
                    forecastHtml += '<div class="card-header card-date"></div>';
                    forecastHtml += '</div>';
                    forecastHtml += '<div class="ct-wrapper">';
                    forecastHtml += '<p class="card-temp">' + forecast.main.temp + '</p>';
                    forecastHtml += '</div>';
                    forecastHtml += '<div class="cd-wrapper">';
                    forecastHtml += '<p class=" card-description">' + forecast.weather[0].description+ '</p>';
                    forecastHtml += '</div>';
                    forecastHtml += '<div class="chum-wrapper">';
                    forecastHtml += '<p class=" card-humidity">' + forecast.main.humidity + '</p>';
                    forecastHtml += '</div>';
                    forecastHtml += '<div class="cw-wrapper">';
                    forecastHtml += '<p class="card-wind">' +forecast.wind.speed + '</p>';
                    forecastHtml += '</div>';
                    forecastHtml += '<div class="cp-wrapper">';
                    forecastHtml += '<p class="card-pressure">' +forecast.main.pressure + '</p>';
                    forecastHtml += '</div>';
                    forecastHtml += '</div>';
                } // end of if (index % 8 ...)
                $("#forecast").html(forecastHtml);
            } // end of foreach function

        ); // end of foreach
    } // end of .done function
);// end of .done
// const marker = new mapboxgl.Marker() // initialize a new marker
//     .setLngLat([-98.4916, 29.4252]) // Marker [lng, lat] coordinates
//     .addTo(map); // Add the marker to the map
// const geocoder = new MapboxGeocoder({
//     // Initialize the geocoder
//     accessToken: mapboxgl.accessToken, // Set the access token
//     mapboxgl: mapboxgl, // Set the mapbox-gl instance
//     marker: false // Do not use the default marker style

// });
// After the map style has loaded on the page,
// add a source layer and default styling for a single point
// map.on('load', () => {
//     map.addSource('single-point', {
//         type: 'geojson',
//         data: {
//             type: 'FeatureCollection',
//             features: [],
//         }
//     });
//     map.addLayer({
//         id: 'point',
//         source: 'single-point',
//         type: 'circle',
//         paint: {
//             'circle-radius': 15,
//             'circle-color': '#b2bead',
//
//         }
//     });
//     // Listen for the `result` event from the Geocoder
//     // `result` event is triggered when a user makes a selection
//     //  Add a marker at the result's coordinates
//     geocoder.on('result', (event) => {
//         map.getSource('single-point').setData(event.result.geometry);
//     });
// });
// Add the geocoder to the map
// map.addControl(geocoder);
// console.log(geocoder);
// console.log(map);

// function getData(data){
//
// }
// function renderHtml(card) {
//     let html =`<div id="cards">`;
//     html += `<div class="ch-wrapper">`;
//     html += '<h2 class="card-header card-city">' + card.HeaderCity + '</h2>';
//     html += '<div class="card-header card-date">' +card.date + '</div>';
//     html += '</div>';
//     html += '<div class="ct-wrapper">';
//     html += '<p class="card-temp">' + card.temp + '</p>';
//     html += '</div>';
//     html += '<div class="cd-wrapper">';
//     html += '<p class=" card-description">' + card.description + '</p>';
//     html += '</div>';
//     html += '<div class="chum-wrapper">';
//     html += '<p class=" card-humidity">' + card.humidity + '</p>';
//     html += '</div>';
//     html += '<div class="cw-wrapper">';
//     html += '<p class="card-wind">' + card.wind + '</p>';
//     html += '</div>';
//     html += '<div class="cp-wrapper">';
//     html += '<p class="card-pressure">' + card.pressure + '</p>';
//     html += '</div>';
//     html += '</div>';
//     return html;
// }

// function renderCard(car){
//     let html ='';
//     for(let i = 0; i<car.length; i++){
//         html= renderHtml(car[i]);
//     }return html;
// }

// (function() {
//     let d = document, s = d.createElement('script');
//     s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
//     s.setAttribute('data-timestamp', +new Date());
//     (d.head || d.body).appendChild(s);
// })();
// function cardConstructor(temp, humidity,){
//     this.temp = temp;
// }
// const cardbody = document.querySelector('#firstCard');
// const data = document.getElementById("data");
// let Latitude;
// let Longitude;
const key = "MAPBOX_APPID";
const url = "http://api.openweathermap.org/data/2.5/weather?";

// Function to get the latitude and longitude data
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        data_of_Lat_Lon.innerHTML =
            "Geolocation is not supported by this browser";
    }
}

// Function to fetch the Latitude and Longitude
// from position data
// function showPosition(position) {
//     Latitude = position.coords.latitude;
//     Longitude = position.coords.longitude;
//
//     getData(Latitude, Longitude);
// }

// Fetching the data and calling the API
// function getData(Lat, Lon) {
//     const readyToSent = (url + "lat=" + Lat
//         + "&lon=" + Lon + "&appid=" + key);
//     fetch(readyToSent)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             fetchData(data)
//         })
// }

// // Fetching the JSON file and printing it to
// // the paragraph which is called by ID data
// function fetchData(data) {
//     const icon = "http://openweathermap.org/img/wn/"
//         + data.weather[0].icon + "@2x.png"
//
//     document.getElementById("data").innerHTML =
//         "<b>The weather report of your Location is :-"
//         + "</b><br> <img src=" + icon + "><br>"
//         + "<b>Country :</b>" + data.sys.country
//         + "<br><b>Local Area Name :</b>"
//         + data.name + "<br><b>Temp. :</b>"
//         + parseFloat((data.main.temp - 273.15))
//             .toFixed(1) + "℃" +
//         "<br><b>But You will feel like :</b>"
//         + parseFloat((data.main.feels_like -
//             273.15)).toFixed(1) + "℃"
//         + "<br><b>Min. Temp. :</b>"
//         + parseFloat((data.main.temp_min -
//             273.15)).toFixed(1) + "℃"
//         + "<br><b>Max. Temp. :</b>"
//         + parseFloat((data.main.temp_max -
//             273.15)).toFixed(1) + "℃"
//         + "<br><b>Pressure :</b>"
//         + data.main.pressure + "hPa"
//         + "<br><b>Humidity :</b>"
//         + data.main.humidity + "%"
//         + "<br><b>Weather :</b>"
//         + data.weather[0].description + "<br>"
// }
//
// // Function call
// getLocation();
// showPosition();
// getData();
const date = document.querySelector(".card-date");
const descriptions = document.querySelector(".card-description");
const searchBar = document.querySelector("#searchBar");
const searchButton = document.querySelector("#search-button");
const cityHeader = document.querySelector("#headCity");

const card = document.querySelector("#cards");
// cardbody.innerHTML = renderCards(cards);


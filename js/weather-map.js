mapboxgl.accessToken = MAPBOX_APPID
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
    zoom: 9, // starting zoom
    center: [-98.4916, 29.4252] // [lng, lat]
});


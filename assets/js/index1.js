/*VACÍO POR AHORA*/
var map = L.map('map').setView([-38.7359326, -73.0208552], 11);
 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    opacity: 1.0,
    attribution: '',
    minZoom: 10,
    maxZoom: 14,
    minNativeZoom: 0,
    maxNativeZoom: 18,
}).addTo(map);

/*CONTROL UBICACIÓN*/
L.control.locate({
position: 'topleft',
flyTo: true,
strings: {
title: "KIUS"
    }
}).addTo(map);



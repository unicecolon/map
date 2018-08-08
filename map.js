// 1. create variables for our map
// 2. Write a function that initializes our map
// 3. We're going to run that funciton

var ourLoc;
var view;
var map;


function init() {
    ourLoc = ol.proj.fromLonLat([41.043316, 28.862457]);

    view = new ol.View({
        center: ourLoc,
        zoom: 6
    });

    map = new ol.Map({
        target: 'map',
        //Create layers ("Paints" the map onto your website)
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        loadTilesWhileAnimating: true,
        view:view
    });

    console.log("we loaded this init function BAM");
}

// AFTER SHE STRUGGLED FOR 80 YEARS, Kanyce finally realized, 
// Part of the DOM pattern (style of coding)
// console.log == print for JS, which prints *gag
// To CREATE the map, we RUN our init function
// This runs when we first open up our website

// document.addEventListener("DOMContentLoaded", function (e){
//     console.log("LOADED LSKDMFLKSDMFLKSDMFLKM");
//     init();
// });

window.onload = init;


// Animates the map - zooms in (but we need to connect this to a button)
function panHome() {
    view.animate({
        center: ourLoc,
        duration: 2000
    });
}

// Create a function that will go to a specific location
// Using another API

function panToLocation() {
    var countryName = document.getElementById("country-name").value;

    //Error check to make sure the country is spelled correctly
    if(countryName === "United States") {
        alert("You didn't enter a country name!");
        return;
    }
    var lon = 0.0;
    var lat = 0.0;
    

    //we're accessing a REST API to get the country's 
    //location data (we customize the query to access the API)
    var query = "https://restcountries.eu/rest/v2/name/"+countryName;
    query = query.replace(/ /g, "%20");
    alert(query);

    // We are now REQUESTING - talking to the server
    var countryRequest = new XMLHttpRequest();
    countryRequest.open('GET', query, false);

    // WE have a request, send it to the server 
    countryRequest.send();

    var location = ol.proj.fromLonLat([lon, lat]);

    view.animate({
        center: location,
        duration: 2000
    });
    
}
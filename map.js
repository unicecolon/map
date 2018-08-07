//create variables for map
//write a funcation that initalizes our map
//we're going to run that function

var ourLoc;
var view;
var map;

function init()
{
    ourLoc = ol.proj.fromLonLat([40.7128, 28.862457]);
    view = new ol.View
    ({
        center: ourLoc,
        zoom: 6
    });

    map = new ol.Map
    ({
        target: 'map',
        //Create layers("Paints" the map onto your website)
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        loadTilesWhileAnimiating: true,
        view: view
    });
}

document.addEventListener("DOMContentLoaded", function(e){
    console.log("LOADED ASDFGHJKL")
    init();
});

window.onload = init;
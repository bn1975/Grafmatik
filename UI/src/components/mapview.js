import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';

const stamenTonerTiles = 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png';


const mapCenter = [40.6646792, -73.9330821];
const zoomLevel = 15;

export default class Mapview extends Component {
    render() {
        return (
            <div className="mapBox">
                <Map
                    center={mapCenter}
                    zoom={zoomLevel}
                >
                    <TileLayer
                        url={stamenTonerTiles}
                    />
                    <Marker position={[40.6646792, -73.9330821]}/>


                      // icon: Leaflet.Icon (optional)
                      // zIndexOffset: number (optional)
                      // opacity: number (optional)
                    />
                </Map>
            </div>
        );
    }
}

// var map = L.map('map', {
//     center: [51.505, -0.09],
//     zoom: 13
// });
//
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
// attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);
//
// L.marker([51.5, -0.09]).addTo(map)
// .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
// .openPopup();

render(
    <Mapview />,
    document.getElementById('root')
);

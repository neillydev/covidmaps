import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import Coronavirus from '../Icons/Coronavirus';
import MapModal from '../MapModal/MapModal';

import styles from './Map.module.css';


const Map = ({ coordinates, customCenter, country, handleCountryClick }) => {
    const [center, setCenter] = useState({
        lat: 38.4265,
        lng: -115.8756
    });
    const [zoom, setZoom] = useState(6);
    const [hovered, setHovered] = useState(null);

    const sizes = {
        '20': 20,
        '1000': 24,
        '10000': 28,
        '100000': 30,
        '500000': 34,
        '750000': 38,
        '1000000': 40,
        '2000000': 44,
        '3000000': 48,
        '5000000': 52,
    };

    const handleMouseEnter = (coordinateObj, e) => {
        if(e.target.className.baseVal && e.target.className.baseVal.includes('logo')){
            setHovered(coordinateObj);
        }
    }

    const handleMouseLeave = (e) => {
        setHovered(null);
    }

    const handleOnClick = (coordinateObj) => {
        setHovered(null);
        setCenter({
            lat: Number(coordinateObj.lat),
            lng: Number(coordinateObj.long)
        });
        //Change CountryList scroll position to wherever the country is now set to
        handleCountryClick(coordinateObj.country);
    }

    const handleOnChange = (e) => {
        //Check if zoom level changed and update widget accordingly if widget is present
        if(e.zoom !== zoom){
            setZoom(e.zoom);
        }
    }

    
    //Need to make zooming dynamic with MapWidgets
    return (
        <div className={styles['map-container']}>
            <h3 className={styles['map-title']}>Global Map</h3>
            <div className={styles['map-body']}>
            <div style={{ height: '100%', width: '100%', borderRadius: '20px' }}>
                <GoogleMapReact
                    onChange={handleOnChange}
                    className={styles['map-object']}
                    bootstrapURLKeys={{ key: process.env.REACT_APP_KEY}}
                    center={customCenter ? ((customCenter.lat && customCenter.lng) !== 0 ? customCenter : null) : center}
                    zoom={zoom}
                    yesIWantToUseGoogleMapApiInternals
                >
                    {customCenter && (customCenter.lat && customCenter.lng) !== 0 ? <MapModal lat={customCenter.lat} lng={customCenter.lng} country={country} /> 
                    : null}
                    {hovered && (hovered.lat && hovered.lng) !== 0  ? <MapModal lat={hovered.lat} lng={hovered.long} country={hovered.country} /> : null }
                    {coordinates.map(coordinateObj => {
                        let size = 20;
                        Object.keys(sizes).map((sizeValue, i) => {
                                if(sizeValue <= coordinateObj.cases){
                                    size = sizes[sizeValue];
                                }
                            }
                        )
                        return ((coordinateObj.lat && coordinateObj.long) !== undefined && (coordinateObj.lat && coordinateObj.long) !== 0 ? 
                        <Coronavirus lat={coordinateObj.lat} lng={coordinateObj.long} width={size} height={size} 
                            handleMouseEnter={(e) => handleMouseEnter({
                                country: coordinateObj.country, 
                                cases: coordinateObj.cases, 
                                recovered: coordinateObj.recovered, 
                                deaths: coordinateObj.deaths, 
                                lat: `${Number(coordinateObj.lat)}`, 
                                long: `${Number(coordinateObj.long)}`}, 
                                e
                            )} 
                            handleMouseLeave={handleMouseLeave}
                            handleOnClick={(e) => handleOnClick(coordinateObj)}
                        />
                        : null)
                    })}
                </GoogleMapReact>
      </div>
            </div>
        </div>
    )
}

export default Map

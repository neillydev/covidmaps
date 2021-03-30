import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';
import Coronavirus from '../Icons/Coronavirus';
import MapWidget from '../MapWidget/MapWidget';

import styles from './Map.module.css';

import { fetchCoordinates } from '../../api'

const Map = ({ center, zoom }) => {
    const [hovered, setHovered] = useState(null);
    const [coordinates, setCoordinates] = useState([]);
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
    }

    const handleMouseEnter = (coordinateObj, e) => {
        if(e.target.className.baseVal && e.target.className.baseVal.includes('logo')){
            setHovered(coordinateObj);
        }
    }

    const handleMouseLeave = (e) => {
        setHovered(null);
    }

    useEffect(() => {
        const getCoordinates = async () => {
            setCoordinates(await fetchCoordinates());
        };

        getCoordinates();
    }, [coordinates]);
    
    return (
        <div className={styles['map-container']}>
            <h3 className={styles['map-title']}>Global Map</h3>
            <div className={styles['map-body']}>
            <div style={{ height: '100%', width: '100%', borderRadius: '20px' }}>
                <GoogleMapReact
                    className={styles['map-object']}
                    bootstrapURLKeys={{ key: 'AIzaSyCvVPgeueqEBqHcGAshCdAKJSdjhr6GFCA' }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                    yesIWantToUseGoogleMapApiInternals
                >
                    {hovered ? <MapWidget lat={hovered.lat} lng={hovered.long} /> : null}
                    {coordinates.map(coordinateObj => {
                        let size = sizes[Object.keys(sizes).filter((sizeValue, i) => (sizeValue <= coordinateObj.cases && Object.keys(sizes)[i+1] > coordinateObj.cases ))];
                        return ((coordinateObj.lat && coordinateObj.long) !== undefined ? <Coronavirus lat={coordinateObj.lat} lng={coordinateObj.long} width={size} height={size} handleMouseEnter={(e) => handleMouseEnter({lat: `${Number(coordinateObj.lat) + 1.6}`, long: `${Number(coordinateObj.long) + .5}`}, e)} handleMouseLeave={handleMouseLeave} /> : null)
                    })}
                </GoogleMapReact>
      </div>
            </div>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 38.4265,
        lng: -115.8756
    },
    zoom: 6
};

export default Map

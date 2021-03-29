import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker'

import styles from './Map.module.css'

const Map = ({center, zoom}) => {

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
                    <Marker
                        lat={70.955413}
                        lng={30.337844}
                    />
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

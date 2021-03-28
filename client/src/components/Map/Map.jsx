import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker'

import styles from './Map.module.css'

const Map = () => {

    const mapProperties = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
    };

    return (
        <div className={styles['map-container']}>
            <h3 className={styles['map-title']}>Global Map</h3>
            <div className={styles['map-body']}>
            <div style={{ height: '100%', width: '100%', borderRadius: '20px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCvVPgeueqEBqHcGAshCdAKJSdjhr6GFCA' }}
                    defaultCenter={mapProperties.center}
                    defaultZoom={mapProperties.zoom}
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

export default Map

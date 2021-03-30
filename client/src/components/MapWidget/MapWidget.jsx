import React from 'react';

import styles from './MapWidget.module.css';

const MapWidget = ({ country }) => {
    return (
        <div className={styles['widget-container']}>
            <h2 className={styles['widget-header']}>{country}</h2>
        </div>
    )
}

export default MapWidget

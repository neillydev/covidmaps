import React from 'react';

import styles from './MapWidget.module.css';

const MapWidget = ({ country }) => {
    return (
        <div className={styles['widget-container']}>
            <h2 className={styles['widget-header']}>{country}</h2>
            <h3 className={styles['widget-text']}>Cases:</h3>
            <h3 className={styles['widget-text']}>Recoveries:</h3>
            <h3 className={styles['widget-text']}>Deaths:</h3>
        </div>
    )
}

export default MapWidget

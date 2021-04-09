import React from 'react';
import CountUp from 'react-countup'

import styles from './MapWidget.module.css';

const MapWidget = ({ country, cases, recovered, deaths }) => {
    return (
        <div className={styles['widget-container']}>
            <h2 className={styles['widget-header']}>{country}</h2>
            <h3 className={styles['widget-text']}>Cases</h3>
            {<CountUp start={0} end={cases} duration={1.5} separator=',' />}
            <h3 className={styles['widget-text']}>Recoveries</h3>
            {<CountUp start={0} end={recovered} duration={1.5} separator=',' />}
            <h3 className={styles['widget-text']}>Deaths</h3>
            {<CountUp start={0} end={deaths} duration={1.5} separator=',' />}
        </div>
    )
}

export default MapWidget

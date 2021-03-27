import React from 'react'
import CountUp from 'react-countup'

import styles from './Footer.module.css'

const Footer = ({ confirmed, recovered, deaths }) => {
    return (
        <div className={styles['footer-container']}>
            <div className={styles['footer-body']}>
                <div className={styles['footer-subbody']}>
                    <h4 className={styles['footer-subtitle']}>Cases</h4>
                    <CountUp start={0} end={confirmed} duration={2.5} separator=',' />
                </div>
                <div className={styles['footer-separator']} />
                <div className={styles['footer-subbody']}>
                    <h4 className={styles['footer-subtitle']}>Recovered</h4>
                    <CountUp start={0} end={recovered} duration={2.5} separator=',' />
                </div>
                <div className={styles['footer-separator']} />
                <div className={styles['footer-subbody']}>
                    <h4 className={styles['footer-subtitle']}>Deaths</h4>
                    <CountUp start={0} end={deaths} duration={2.5} separator=',' />
                </div>
            </div>
        </div>
    )
}

export default Footer

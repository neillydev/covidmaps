import React, {useState, useEffect} from 'react'

import styles from './Footer.module.css'

import { fetchCountries } from '../../api'

const Footer = () => {
    return (
        <div className={styles['footer-container']}>
            <div className={styles['footer-body']}>
                <div className={styles['footer-subbody']}>
                    <h4 className={styles['footer-subtitle']}>Cases</h4>
                    <h2 className={styles['footer-subtext']}>0</h2>
                </div>
                <div className={styles['footer-separator']} />
                <div className={styles['footer-subbody']}>
                    <h4 className={styles['footer-subtitle']}>Recovered</h4>
                    <h2 className={styles['footer-subtext']}>0</h2>
                </div>
                <div className={styles['footer-separator']} />
                <div className={styles['footer-subbody']}>
                    <h4 className={styles['footer-subtitle']}>Deaths</h4>
                    <h2 className={styles['footer-subtext']}>0</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer

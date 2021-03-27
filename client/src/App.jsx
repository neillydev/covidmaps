import React from 'react'

import styles from './App.module.css'

import CountryList from './components/CountryList/CountryList'
import Card from './components/Card/Card'
import Map from './components/Map/Map'

import logo from './imgs/logo.png'

const App = () => (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles['header-corner']}></div>
            <img className={`${styles.title} ${styles.image}`} src={logo} alt='Covid Maps' />
            <h1 className={styles.title}>COVID MAPS</h1>
        </div>
        <div className={styles['content-container']}>
            <CountryList />
            <Map />
        </div>
        <Footer />
    </div>
)

export default App

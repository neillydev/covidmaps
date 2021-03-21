import React from 'react'
import CountryList from './components/CountryList/CountryList'

import styles from './App.module.css'
import logo from './imgs/logo.png'



const App = () => (
    <div className={styles.container}>
        <img className={styles.image} src={logo} alt='Covid Maps' />
        <h1>COVID MAPS</h1>
        <CountryList />
    </div>
)

export default App

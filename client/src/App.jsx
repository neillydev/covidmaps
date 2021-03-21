import React from 'react'

import styles from './App.module.css'

import logo from './imgs/logo.png'

const App = () => (
    <div className={styles.container}>
        <img className={styles.image} src={logo} alt='Covid Maps' />
        <h1>COVID MAPS</h1>
    </div>
)

export default App

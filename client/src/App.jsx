import React, {useState, useEffect} from 'react'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import CountryList from './components/CountryList/CountryList'
import Map from './components/Map/Map'

import styles from './App.module.css'
import logo from './assets/imgs/logo.png'

const App = () => {
    const [country, setCountry] = useState('');

    const handleClick = (countryName) => {
        setCountry(countryName);
    }

    useEffect(() => {
        setCountry('Global');
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.first}>
                    <div className={styles['header-corner']}></div>
                    <img className={`${styles.title} ${styles.image}`} src={logo} alt='Covid Maps' />
                    <h1 className={styles.title}>COVID MAPS</h1>
                </div>
                <div className={styles.second}>
                    <NavBar />
                </div>
            </div>
            <div className={styles['content-container']}>
                <CountryList country={country} handleClick={handleClick} />
                <Map country={country} handleCountryClick={handleClick} />
            </div>
            <Footer country={country} />
        </div>
    )
}

export default App

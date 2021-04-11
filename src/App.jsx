import React, {useState, useEffect} from 'react'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import CountryList from './components/CountryList/CountryList'
import Map from './components/Map/Map'

import styles from './App.module.css'
import logo from './assets/imgs/logo.png'

import { fetchCoordinates, fetchGlobalData } from './api'

const App = () => {
    const [country, setCountry] = useState('');
    const [customCenter, setCustomCenter] = useState(null);
    const [coordinates, setCoordinates] = useState([]);
    const [globalData, setGlobalData ] = useState({});

    const handleClick = (countryName) => {
        const countryObj = coordinates.filter(coordinateObj => coordinateObj.country === countryName)[0];
            setGlobalData(null);

        setCountry(countryName);
        if(countryObj){
            setCustomCenter({
                lat: Number(countryObj.lat),
                lng: Number(countryObj.long)
            });
        }
    }

    useEffect(() => {
        setCountry('Global');
    }, []);

    useEffect(() => {
        const getGlobalData = async () => {
            await fetchGlobalData().then(({ confirmed, deaths, recovered }) => {
                setGlobalData({confirmed, deaths, recovered});
            }).catch(error=>{
                console.log(error);
            });
        };
        if(country === 'Global'){
            getGlobalData();
        }
    }, [country]);

    useEffect(() => {
        const getCoordinates = async () => {
            setCoordinates(await fetchCoordinates());
        };

        getCoordinates();
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
                <Map coordinates={coordinates} customCenter={customCenter} country={country} handleCountryClick={handleClick} />
            </div>
            <Footer country={country} globalData={globalData} />
        </div>
    )
}

export default App

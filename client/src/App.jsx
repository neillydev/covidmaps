import React, {useState, useEffect} from 'react'

import styles from './App.module.css'

import CountryList from './components/CountryList/CountryList'
import Footer from './components/Footer/Footer'
import Map from './components/Map/Map'

import logo from './imgs/logo.png'

import { fetchCountries, fetchCountryData } from './api'

const App = () => {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState([]);
    const [cases, setCases] = useState(0);
    const [recoveries, setRecoveries] = useState(0);
    const [deathToll, setDeathToll] = useState(0);

    const handleClick = (e) => {
        setCountry(e.target.innerText);
    }
    
    useEffect(() => {
        setCountry('Global');
    }, []);

    useEffect(() => {
        const getCountries = async () => {
            setCountries(await fetchCountries());
        };

        getCountries();
    }, [countries]);

    useEffect(() => {
        const getCaseData = async () => {
            await fetchCountryData(country).then(({data: { All: {confirmed, recovered, deaths} }}) => {
                setCases(confirmed);
                setRecoveries(recovered);
                setDeathToll(deaths);
            });
        };

        getCaseData();
    }, [country])


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles['header-corner']}></div>
                <img className={`${styles.title} ${styles.image}`} src={logo} alt='Covid Maps' />
                <h1 className={styles.title}>COVID MAPS</h1>
            </div>
            <div className={styles['content-container']}>
                <CountryList countries={countries} country={country} handleClick={handleClick} />
                <Map />
            </div>
            <Footer confirmed={cases} recovered={recoveries} deaths={deathToll} />
        </div>
    )
}

export default App

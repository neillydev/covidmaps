import React, {useState, useEffect} from 'react'
import CountryList from './components/CountryList/CountryList'
import Footer from './components/Footer/Footer'
import Map from './components/Map/Map'

import styles from './App.module.css'
import logo from './imgs/logo.png'

import { fetchCountries, fetchCountryData, fetchCoordinates } from './api'

const App = () => {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState([]);
    const [cases, setCases] = useState(0);
    const [recoveries, setRecoveries] = useState(0);
    const [deathToll, setDeathToll] = useState(0);
    const [coordinates, setCoordinates] = useState([]);

    const handleClick = (e) => {
        setCountry(e.target.innerText);
    }

    const onMouseEnter = (e) => {

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
            }).catch(error=>{
                console.log(error);
            });
        };

        getCaseData();
    }, [country]);

    
    useEffect(() => {
        const getCoordinates = async () => {
            await fetchCoordinates().then(response=>{
                const { data: allData } = response;
                let coordinateArray = [];
                for(const [country, {All: countryData}] of Object.entries(allData)) {
                    coordinateArray.push({
                        lat: countryData.lat,
                        long: countryData.long,
                    });
                }
                setCoordinates(coordinateArray);
            }).catch(error => {
    
            });
        };

        getCoordinates();
    }, [coordinates]);


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles['header-corner']}></div>
                <img className={`${styles.title} ${styles.image}`} src={logo} alt='Covid Maps' />
                <h1 className={styles.title}>COVID MAPS</h1>
            </div>
            <div className={styles['content-container']}>
                <CountryList countries={countries} country={country} handleClick={handleClick} />
                <Map onMouseEnter={onMouseEnter} coordinates={coordinates} />
            </div>
            <Footer confirmed={cases} recovered={recoveries} deaths={deathToll} />
        </div>
    )
}

export default App

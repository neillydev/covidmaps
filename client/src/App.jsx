import React, {useState, useEffect} from 'react'
import CountryList from './components/CountryList/CountryList'
import Footer from './components/Footer/Footer'
import Map from './components/Map/Map'

import styles from './App.module.css'
import logo from './assets/imgs/logo.png'

import { fetchCountries, fetchCountryData, fetchCoordinates } from './api'

const App = () => {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [cases, setCases] = useState(0);
    const [recoveries, setRecoveries] = useState(0);
    const [deathToll, setDeathToll] = useState(0);
    const [coordinates, setCoordinates] = useState([]);

    const handleClick = (e) => {
        setCountry(e.target.innerText);
    }
    const getCountries = async () => {
        await fetchCountries().then(response =>{
            const { data: allData } = response;
            let countryArray = ["Global", "US"];
            for(const [country] of Object.entries(allData)) {
                countryArray.push(countryArray.includes(country) ? null : country);
            }
            setCountries(countryArray);
        }).catch(error=>{

        });
    };

    const handleKeyDown = (e) => {
        if(e.target.value.length > 0) {
            console.log(e.target.value)
            setFilteredCountries(countries.filter(countryName => countryName !== null && countryName.toLowerCase().includes(e.target.value)));
        }
        else{
            setFilteredCountries([]);
        }
    }

    const onMouseEnter = (e) => {

    }
    
    useEffect(() => {
        setCountry('Global');

        getCountries();
    }, []);

    useEffect(() => {
        
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
                        cases: countryData.confirmed,
                        country: countryData.country
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
                <CountryList countries={filteredCountries.length > 0 ? filteredCountries : countries} country={country} handleClick={handleClick} handleKeyDown={handleKeyDown} />
                <Map onMouseEnter={onMouseEnter} coordinates={coordinates}/>
            </div>
            <Footer cases={cases} recovered={recoveries} deaths={deathToll} />
        </div>
    )
}

export default App

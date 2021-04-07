import React, {useState, useEffect} from 'react'

import styles from './CountryList.module.css'

import CountryCard from '../CountryCard/CountryCard'
import SearchBar from '../SearchBar/SearchBar'

import { fetchCountries } from '../../api'

const CountryList = ({ country, handleClick }) => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    //use onChange for this
    const handleKeyDown = (e) => {
        if(e.target.value.length > 0) {
            console.log(e.target.value)
            setFilteredCountries(countries.filter(countryObj => countryObj['Country'] !== null && countryObj['Country'].toLowerCase().includes(e.target.value)));
        }
        else{
            setFilteredCountries([]);
        }
    }

    useEffect(() => {
        const getCountries = async () => {
            const countryArray = await fetchCountries();
            const refinedCountryArray = [];
            countryArray.map(countryObj => refinedCountryArray.push(countryObj.name));
            setCountries(refinedCountryArray);
        };
        getCountries();
    }, []);

    return (
        <div className={styles['list-container']}>
            <SearchBar handleKeyDown={handleKeyDown} />
            <div className={styles['list-body']}>
                <CountryCard country={country} countries={countries} filteredCountries={filteredCountries} handleClick={(e) => handleClick(e.target.innerText)} />
            </div>
        </div>
    )
}

export default CountryList

import React, {useState, useEffect} from 'react'

import styles from './CountryList.module.css'

import CountryCard from '../CountryCard/CountryCard'
import SearchBar from '../SearchBar/SearchBar'

import { fetchCountries } from '../../api'

const CountryList = ({ country, handleClick }) => {
    const [countries, setCountries] = useState(['Global']);
    const [filteredCountries, setFilteredCountries] = useState([]);
    
    const handleOnChange = (e) => {
        if(e.target.value.length > 0) {
            console.log(e.target.value)
            setFilteredCountries(countries.filter(name => name !== null && name.toLowerCase().includes(e.target.value)));
        }
        else{
            setFilteredCountries([]);
        }
    }

    useEffect(() => {
        const getCountries = async () => {
            await fetchCountries().then(countryArray => {
                const refinedCountryArray = [];
                countryArray.map(countryObj => refinedCountryArray.push(countryObj.name));
                setCountries(countries.concat(refinedCountryArray));
            });
        };
        getCountries();
    }, []);

    return (
        <div className={styles['list-container']}>
            <SearchBar handleOnChange={handleOnChange} />
            <div className={styles['list-body']}>
                <CountryCard country={country} countries={countries} filteredCountries={filteredCountries} handleClick={(e) => handleClick(e.target.innerText)} />
            </div>
        </div>
    )
}

export default CountryList

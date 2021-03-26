import React, {useState, useEffect} from 'react'

import styles from './CountryList.module.css'

import CountryCard from '../CountryCard/CountryCard'
import SearchBar from '../SearchBar/SearchBar'

import { fetchCountries } from '../../api'

const CountryList = () => {
    const [countries, setCountries] = useState(['Worldwide']);

    useEffect(() => {
        const getCountries = async () => {
            setCountries(await fetchCountries());
        };

        getCountries();
    }, [countries]);

    return (
        <div className={styles['list-container']}>
            <SearchBar />
            <div className={styles['list-body']}>
                <CountryCard countryList={countries} />
            </div>
        </div>
    )
}

export default CountryList

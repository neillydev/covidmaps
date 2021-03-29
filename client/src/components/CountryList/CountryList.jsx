import React from 'react'

import styles from './CountryList.module.css'

import CountryCard from '../CountryCard/CountryCard'
import SearchBar from '../SearchBar/SearchBar'

const CountryList = ({ countries, country, handleClick, handleKeyDown  }) => {
    return (
        <div className={styles['list-container']}>
            <SearchBar handleKeyDown={handleKeyDown} />
            <div className={styles['list-body']}>
                <CountryCard countries={countries} country={country} handleClick={handleClick} />
            </div>
        </div>
    )
}

export default CountryList

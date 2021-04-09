import React from 'react'

import styles from './CountryCard.module.css'

const CountryCard = ({ country, countries, filteredCountries, handleClick }) => {
    const countryCallback = value => {
        return (
            <span className={styles['list-item']}>
                <button onClick={handleClick} className={country === value ? `${styles['list-btn']} ${styles.selectedBtn}` : styles['list-btn']}>
                    {value}
                </button>
            </span>
        )
    };

    return (
        <nav>
            {filteredCountries.length > 0 ? filteredCountries.map(countryCallback) : countries.map(countryCallback)}
        </nav>
    )
}

export default CountryCard

import React from 'react'

import styles from './CountryList.module.css'

import CountryCard from '../CountryCard/CountryCard'

const CountryList = () => {

    //get country list passed in from api data

    return (
        <div className={styles['list-container']}>
            <CountryCard countryList={countries} />
        </div>
    )
}

export default CountryList

import React from 'react'

import styles from './CountryCard.module.css'

const CountryCard = ({ countries, country, handleClick  }) => {

    return (
        <nav>
            {countries.map(value => {
                return (
                    <span className={styles['list-item']}>
                        <button onClick={handleClick} className={country === value ? `${styles['list-btn']} ${styles.selectedBtn}` : styles['list-btn']}>
                            {value}
                        </button>
                    </span>
                )
            })}
        </nav>
    )
}

export default CountryCard

import React from 'react'

import styles from './SearchBar.module.css'

const SearchBar = () => {
    return (
        <div className={styles['search-container']}>
            <div className={styles['search-bar']}>
                <i class="fas fa-search fa2x"></i>
                <input className={styles['search-input']} placeholder="Search location" />
            </div>
        </div>
    )
}

export default SearchBar

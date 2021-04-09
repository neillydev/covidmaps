import React from 'react'

import styles from './SearchBar.module.css'

const SearchBar = ({ handleKeyDown }) => {
    return (
        <div className={styles['search-container']}>
            <div className={styles['search-bar']}>
                <i className="fas fa-search fa2x"></i>
                <input className={styles['search-input']} placeholder="Search location" onKeyDown={handleKeyDown} />
            </div>
        </div>
    )
}

export default SearchBar

import React from 'react'

import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles['nav-container']}>
            <button className={styles['git-btn']}>
                <i class={`fab fa-github ${styles['git-icon']}`}></i>
            </button>
        </div>
    )
}

export default NavBar

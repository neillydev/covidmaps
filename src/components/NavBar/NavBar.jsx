import React from 'react'

import styles from './NavBar.module.css'

const NavBar = () => {

    const handleBtnClick = () => {
        window.open("https://github.com/neillycubed/covidmaps", "_blank");
    };
    
    return (
        <div className={styles['nav-container']}>
            <button onClick={handleBtnClick} className={styles['git-btn']}>
                <i class={`fab fa-github`}></i>
            </button>
        </div>
    )
}

export default NavBar

import React from 'react'

import styles from './Card.module.css'


const Card = () => {

    return (
        <div className={styles['card-container']}>
            <h3 className={styles['card-title']}>Worldwide</h3>
            <div className={styles['card-body']}>
                <div className={styles['card-subbody']}>
                    <h4 className={styles['card-subtitle']}>Cases</h4>
                    <h1 className={styles['card-subtext']}>0</h1>
                </div>
                <div className={styles['card-separator']} />
                <div className={styles['card-subbody']}>
                    <h4 className={styles['card-subtitle']}>Recovered</h4>
                    <h1 className={styles['card-subtext']}>0</h1>
                </div>
                <div className={styles['card-separator']} />
                <div className={styles['card-subbody']}>
                    <h4 className={styles['card-subtitle']}>Deaths</h4>
                    <h1 className={styles['card-subtext']}>0</h1>
                </div>
            </div>
        </div>
    )
}

export default Card

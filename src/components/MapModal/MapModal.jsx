import React from 'react';

import styles from './MapModal.module.css';

const MapModal = ({ country }) => {
    return (
        <div className={styles['modal-container']}>
            <div className={styles['modal-anchor']}>
                <div className={styles['modal-body']}>
                    <h2 className={styles['modal-header']}>{country}</h2>
                </div>
            </div>
        </div>
    )
}

export default MapModal

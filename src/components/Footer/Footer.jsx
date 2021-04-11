import React, {useState, useEffect} from 'react'
import CountUp from 'react-countup'

import styles from './Footer.module.css'

import { fetchCountryData } from '../../api'

const Footer = ({ country, globalData }) => {
    const [cases, setCases] = useState(0);
    const [recoveries, setRecoveries] = useState(0);
    const [deathToll, setDeathToll] = useState(0);

    const handleCaseData = caseData => {
        setCases(caseData.confirmed);
        setRecoveries(caseData.recovered);
        setDeathToll(caseData.deaths);
    };
    useEffect(() => {
        const getCaseData = async () => {
            await fetchCountryData(country).then(({ confirmed, deaths, recovered }) => {
                handleCaseData({ confirmed, deaths, recovered });
            }).catch(error=>{
                console.log(error);
            });
        };

        if(globalData){
            handleCaseData(globalData);
        }
        else{
            getCaseData();
        }
    }, [globalData,country]);

    return (
        <div className={styles['footer-container']}>
            <div className={styles['footer-body']}>
                <div className={styles['footer-subbody']}>
                    <h4 className={styles['footer-subtitle']}>Cases</h4>
                    <CountUp start={0} end={cases} duration={2.5} separator=',' />
                </div>
                <div className={styles['footer-separator']} />
                <div className={styles['footer-subbody']}>
                    <h4 className={styles['footer-subtitle']}>Recovered</h4>
                    <CountUp start={0} end={recoveries} duration={2.5} separator=',' />
                </div>
                <div className={styles['footer-separator']} />
                <div className={styles['footer-subbody']}>
                    <h4 className={styles['footer-subtitle']}>Deaths</h4>
                    <CountUp start={0} end={deathToll} duration={2.5} separator=',' />
                </div>
            </div>
        </div>
    )
}

export default Footer

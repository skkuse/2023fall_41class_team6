"use client";
import styles from '../../../styles/main/_analysis.module.css';

export default function Analysis({carbonSample}){
    console.log(carbonSample);
    return (
        <div className={styles.analysiscontainer}>
            <h1>Analysis</h1>
        </div>
    )
}
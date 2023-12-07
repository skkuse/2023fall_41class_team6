"use client";

import React from 'react';
import styles from '../../../styles/main/_ranking.module.css';

export default function Ranking({ranking}){
    // console.log(ranking);
    return (
        <>
            {/* <h3>Ranking</h3> */}
            <div className={styles.rankingcontainer}>
                {ranking.map((rank, index) => (
                    <div className={styles.rankingbox}>
                        <div style={{"display": "flex", "flex-direction": "row"}}>
                            <div>{index+1}위</div>
                            <div className={styles.rankingbox_name}>{rank.name}</div>
                        </div>
                        <div className={styles.rankingbox_score}>{rank.carbon_emission} </div>
                    </div>
                ))}
            </div>
        </>
    )
}
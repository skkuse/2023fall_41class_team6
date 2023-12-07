"use client";
import styles from '../../../styles/main/_analysis.module.css';

export default function Analysis({carbonSample}){
    console.log(carbonSample);

    return (
        <>
        { (carbonSample.length !== 0) ?
            <div className={styles.analysiscontainer}>
            <div className={styles.analysisname}>탄소 배출량 분석</div>
                <div className={styles.analysisboxline}>
                    <div className={styles.analysisbox}>
                        <img className={styles.analysisimage} src="/images/tree.png" alt="tree" />
                        <div className={styles.analysisdes}>{(100*carbonSample[0].figure)/800} 년 동안 활엽수가 흡수하는 탄소</div>
                    </div>
                    <div className={styles.analysisbox}>
                        <img className={styles.analysisimage} src="/images/mountain_fire.png" alt="mountain_fire" />
                        <div className={styles.analysisdes}>2023년 캐나다 산불이 배출한 탄소의 {(carbonSample[1].figure)/300000000000} 배 </div>
                    </div>
                </div>
                <div className={styles.analysisboxline}>
                    <div className={styles.analysisbox}>
                        <img className={styles.analysisimage} src="/images/chatgpt.png" alt="chatgpt" />
                        <div className={styles.analysisdes}>GPT-4 가 한번 학습할 때 배출하는 탄소의 {(carbonSample[2].figure)/12456000} 배</div>
                        {/* <div className={styles.analysisname}>{(100*carbonSample[0].figure)/800} 년 동안 활엽수가 흡수하는 탄소</div> */}
                    </div>
                    <div className={styles.analysisbox}>
                        <img className={styles.analysisimage} src="/images/trash.png" alt="trash" />
                        <div className={styles.analysisdes}>쓰레기를 {(carbonSample[3].figure)/1100} 톤 연소시킬 때 배출되는 탄소</div>
                        {/* <div className={styles.analysisname}>{(100*carbonSample[0].figure)/800} 년 동안 활엽수가 흡수하는 탄소</div> */}
                    </div>
                </div>
                <div className={styles.analysisboxline}>
                    <div className={styles.analysisbox}>
                        <img className={styles.analysisimage} src="/images/rocket.png" alt="rocket" />
                        <div className={styles.analysisdes}>로켓을 한 번 쏘아 올릴 때 배출되는 탄소의 {(carbonSample[4].figure)/200000}</div>
                        {/* <div className={styles.analysisname}>{(100*carbonSample[0].figure)/800} 년 동안 활엽수가 흡수하는 탄소</div> */}
                    </div>
                    <div className={styles.analysisbox}>
                        <img className={styles.analysisimage} src="/images/netflix.png" alt="netflix" />
                        <div className={styles.analysisdes}>넷플릭스를 {(carbonSample[5].figure)/0.441} 시간 이용할 때 배출되는 탄소</div>
                        {/* <div className={styles.analysisname}>{(100*carbonSample[0].figure)/800} 년 동안 활엽수가 흡수하는 탄소</div> */}
                    </div>
                </div>
                <div className={styles.analysisboxline}>
                    <div className={styles.analysisbox}>
                        <img className={styles.analysisimage} src="/images/boiler.png" alt="boiler" />
                        <div className={styles.analysisdes}>건물용 보일러를 {(carbonSample[6].figure)/2059} 시간 이용할 때 배출되는 탄소</div>
                        {/* <div className={styles.analysisname}>{(100*carbonSample[0].figure)/800} 년 동안 활엽수가 흡수하는 탄소</div> */}
                    </div>
                    <div className={styles.analysisbox}>
                        <img className={styles.analysisimage} src="/images/person.png" alt="person" />
                        <div className={styles.analysisdes}>한국인 한 명이 {(24*carbonSample[7].figure)/42} 시간동안 배출하는 탄소</div>
                        {/* <div className={styles.analysisname}>{(100*carbonSample[0].figure)/800} 년 동안 활엽수가 흡수하는 탄소</div> */}
                    </div>
                </div>
                <div className={styles.analysisboxline}>
                    <div className={styles.analysisbox}>
                        <img className={styles.analysisimage} src="/images/airplane.png" alt="airplane" />
                        <div className={styles.analysisdes}>여객기의 승객 1명이 {(carbonSample[8].figure)/0.255} km 이동할 때 배출되는 탄소</div>
                        {/* <div className={styles.analysisname}>{(100*carbonSample[0].figure)/800} 년 동안 활엽수가 흡수하는 탄소</div> */}
                    </div>
                    <div className={styles.analysisbox}>
                        <img className={styles.analysisimage} src="/images/power_plant.png" alt="power_plant" />
                        <div className={styles.analysisdes}>화력발전소가 {(carbonSample[9].figure)} kWh당 배출하는 탄소</div>
                        {/* <div className={styles.analysisname}>{(100*carbonSample[0].figure)/800} 년 동안 활엽수가 흡수하는 탄소</div> */}
                    </div>
                </div>
            </div>
        : null }
        </>
    )
}
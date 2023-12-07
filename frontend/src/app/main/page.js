"use client";

import Header from "../_components/common/_header"
import Analysis from "../_components/main/_analysis";
import Server from "../_components/main/_server";
import Coding from "../_components/main/_coding"
import Ranking from "../_components/main/_ranking";
import styles from "../../styles/main/Main.module.css";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {

    const [action, setAction] = useState("init");
    const [code, setCode] = useState("");
    const [baseCode, setBaseCode] = useState("");
    const [user, setUser] = useState(localStorage.getItem('userName'));

    const [carbonEmission, setCarbonEmission] = useState(0);
    const [executionServerInfo, setExecutionServerInfo] = useState({});
    const [carbonSample, setCarbonSample] = useState([]);
    const [ranking, setRanking] = useState([]);

    const submissionHandler = async (action, code) => {
        if (action !== null) {
            setAction(action);
        }
        setCode(code);
        console.log(action);

        if (action === 'runCarbon') {
            /* 탄소 배출량 계산 버튼*/
            console.log("탄소 배출량 계산");
            console.log(code);

            if (localStorage.getItem('userName') == null) {
                setUser("unknown");
                console.log(user);
            } else {
                setUser(localStorage.getItem('userName'));
                console.log(user);
            }

            console.log(code);

            let data = {
                "code": code,
                "user": user
            }

            console.log(data);

            try {
                await axios.post("http://localhost:8080/carbon", data)
                    .then((res) => {
                        setCarbonEmission(res.data.carbonEmission);
                        setExecutionServerInfo(res.data.executionServerInfo);  
                        setCarbonSample(res.data.carbonSample);
                    })
            } catch (err) {
                console.log(err);
            }
        }
        setAction("init");
    };

    const getRanking = async () => {
        const res = await axios.get("http://localhost:8080/carbon/ranking")
        setRanking(res.data);
    };

    useEffect(() => {
        getRanking();
    }, [action]);

    return (
        <div className={styles.maincontainer}>
            <Header />
            <Ranking ranking={ranking}/>
            <div className={styles.infocontainer}>
                <div className={styles.codingcontainer}>
                    <Coding onInteract={submissionHandler} carbonEmission={carbonEmission}/>
                </div>
                <div className={styles.servercontainer}>
                    <Server executionServerInfo={executionServerInfo}/>
                </div>
            </div>
            <Analysis carbonSample={carbonSample}/>
        </div>
        
    )
}

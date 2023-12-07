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
    const [user, setUser] = useState("");

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
            }

            let data = {
                "code": code,
                "user": user
            }

            try {
                const res = await axios.post("http://localhost:8080/carbon", data)
                console.log(res.data);

                setCarbonEmission(res.data.carbonEmission);
                setExecutionServerInfo(res.data.executionServerInfo);  
                setCarbonSample(res.data.carbonSample);
            } catch (err) {
                console.log(err);
            }
        }
        setAction("init");
    };

    const getRanking = async () => {
        const res = await axios.get("http://localhost:8080/carbon/ranking")
        console.log(res.data);

        setRanking(res.data);
    };

    useEffect(() => {
        getRanking();
    }, [action]);

    return (
        <div className={styles.maincontainer}>
            <Header />
            <Ranking ranking={ranking}/>
            <Coding onInteract={submissionHandler} carbonEmission={carbonEmission}/>
            <Server executionServerInfo={executionServerInfo}/>
            <Analysis carbonSample={carbonSample}/>
        </div>
        
    )
}

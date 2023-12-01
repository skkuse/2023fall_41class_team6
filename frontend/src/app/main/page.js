"use client";

import Header from "../_components/common/_header"
import Analysis from "../_components/main/_analysis";
import Server from "../_components/main/_server";
import Coding from "../_components/main/_coding"
import Ranking from "../_components/main/_ranking";
import styles from "../../styles/main/Main.module.css";
import { useState } from "react";

export default function Main() {

    const [action, setAction] = useState("init");
    const [code, setCode] = useState("");
    const [baseCode, setBaseCode] = useState("");

    const submissionHandler = async (action, code) => {
        if (action !== null) {
            setAction(action);
        }
        setCode(code);
        console.log(action);
        if (action === 'runCode') {
            /* 실행 버튼 */
            console.log("실행");
            console.log(code);
            // submit(user_id, assignment, code)
            //     .then(submission => {
            //     console.log(`Submission ID: ${submission._id}`);
            //     // grade(submission._id)
            // });
        } 

        else if (action === 'runCarbon') {
            /* 탄소 배출량 계산 버튼*/
            console.log("탄소 배출량 계산");
            console.log(code);
        }

        // else if (action === 'runTestSuite') {
        //     setTestQueue(testsuite);
        //     submit(user_id, assignment, code)
        //         .then(submission => {
        //         console.log(`Submission ID: ${submission._id}`);
        //         // grade(submission._id)
        //         });
        //     } 
        // else if (action === 'submit') {
        //     submit(user_id, assignment, code)
        //         .then(submission => {
        //         console.log(`Submission ID: ${submission._id}`);
        //         // grade(submission._id)
        //         });
        // } 
    };

    return (
        <div className={styles.maincontainer}>
            <Header />
            <Ranking />
            <Coding onInteract={submissionHandler}/>
            <Server />
            <Analysis />
        </div>
        
    )
}

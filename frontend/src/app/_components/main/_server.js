"use client";
import React, {useEffect, useState} from 'react';
import {Form, Button, Table} from 'react-bootstrap';
import styles from '../../../styles/main/_server.module.css';

export default function Server({executionServerInfo}){

    console.log(executionServerInfo)

    return (
        <div className={styles.servercontainer}>
            <div className={styles.server_name}>실행 서버 정보</div>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>nCPUcores</td>
                        <td>{executionServerInfo.nCPUcores}</td>
                    </tr>
                    <tr>
                        <td>CPUpower</td>
                        <td>{executionServerInfo.CPUpower}</td>
                    </tr>
                    <tr>
                        <td>usageCPUUsed</td>
                        <td>{executionServerInfo.usageCPUUsed}</td>
                    </tr>
                    <tr>
                        <td>memory</td>
                        <td>{executionServerInfo.memory}</td>
                    </tr>
                    <tr>
                        <td>memoryPower</td>
                        <td>{executionServerInfo.memoryPower}</td>
                    </tr>
                    <tr>
                        <td>countryName</td>
                        <td>{executionServerInfo.countryName}</td>
                    </tr>
                    <tr>
                        <td>runTime</td>
                        <td>{executionServerInfo.runTime}</td>
                    </tr>
                    <tr>
                        <td>PUE</td>
                        <td>{executionServerInfo.PUE}</td>
                    </tr>
                    <tr>
                        <td>PSF</td>
                        <td>{executionServerInfo.PSF}</td>
                    </tr>
                    <tr>
                        <td>carbonIntensity</td>
                        <td>{executionServerInfo.carbonIntensity}</td>
                    </tr>
                    <tr>
                        <td>provider</td>
                        <td>{executionServerInfo.provider}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
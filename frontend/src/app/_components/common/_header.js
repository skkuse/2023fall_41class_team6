"use client";

import React, {useEffect, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import styles from '../../../styles/common/_header.module.css';
import axios from 'axios';

export default function Header(){
    const [isLogin, setIsLogin] = useState(false);
    const [userName, setUserName] = useState("");   

    async function login(){
        // local storage에 저장
        if (typeof window !== 'undefined') {
            localStorage.setItem('userName', userName);
            setIsLogin(true);

            try {
                const res = await axios.get("http://localhost:8080/user/login", {
                    params: {user: localStorage.getItem('userName')}
                })
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }

        }
        console.log(localStorage.getItem('userName'));    
    }

    function logout() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('userName');
            setIsLogin(false);
        }
    }

    return (
        <div className={styles.headerbox}>
            <h3>탄소배출량 계산 Team 6</h3>
            <div className={styles.logincontainer}>
                {isLogin ? 
                <>
                    <h4>{localStorage.getItem('userId')}님 환영합니다!</h4>
                    <Button className="mb-3" variant="outline-success" onClick={() => logout()}>Logout</Button>
                </> : 
                <>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" onChange={e => setUserName(e.target.value)}/>
                        </Form.Group>
                    </Form>
                    <Button className="mb-3" variant="success" onClick={() => login()}>Login</Button>
                </>
                }
            </div>
        </div>
    )
}
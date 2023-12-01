"use client";

import React, {use, useEffect, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import styles from '../../../styles/common/_header.module.css';

export default function Header(){
    const [isLogin, setIsLogin] = useState(false);
    const [userId, setUserId] = useState("");   

    function login(){
        // local storage에 저장
        if (typeof window !== 'undefined') {
            localStorage.setItem('userId', userId);
            setIsLogin(true);
        }
        console.log(localStorage.getItem('userId'));    
    }

    function logout() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('userId');
            setIsLogin(false);
        }
        console.log(localStorage.getItem('userId'));    
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
                            <Form.Control type="text" onChange={e => setUserId(e.target.value)}/>
                        </Form.Group>
                    </Form>
                    <Button className="mb-3" variant="success" onClick={() => login()}>Login</Button>
                </>
                }
            </div>
        </div>
    )
}
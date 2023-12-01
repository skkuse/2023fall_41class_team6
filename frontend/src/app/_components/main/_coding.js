"use client";
import Editor from "@monaco-editor/react";
import React, { useRef } from 'react';

import styles from '../../../styles/main/_coding.module.css';

export default function Coding({onInteract}){
    const editorRef = useRef(null);

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
        onInteract('init', editorRef.current.getValue());
    }
    
    const handleContentChange = (value, event) => {
        onInteract(null, value);
    }

    function openFile() {
        var input = document.createElement("input");
    
        input.type = "file";
        input.accept = ".java";
        input.onchange = function (event) {
            processFile(event.target.files[0]);
            event.target.value = "";
        };
        input.click();
    }

    function processFile(file) {
        var reader = new FileReader();
        reader.onload = function () {
            // console.log(reader.result);
            editorRef.current.setValue(reader.result);
        };
        reader.readAsText(file);
    }

    function interaction (action) {
        onInteract(action, editorRef.current.getValue());
    }

    function initialization() {
        // editorRef.current.setValue(basecode);
    }

    return (
        <div>
        <h1>Coding</h1>
        <div className={styles.codingbox}>
            <div className={styles.border}>
                <Editor
                    onMount={handleEditorDidMount}
                    onChange={handleContentChange}
                    defaultLanguage="java"
                    defaultValue="// some comment" 
                    options={{
                    minimap: {
                        enabled: false,
                    },
                    fontSize: 12,
                    glyphMargin: true,
                    contextmenu: false
                    }} />
            </div>
            <div className={styles.buttons}>
                <div>
                    <button type="button" style={{ backgroundColor: "white", border: "none" }}>
                        <img src="/images/file.png" alt="file" className={styles.image_button}
                        onClick={() => { openFile(); }} />
                    </button>
                    <button type="button" style={{ backgroundColor: "white", border: "none" }} >
                        <img src="/images/copy.png" alt="file" className={styles.image_button}
                        onClick={() => navigator.clipboard.writeText(editorRef.current.getValue())} />
                    </button>
                    <button type="button"
                        style={{ backgroundColor: "#414E5A", color: "white", fontSize: "12px", margin: "2px" }}
                        onClick={() => interaction('runCode')}>
                        실행
                    </button>
                    <button type="button"
                        style={{ backgroundColor: "#414E5A", color: "white", fontSize: "12px", margin: "2px" }}
                        onClick={() => interaction('runCarbon')}>
                        탄소 배출량 계산
                    </button>
                    <button type="button"
                        style={{ backgroundColor: "#414E5A", color: "white", fontSize: "12px", margin: "2px" }}
                        onClick={() => initialization('runClear')}>
                        초기화
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}
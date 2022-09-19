import React, { useState } from "react";
import './styles/App.css'
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";

function App() {
    const [value, setValue] = useState('text from input');

    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong>1. JavaScript</strong>
                    <div>JS - programming language</div>
                </div>
                <div className="post__btns">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default App;

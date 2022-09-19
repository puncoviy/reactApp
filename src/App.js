import React, { useState } from "react";
import './styles/App.css'
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";

function App() {
    const [value, setValue] = useState('text from input');

    return (
        <div className="App">
            <PostItem post={{id: 1, title: 'JavaScript', body: 'Comment Content'}} />
            <PostItem post={{id: 2, title: 'JavaScript', body: 'Comment Content'}} />
            <PostItem post={{id: 3, title: 'JavaScript', body: 'Comment Content'}} />
            <PostItem post={{id: 4, title: 'JavaScript', body: 'Comment Content'}} />
            <PostItem post={{id: 5, title: 'JavaScript', body: 'Comment Content'}} />
        </div>
    );
}

export default App;

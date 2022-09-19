import React, { useState } from "react";
import './styles/App.css'
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Comment Content'},
        {id: 2, title: 'JavaScript', body: 'Comment Content'},
        {id: 3, title: 'JavaScript', body: 'Comment Content'}
    ])
    const [posts2, setPosts2] = useState([
        {id: 1, title: 'Python', body: 'Comment Content'},
        {id: 2, title: 'Python', body: 'Comment Content'},
        {id: 3, title: 'Python', body: 'Comment Content'}
    ])

    return (
        <div className="App">
            <PostList posts={posts} title='Posts List 1'/>
            <PostList posts={posts2} title='Posts List 2'/>
        </div>
    );
}

export default App;

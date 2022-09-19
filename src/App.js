import React, { useState } from "react";
import './styles/App.css'
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from './components/UI/button/MyButton';
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Comment Content' },
        { id: 2, title: 'JavaScript', body: 'Comment Content' },
        { id: 3, title: 'JavaScript', body: 'Comment Content' }
    ])

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            body
        }
        console.log(newPost)
    }

    return (
        <div className="App">
            <form action="post">
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Title" />
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder="Text" />
                <MyButton onClick={addNewPost}>Submit</MyButton>
            </form>
            <PostList posts={posts} title='Posts List 1' />
        </div>
    );
}

export default App;

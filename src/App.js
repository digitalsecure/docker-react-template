import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h2>Posts</h2>
      <PostList />
    </div>
  );
}

export default App;

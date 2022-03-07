import React from 'react';
import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';

function App() {
 // montando os componentes como fica em tela
 // assembling the components as shown on screen
  return (
    <>
    <Header />
    <PostList />
    </>
  );
}

export default App;
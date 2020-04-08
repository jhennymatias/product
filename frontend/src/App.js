import React from 'react';
import Header from './components/header'
import './style.css'
import Main from './pages/main'
import { render } from 'react-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;

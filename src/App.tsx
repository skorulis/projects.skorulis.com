import React from 'react';
import './css/App.css';
import { ProjectList } from './scene/ProjectList';
import { Header } from "./scene/Header"

function App() {
  return (
    <div className='main'>
      <Header />
      <div className='page-content'>
        <ProjectList />
      </div>
    </div>
  );
}

export default App;

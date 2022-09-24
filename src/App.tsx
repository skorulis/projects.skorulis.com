import React from 'react';
import './css/App.css';
import { ProjectList } from './scene/ProjectList';
import { Header } from "./scene/Header"

function App() {
  return (
    <div>
      <Header />
      <ProjectList />
    </div>
  );
}

export default App;

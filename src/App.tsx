import React from 'react';
import './App.css';
import { ProjectList } from './scene/ProjectList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Projects
        </h1>
        <p>
          Under construction
        </p>
        <ProjectList />
      </header>
    </div>
  );
}

export default App;

import { Component } from "react"; 
import './css/App.css';
import { ProjectList } from './scene/ProjectList';
import { ProjectDetails } from "./scene/ProjectDetails";
import { Header } from "./scene/Header"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams
} from "react-router-dom";

export default class App extends Component<{}> {

  render() {
    return (
      <div className='main'>
        {this.router()}
      </div>
    );
  }

  router() {
    return <Router>
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/project/:id" element={<ProjectDetailsWrapper />} />
      </Routes>
    </Router>
  }
}

function ProjectDetailsWrapper() {
  let { id } = useParams();

  return (
    <ProjectDetails id={ parseFloat(id as string)} />
  );
}
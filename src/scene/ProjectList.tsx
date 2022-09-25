import { Component } from "react"; 

import data from "../data/projects.json"
import { Project } from "../model/Project";
import { ProjectCell } from "./ProjectCell";
import { Header } from "./Header";

export class ProjectList extends Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    // Rendering

    render() {
        return <div>
            <Header />
            <h1>Project list</h1>
            {this.projects().map( (proj) =>
                <ProjectCell project={proj}  />
            )} 
        </div>
        
    }

    // Computed values

    projects(): Project[] {
        return data
    }
}
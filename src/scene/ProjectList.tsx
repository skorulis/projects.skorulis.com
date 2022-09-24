import { Component } from "react"; 

import data from "../data/projects.json"
import { Project } from "../model/Project";
import { ProjectCell } from "./ProjectCell";

export class ProjectList extends Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    render() {
        return <div>
            <h1>Project list</h1>
            {this.projects().map( (proj) =>
                <ProjectCell project={proj}  />
            )} 
        </div>
        
    }

    projects(): Project[] {
        return data
    }
}
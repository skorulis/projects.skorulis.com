import { Component } from "react"; 
import { ProjectCell } from "./ProjectCell";
import { Header } from "./Header";
import { DataProvider } from "../logic/DataProvider";

const data = new DataProvider()

export class ProjectList extends Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    // Rendering

    render() {
        return <div>
            <Header />
            <div className="pageContent">
                {data.sortedProjects().map( (proj) =>
                    <ProjectCell project={proj} key={`${proj.id}`}  />
                )} 
            </div>
        </div>
        
    }

}
import { Component } from "react"; 
import { Project } from "../model/Project";
import CSS from 'csstype';
import githubLogo from "./github-icon.png"

type ProjectCellProps = {
    project: Project
}

export class ProjectCell extends Component<ProjectCellProps, {}> {

    constructor(props: ProjectCellProps) {
        super(props);
    }

    // Rendering

    render() {
        return <div style={containerStyle}>
            <h3>{this.numberString()} {this.props.project.name}</h3>
            <p>{this.props.project.brief}</p>
            {this.maybeSources()}
        </div>
        
    }

    maybeSources() {
        let sources = this.props.project.sourceCode
        if (!sources || sources.length == 0) {
            return
        }
        let items = sources.map( (source) => {
            return <a href={source.url} > <img src={githubLogo} width={30} /> {source.title}</a>
        })

        return <div style={containerStyle}>
            {items}
        </div>
    }

    // Computed values

    numberString() {
        return `#${this.props.project.id}`
    }

}

const containerStyle: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start"
}
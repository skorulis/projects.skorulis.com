import { Component } from "react"; 
import { Project } from "../model/Project";
import CSS from 'csstype';

type ProjectCellProps = {
    project: Project
}

export class ProjectCell extends Component<ProjectCellProps, {}> {

    constructor(props: ProjectCellProps) {
        super(props);
    }

    render() {
        return <div style={h1Styles}>
            <h3>{this.numberString()} {this.props.project.name}</h3>
            <p>{this.props.project.brief}</p>
        </div>
        
    }

    numberString() {
        return `#${this.props.project.id}`
    }

}

const h1Styles: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start"
}
import { Component } from "react"; 
import { Project } from "../model/Project";

type ProjectCellProps = {
    project: Project
}

export class ProjectCell extends Component<ProjectCellProps, {}> {

    constructor(props: ProjectCellProps) {
        super(props);
    }

    render() {
        return <p>{this.numberString()} {this.props.project.name}</p>
    }

    numberString() {
        return `#${this.props.project.id}`
    }

}
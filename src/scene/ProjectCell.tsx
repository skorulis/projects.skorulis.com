import { Component } from "react"; 
import { Project, Status } from "../model/Project";
import CSS from 'csstype';
import { Color } from "../Theme"

import {
    Link as RouteLink
  } from "react-router-dom";
import { ProjectImage } from "./ProjectImage";

type ProjectCellProps = {
    project: Project
}

export class ProjectCell extends Component<ProjectCellProps, {}> {

    constructor(props: ProjectCellProps) {
        super(props);
    }

    // Rendering

    render() {
        let link = `/project/${this.props.project.id}`
        return <RouteLink to={link} >
            {this.content()}
        </RouteLink>
    }

    content() {
        return <div style={containerStyle}>
            <ProjectImage url={this.props.project.icon} />
            <div >
                <h2><span className="number">{this.numberString()}</span> {this.props.project.name}</h2>
                {this.status()}
                <p>{this.props.project.shortBrief}</p>
            </div>
            <img src={"assets/chevron.svg"} width={32} className="logoColor" style={arrowStyle}  />
        
        </div>
    }

    status() {
        return <p>Status: <b>{this.props.project.status} {this.statusIcon()}</b></p>
    }

    // Computed values

    numberString() {
        return `#${this.props.project.id}`
    }

    statusIcon(): string {
        switch (this.props.project.status) {
            case Status.idea:
                return "💡"
            case Status.started:
                return "🚧"
            case Status.preAlpha:
                return "(α)"
            case Status.alpha:
                return "(α)"
            case Status.beta:
                return "(β)"
            case Status.live:
                return "⚡"
            default:
                return ""
        }
    }

}

const containerStyle: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Color.lightBG,
    margin: "12px",
    padding: "12px",
    borderRadius: "10px",
    gap: "30px",
    maxWidth: "600px"
}

const logoStyle: CSS.Properties = {
    backgroundColor: "white",
    mask: "url(icons/project1.svg) no-repeat center",
    width: "40px",
    height: "40px"
}

const arrowStyle: CSS.Properties = {
    marginLeft: "auto",
    marginRight: "10px"
}
import { Component } from "react"; 
import { Project } from "../model/Project";
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
                <p>Status: <b>{this.props.project.status}</b></p>
                <p>{this.props.project.shortBrief}</p>
            </div>
            <img src={"assets/chevron.svg"} width={32} className="logoColor" style={arrowStyle}  />
        
        </div>
    }

    // Computed values

    numberString() {
        return `#${this.props.project.id}`
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
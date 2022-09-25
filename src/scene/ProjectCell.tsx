import { Component } from "react"; 
import { Project } from "../model/Project";
import CSS from 'csstype';
import githubLogo from "./github-icon.png"
import ReactMarkdown from 'react-markdown'
import { Color } from "../Theme"

import {
    Link as RouteLink
  } from "react-router-dom";

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
            <img src={this.props.project.icon} width={64} className="logoColor" />
            <div >
                <h2>{this.numberString()} {this.props.project.name}</h2>
                <p>{this.props.project.shortBrief}</p>
            </div>
        
        </div>
    }

    oldParts() {
        return <div>
            <h3>{this.numberString()} {this.props.project.name}</h3>
            {this.section("Brief", this.props.project.brief)}
            {this.section("Next", this.props.project.nextSteps)}
            {this.maybeSources()}
        </div>
    }

    maybeSources() {
        let sources = this.props.project.sourceCode
        if (!sources || sources.length == 0) {
            return
        }
        let items = sources.map( (source) => {
            return <a href={source.url}>
                <div style={sourceLink} >
                    <img src={githubLogo} width={20} /> 
                    {source.title}
                </div>
            </a>
            
            
        })
        return <div>
            <h3>Sources</h3>
            <div style={sourcesContainer}>
                {items}
            </div>
        </div>

        return 
    }

    section(title: string, body: string) {
        return <div>
            <h3>{title}</h3>
            <ReactMarkdown children={body} />
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

const sourcesContainer: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
    gap: "20px"
}

const sourceLink: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px"
}

const logoStyle: CSS.Properties = {
    backgroundColor: "white",
    mask: "url(icons/project1.svg) no-repeat center",
    width: "40px",
    height: "40px"
}
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
            <p>{body}</p>
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
    alignItems: "start",
    border: "solid 1px"
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
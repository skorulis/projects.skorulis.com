import { Component } from "react"; 
import CSS from 'csstype';
import {Color} from "../Theme"
import { Header } from "./Header";
import { Project } from "../model/Project"
import ReactMarkdown from 'react-markdown'
import data from "../data/projects.json"
import githubLogo from "./github-icon.png"

type ProjectDetailsProps = {
    id: number
}

export class ProjectDetails extends Component<ProjectDetailsProps, {}> {

    constructor(props: ProjectDetailsProps) {
        super(props);
    }

    // Rendering

    render() {
        let project = this.project()
        return <div>
            <Header />
            <div>
                {this.maybeProjectContent(project)}
                {this.maybeEmptyContent(project)}
            </div>
        </div>
    }

    maybeEmptyContent(project?: Project) {
        if (project) {
            return
        }
        return <h2>No project with id {this.props.id}</h2>
    }

    maybeProjectContent(project?: Project) {
        if (!project) {
            return
        }
        return <div style={containerStyle}>
            <div style={topRowStyle}>
                <img src={project.icon} width={64} className="logoColor" />
                <h2><span className="number">{this.numberString()}</span> {project.name}</h2>
            </div>
            {this.section("Brief", project.brief)}
            {this.section("Next", project.nextSteps)}
            {this.section("Tech", project.tech)}
            {this.maybeSources(project)}
        </div>
    }

    oldParts() {
        return <div>
            
        </div>
    }

    maybeSources(project: Project) {
        let sources = project.sourceCode
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
        return `#${this.props.id}`
    }

    project(): Project | undefined {
        let matches = this.projects().filter(x => x.id == this.props.id )
        if (matches.length == 0) {
            return undefined
        }
        return matches[0];
    }

    projects(): Project[] {
        return data
    }

}

const topRowStyle: CSS.Properties = {
    display: "flex",
    gap: "20px"
}

const containerStyle: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: Color.lightBG,
    margin: "24px",
    padding: "18px",
    borderRadius: "10px"
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

import { Component } from "react"; 
import CSS from 'csstype';
import {Color} from "../Theme"
import { Header } from "./Header";
import { Project } from "../model/Project"
import ReactMarkdown from 'react-markdown'
import githubLogo from "./github-icon.png"
import { ProjectImage } from "./ProjectImage";

import { DataProvider } from "../logic/DataProvider";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const data = new DataProvider()

type ProjectDetailsProps = {
    id: number
}

export class ProjectDetails extends Component<ProjectDetailsProps, {details?: string}> {

    constructor(props: ProjectDetailsProps) {
        super(props);
        this.state = {}
    }

    // Rendering

    render() {
        let project = data.project(this.props.id)
        return <div>
            <Header />
            <div>
                {this.maybeProjectContent(project)}
                {this.maybeEmptyContent(project)}
            </div>
        </div>
    }

    carousel(project: Project) {
        let images = project.images.map( (string) => {
            return {
                src: `/images/${string}`
            }
        }).reverse()
        if (images.length == 0) {
            return;
        }
        return <div>
            <h2>Screenshots</h2>
            <Carousel images={images} style={{ height: 1728, width: 700 }} />
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
                <ProjectImage url={project.icon} />
                <h2><span className="number">{this.numberString()}</span> {project.name}</h2>
            </div>
            {this.maybeDetails()}
            {this.maybeSources(project)}
            {this.carousel(project)}
        </div>
    }

    oldParts() {
        return <div>
            
        </div>
    }

    maybeDetails() {
        let text = this.state.details
        if (!text) {
            return
        }
        return <ReactMarkdown children={text} />
    }

    maybeSources(project: Project) {
        let sources = project.sourceCode
        if (!sources || sources.length == 0) {
            return
        }
        let items = sources.map( (source) => {
            return <a href={source.url} key={source.url}>
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

    // Lifecycle

    async componentDidMount() {
        const markdownPath = require(`../data/project${this.props.id}.md`);
        let result = await fetch(markdownPath)
        let text = await result.text()
        this.setState({details: text})
    }   

    // Computed values

    numberString() {
        return `#${this.props.id}`
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

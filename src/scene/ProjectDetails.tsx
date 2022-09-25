import { Component } from "react"; 
import CSS from 'csstype';
import {Color} from "../Theme"
import { Header } from "./Header";

type ProjectDetailsProps = {
    id: number
}

export class ProjectDetails extends Component<ProjectDetailsProps, {}> {

    constructor(props: ProjectDetailsProps) {
        super(props);
    }

    // Rendering

    render() {
        return <div>
            <Header />
            {this.props.id}
        </div>
    }

}

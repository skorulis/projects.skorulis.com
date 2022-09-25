import { Component } from "react"; 
import CSS from 'csstype';

type ProjectImageProps = {
    url: string
}

export class ProjectImage extends Component<ProjectImageProps, {}> {

    constructor(props: ProjectImageProps) {
        super(props);
    }

    // Rendering

    render() {
        let url = this.props.url
        if (url.endsWith(".svg")) {
            return <img src={url} width={64} className="logoColor" />
        } else {
            return <img src={url} width={64} style={pngStyle}  />
        }
        
    }

}

const pngStyle: CSS.Properties = {
    alignSelf: "center"
}
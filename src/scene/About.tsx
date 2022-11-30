import { Component } from "react"; 
import { Header } from "./Header";

export class About extends Component<{}, {}> {

    // Rendering

    render() {
        return <div>
            <Header />
            <div className="pageContent">
                <h4>
                    This site lists all the projects that I'm working on, have considered working on or have completely given up on.<br/>
                    If you would like help drive the direction of my projects head to <a href="https://www.reddit.com/r/skorulis/">r/skorulis</a> to contribute to the discussion.
                </h4>
            </div>
            
        </div>
    }

}
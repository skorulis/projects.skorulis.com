import { Component } from "react"; 

export class Header extends Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    // Rendering

    render() {
        return <header>
            <h1>
                Projects
            </h1>
      </header>
    }

}
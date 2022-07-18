import { Fragment, Component } from "react";

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        console.log("class: constructor");
    }

    componentDidMount() {
        console.log("class: componentDidMount");
    }

    componentWillUnmount() {
        console.log("class: componentWillUnmount");
    }

    componentDidUpdate() {
        console.log("class: componentDidUpdate");
    }

    render() {
        return (
            <Fragment>
                {console.log("class: render")}
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    click
                </button>
                <h1>{this.state.count}</h1>
            </Fragment>
        );
    }
}

export default ClassComponent;

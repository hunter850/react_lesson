import { Fragment, useState, useEffect, useRef } from "react";

function initNumber() {
    console.log("funciton: constructor");
    return 0;
}

function FunctionalComponent() {
    const [count, setCount] = useState(initNumber());
    const initRef = useRef(false);
    useEffect(() => {
        console.log("function: componentDidMount");
        return () => console.log("function: componentWillUnmount");
    }, []);
    useEffect(() => {
        if (initRef.current === false) {
            initRef.current = true;
        } else {
            console.log("function: componentDidUpdate");
        }
    }, [count]);
    return (
        <Fragment>
            {console.log("function: render")}
            <button onClick={() => setCount(count + 1)}>click</button>
            <h1>{count}</h1>
        </Fragment>
    );
}

export default FunctionalComponent;

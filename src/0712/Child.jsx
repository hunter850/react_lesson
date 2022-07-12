import { Fragment, useEffect } from "react";

function Child(props) {
    const { text, myNumber, myFunction, clg } = props;
    useEffect(() => {
        clg();
    }, [clg]);
    return (
        <Fragment>
            <h1>{text}</h1>
            <h1>{myNumber}</h1>
            <button onClick={myFunction}>click</button>
        </Fragment>
    );
}

export default Child;

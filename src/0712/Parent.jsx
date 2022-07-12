import { Fragment, useState, useCallback } from "react";
import Child from "./Child";

// function clg() {
//     console.log("hello");
// }
function Parent() {
    const clg = useCallback(() => {
        console.log("hello");
    }, []);
    const [count, setCount] = useState(0);
    return (
        <Fragment>
            <Child
                text="Hello React"
                myNumber={123}
                myFunction={() => {
                    console.log("hello");
                }}
                clg={clg}
            />
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click</button>
        </Fragment>
    );
}

export default Parent;

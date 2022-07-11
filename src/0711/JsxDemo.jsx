import { Fragment } from "react";

function JsxDemo() {
    return (
        <Fragment>
            <h1>Number</h1>
            {152 - 1}
            {NaN}
            <hr />
            <h1>String</h1>
            {"Hello React"}
            {`Hello JSX`}
            <hr />
            <h1>Boolean</h1>
            {true}
            {false}
            <hr />
            <h1>null</h1>
            {null}
            <hr />
            <h1>undefined</h1>
            {undefined}
            <hr />
            <h1>Array</h1>
            {[1, 2, 3, 4]}
            <hr />
        </Fragment>
    );
}

export default JsxDemo;

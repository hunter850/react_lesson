import { Fragment } from "react";

function PropsChildA({ parentData }) {
    return (
        <Fragment>
            <h1>{parentData}</h1>
        </Fragment>
    );
}

export default PropsChildA;

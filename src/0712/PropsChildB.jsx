import { Fragment, useState } from "react";

function PropsChildB({ setDataFromCildB }) {
    const [childBData] = useState("child b data");
    return (
        <Fragment>
            <button onClick={() => setDataFromCildB(childBData)}>
                set data to parent
            </button>
        </Fragment>
    );
}

export default PropsChildB;

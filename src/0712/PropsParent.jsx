import { Fragment, useState } from "react";
import PropsChildA from "./PropsChildA";
import PropsChildB from "./PropsChildB";

function PropsParent() {
    const [parentData, setParentData] = useState("Parent Data");
    const [dataFromCildB, setDataFromCildB] = useState("");
    return (
        <Fragment>
            <button onClick={() => setParentData("Hello React")}>
                change parent data
            </button>
            <PropsChildA parentData={parentData} />
            <PropsChildB setDataFromCildB={setDataFromCildB} />
            <h1>data from b: {dataFromCildB}</h1>
        </Fragment>
    );
}

export default PropsParent;

import { Fragment, useState } from "react";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";

function CompareTwo() {
    const [showFunctional, setShowFunctional] = useState(true);
    const [showClass, setShowClass] = useState(true);
    return (
        <Fragment>
            <button onClick={() => setShowFunctional(!showFunctional)}>
                toggle functional component
            </button>
            <button onClick={() => setShowClass(!showClass)}>
                toggle class component
            </button>
            <br />
            <br />
            {showFunctional && <FunctionalComponent />}
            {showClass && <ClassComponent />}
        </Fragment>
    );
}

export default CompareTwo;

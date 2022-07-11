import { Fragment } from "react";
import { data } from "./data/student";

function MapDemo() {
    return (
        <Fragment>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </Fragment>
    );
}

export default MapDemo;

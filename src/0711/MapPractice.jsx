import { Fragment } from "react";
import data from "./data/products.json";
import "./css/MapDemo.css";

function MapPractice() {
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>picture</th>
                        <th>stock</th>
                        <th>name</th>
                        <th>price</th>
                        <th>tags</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <img src={item.picture} alt={item.name} />
                            </td>
                            <td>{item.stock}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.tags}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default MapPractice;

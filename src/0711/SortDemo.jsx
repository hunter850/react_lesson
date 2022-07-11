import { Fragment, useState, useEffect } from "react";
import { data } from "./data/student";
import useLog from "../hooks/useLog";

function SortDemo() {
    const [dataArray, setDataArray] = useState(data);
    const [sort, setSort] = useState("");
    const changeHandler = (event) => {
        setSort(event.target.value);
    };
    useLog(sort);
    useEffect(() => {
        if (sort === "ASC") {
            setDataArray((pre) =>
                [...pre].sort((a, b) => {
                    return a.id - b.id;
                })
            );
        } else if (sort === "DESC") {
            setDataArray((pre) =>
                [...pre].sort((a, b) => {
                    return b.id - a.id;
                })
            );
        }
    }, [sort]);
    return (
        <Fragment>
            <select value={sort} onChange={changeHandler}>
                <option value="" disabled>
                    -- 請選擇 --
                </option>
                <option value="ASC">順序</option>
                <option value="DESC">倒序</option>
            </select>
            <ul>
                {dataArray.map((item) => (
                    <li key={item.id}>
                        <span>{item.id}</span>
                        <span>{item.name}</span>
                        <span>{item.birth}</span>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default SortDemo;

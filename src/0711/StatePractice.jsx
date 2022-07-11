import { Fragment, useState } from "react";
import "./css/menu.css";

function StatePractice() {
    const [isActive, setIsActive] = useState();
    const clickHandler = (e, num) => {
        e.preventDefault();
        setIsActive(num);
    };
    return (
        <Fragment>
            <ul>
                <li>
                    <a
                        href="#/"
                        onClick={(e) => clickHandler(e, 0)}
                        className={isActive === 0 ? "active" : ""}
                    >
                        首頁
                    </a>
                </li>
                <li>
                    <a
                        href="#/"
                        onClick={(e) => clickHandler(e, 1)}
                        className={isActive === 1 ? "active" : ""}
                    >
                        關於我們
                    </a>
                </li>
                <li>
                    <a
                        href="#/"
                        onClick={(e) => clickHandler(e, 2)}
                        className={isActive === 2 ? "active" : ""}
                    >
                        產品
                    </a>
                </li>
            </ul>
        </Fragment>
    );
}

export default StatePractice;

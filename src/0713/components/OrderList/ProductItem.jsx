import { Fragment, useCallback } from "react";

function ProductItem(props) {
    const { id, name, category, image, price, quantity, setRawDatas } = props;
    const clickHandler = useCallback(
        (num, id) => {
            if (quantity + num <= 1) {
                setRawDatas((pre) =>
                    pre.map((data) => {
                        if (data.id === id) {
                            return { ...data, quantity: 1 };
                        } else {
                            return { ...data };
                        }
                    })
                );
            } else {
                setRawDatas((pre) =>
                    pre.map((data) => {
                        if (data.id === id) {
                            return { ...data, quantity: data.quantity + num };
                        } else {
                            return { ...data };
                        }
                    })
                );
            }
        },
        [setRawDatas, quantity]
    );
    const deleteHandler = useCallback(
        (id) => {
            setRawDatas((pre) => {
                // const tempArray = JSON.parse(JSON.stringify(pre));
                const tempArray = pre.map((data) => ({ ...data }));
                return tempArray.filter((data) => data.id !== id);
            });
        },
        [setRawDatas]
    );
    return (
        <Fragment>
            <div className="row border-top border-bottom">
                <div className="row main align-items-center">
                    <div className="col-2">
                        <img alt="" className="img-fluid" src={image} />
                    </div>
                    <div className="col">
                        <div className="row text-muted">{category}</div>
                        <div className="row">{name}</div>
                    </div>
                    <div className="col">
                        <a
                            href="#/"
                            className="text-decoration-none text-dark"
                            onClick={() => clickHandler(-1, id)}
                        >
                            -
                        </a>
                        <a
                            href="#/"
                            className="border text-decoration-none text-dark"
                        >
                            {quantity}
                        </a>
                        <a
                            href="#/"
                            className="text-decoration-none text-dark"
                            onClick={() => clickHandler(1, id)}
                        >
                            +
                        </a>
                    </div>
                    <div className="col d-flex flex-between">
                        {price}{" "}
                        <span
                            className="close px-2"
                            style={{ cursor: "pointer" }}
                            onClick={() => deleteHandler(id)}
                        >
                            &#10005;
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProductItem;

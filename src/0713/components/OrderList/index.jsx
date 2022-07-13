import { Fragment } from "react";
import ProductItem from "./ProductItem";

function OrderList(props) {
    const { rawDatas, setRawDatas } = props;
    return (
        <Fragment>
            <div className="col-md-8 cart">
                <div className="title">
                    <div className="row">
                        <div className="col">
                            <h4>
                                <b>訂購單</b>
                            </h4>
                        </div>
                        <div className="col align-self-center text-end text-muted">
                            {rawDatas.length}種商品項目
                        </div>
                    </div>
                </div>
                {rawDatas.map((rawData) => (
                    <ProductItem
                        key={rawData.id}
                        setRawDatas={setRawDatas}
                        {...rawData}
                    />
                ))}
                <div className="back-to-shop">
                    <a href="#/" className="text-dark text-decoration-none">
                        ←
                    </a>
                    <span className="text-muted">回到商品頁</span>
                </div>
            </div>
        </Fragment>
    );
}

export default OrderList;

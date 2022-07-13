import { useState } from "react";
import OrderList from "./components/OrderList";
import Summary from "./components/Summary";
import { products } from "./data/products";
import "./css/OrderPage.css";

function OrderPage() {
    const [rawDatas, setRawDatas] = useState(products);
    return (
        <div className="card">
            <div className="row">
                <OrderList rawDatas={rawDatas} setRawDatas={setRawDatas} />
                <Summary rawDatas={rawDatas} />
            </div>
        </div>
    );
}

export default OrderPage;

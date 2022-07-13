import { Fragment, useMemo } from "react";

function Summary(props) {
    const { rawDatas } = props;
    const productQuantity = useMemo(() => {
        return rawDatas.reduce((pre, current) => pre + current.quantity, 0);
    }, [rawDatas]);
    const total = useMemo(() => {
        return rawDatas.reduce(
            (pre, current) => pre + current.quantity * current.price,
            0
        );
    }, [rawDatas]);
    return (
        <Fragment>
            <div className="col-md-4 summary">
                <div>
                    <h5>
                        <b>付款摘要</b>
                    </h5>
                </div>
                <hr />
                <div className="row">
                    <div className="col col-style">
                        共 {rawDatas.length} 項目
                    </div>
                    <div className="col col-style text-end">
                        {productQuantity} 件商品
                    </div>
                </div>
                <div className="row row-style">
                    <div className="col">總價</div>
                    <div className="col text-end">${total}.00</div>
                </div>
                <button className="btn">前往付款</button>
            </div>
        </Fragment>
    );
}

export default Summary;

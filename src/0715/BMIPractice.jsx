import { Fragment, useState, useCallback } from "react";
import Modal from "../components/Modal";
const styles = {
    formWrap: {
        width: "30%",
        margin: "30px auto 0px",
        border: "1px solid black",
        padding: "40px",
        borderRadius: "10px",
    },
};
function BMIPractice() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [modalText, setModalText] = useState("請填寫正確身高 體重");
    const computeHandler = useCallback(
        (e) => {
            e.preventDefault();
            if (height === "" || weight === "") {
                setModalText("請填寫正確身高 體重");
                setIsOpen(true);
                return;
            }
            const BMI = (
                parseFloat(weight) /
                (parseFloat(height) / 100) ** 2
            ).toFixed(2);
            setModalText(`您的BMI為 ${BMI} `);
            setIsOpen(true);
        },
        [height, weight]
    );
    return (
        <Fragment>
            <form style={styles.formWrap}>
                <label htmlFor="height">身高</label>
                <br />
                <input
                    style={{ width: "100%" }}
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="weight">體重</label>
                <br />
                <input
                    style={{ width: "100%" }}
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <br />
                <br />
                <div style={{ textAlign: "end" }}>
                    <button onClick={(e) => computeHandler(e)}>計算</button>
                </div>
                <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                    {modalText}
                </Modal>
            </form>
        </Fragment>
    );
}

export default BMIPractice;

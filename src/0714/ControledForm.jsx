import { Fragment, useState, useMemo, useCallback } from "react";

function ControledForm() {
    const [textInput, setTextInput] = useState("");
    const [textareaInput, setTextareaInput] = useState("");
    const [gender, setGender] = useState(false);
    const [favoriteFruit, setFavoriteFruit] = useState("");
    const [checkBoxArray, setCheckBoxArray] = useState([]);
    const styles = useMemo(() => {
        return {
            formWrap: {
                padding: "40px",
                border: "1px solid black",
                width: "40%",
                margin: "auto",
                borderRadius: "10px",
            },
            radioStyle: {
                marginRight: "12px",
                cursor: "pointer",
                userSelect: "none",
            },
        };
    }, []);
    const radioArray = useMemo(() => {
        return ["男", "女", "不填寫"];
    }, []);
    const seletArray = useMemo(() => {
        return ["蘋果", "香蕉", "鳳梨", "水蜜桃", "芭樂"];
    }, []);
    const changeHandler = useCallback(
        (fruit) => {
            if (checkBoxArray.includes(fruit)) {
                setCheckBoxArray((pre) => pre.filter((item) => item !== fruit));
            } else {
                setCheckBoxArray((pre) => [...pre, fruit]);
            }
        },
        [checkBoxArray]
    );
    return (
        <Fragment>
            <form style={styles.formWrap}>
                <label htmlFor="text_input">type: text</label>
                <br />
                <input
                    type="text"
                    value={textInput}
                    onChange={setTextInput}
                    id="text_input"
                />
                <br />
                <br />
                <label htmlFor="textarea_input">type: textarea</label>
                <br />
                <input
                    type="text"
                    value={textareaInput}
                    onChange={setTextareaInput}
                    id="textarea_input"
                />
                <br />
                <br />
                <label htmlFor="">性別</label>
                <br />
                {radioArray.map((item, index) => (
                    <Fragment key={item}>
                        <input
                            type="radio"
                            value={item}
                            id={"gender" + index}
                            checked={gender === item}
                            onChange={(event) => setGender(event.target.value)}
                        />
                        <label
                            htmlFor={"gender" + index}
                            style={styles.radioStyle}
                        >
                            {item}
                        </label>
                    </Fragment>
                ))}
                <br />
                <br />
                <label htmlFor="favorite_fruit">喜愛的水果</label>
                <br />
                <select
                    value={favoriteFruit}
                    onChange={(e) => setFavoriteFruit(e.target.value)}
                    id="favorite_fruit"
                >
                    <option value="" disabled>
                        -- 請選擇 --
                    </option>
                    {seletArray.map((fruit) => (
                        <option key={fruit} value={fruit}>
                            {fruit}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                {seletArray.map((fruit) => (
                    <Fragment key={fruit}>
                        <input
                            type="checkbox"
                            checked={checkBoxArray.includes(fruit)}
                            onChange={() => changeHandler(fruit)}
                            id={fruit}
                        />
                        <label htmlFor={fruit} style={styles.radioStyle}>
                            {fruit}
                        </label>
                    </Fragment>
                ))}
            </form>
        </Fragment>
    );
}

export default ControledForm;

import { Fragment, useState, useCallback, useMemo } from "react";

function MultipleInput() {
    const [formInput, setFormInput] = useState({
        fullName: "",
        phone: "",
        email: "",
        gender: "",
        favoriteFruit: "",
        checkBoxArray: "",
    });
    const radioArray = useMemo(() => {
        return ["男", "女", "不填寫"];
    }, []);
    const seletArray = useMemo(() => {
        return ["蘋果", "香蕉", "鳳梨", "水蜜桃", "芭樂"];
    }, []);
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
    const changeHandler = useCallback(
        (event) => {
            setFormInput({
                ...formInput,
                [event.target.name]: event.target.value,
            });
        },
        [formInput]
    );
    const checkBoxHandler = useCallback(
        (fruit) => {
            if (formInput.checkBoxArray.includes(fruit)) {
                setFormInput({
                    ...formInput,
                    checkBoxArray: formInput.checkBoxArray.filter(
                        (item) => item !== fruit
                    ),
                });
            } else {
                setFormInput({
                    ...formInput,
                    checkBoxArray: [...formInput.checkBoxArray, fruit],
                });
            }
        },
        [formInput]
    );
    return (
        <Fragment>
            <form>
                <label htmlFor="fullName">姓名</label>
                <br />
                <input
                    name="fullName"
                    type="text"
                    value={formInput.fullName}
                    onChange={changeHandler}
                />
                <br />
                <br />
                <label htmlFor="phone">電話</label>
                <br />
                <input
                    name="phone"
                    type="text"
                    value={formInput.phone}
                    onChange={changeHandler}
                />
                <br />
                <br />
                <label htmlFor="email">電子郵件</label>
                <br />
                <input
                    name="email"
                    type="text"
                    value={formInput.email}
                    onChange={changeHandler}
                />
                <br />
                <br />
                <label htmlFor="">性別</label>
                <br />
                {radioArray.map((item, index) => (
                    <Fragment key={item}>
                        <input
                            name="gender"
                            type="radio"
                            value={item}
                            id={"gender" + index}
                            checked={formInput.gender === item}
                            onChange={changeHandler}
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
                    name="favoriteFruit"
                    value={formInput.favoriteFruit}
                    onChange={changeHandler}
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
                            checked={formInput.checkBoxArray.includes(fruit)}
                            onChange={() => checkBoxHandler(fruit)}
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

export default MultipleInput;

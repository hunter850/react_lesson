import { Fragment, useState, useMemo } from "react";

function ControledForm() {
    const [textInput, setTextInput] = useState("");
    const [textareaInput, setTextareaInput] = useState("");
    const [gender, setGender] = useState(false);
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
            },
        };
    }, []);
    const radioArray = useMemo(() => {
        return ["男", "女", "不填寫"];
    }, []);
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
            </form>
        </Fragment>
    );
}

export default ControledForm;

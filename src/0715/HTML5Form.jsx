import { Fragment, useState, useCallback } from "react";

function HTML5Form() {
    const [formInput, setFormInput] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const inputHandler = useCallback(
        (event) => {
            setFormInput({
                ...formInput,
                [event.target.name]: event.target.value,
            });
        },
        [formInput]
    );
    const submitHandler = useCallback((event) => {
        event.preventDefault();
    }, []);
    const validHandler = useCallback(
        (event) => {
            event.preventDefault();
            setErrorMessage({
                ...errorMessage,
                [event.target.name]: event.target.validationMessage,
            });
        },
        [errorMessage]
    );
    const eraseErrorHandler = useCallback(
        (event) => {
            setErrorMessage({ ...errorMessage, [event.target.name]: "" });
        },
        [errorMessage]
    );
    return (
        <Fragment>
            <form
                onSubmit={submitHandler}
                onInvalid={validHandler}
                onChange={eraseErrorHandler}
            >
                <label htmlFor="fullName">姓名</label>
                <span>{errorMessage.fullName}</span>
                <br />
                <input
                    type="text"
                    name="fullName"
                    value={formInput.fullName}
                    onChange={inputHandler}
                    required
                />
                <br />
                <br />
                <label htmlFor="email">電子郵件</label>
                <span>{errorMessage.email}</span>
                <br />
                <input
                    type="email"
                    name="email"
                    value={formInput.email}
                    onChange={inputHandler}
                    required
                />
                <br />
                <br />
                <label htmlFor="password">密碼</label>
                <span>{errorMessage.password}</span>
                <br />
                <input
                    type="password"
                    name="password"
                    value={formInput.password}
                    onChange={inputHandler}
                    required
                />
                <br />
                <br />
                <div>
                    <button type="submit">送出</button>
                </div>
            </form>
        </Fragment>
    );
}

export default HTML5Form;

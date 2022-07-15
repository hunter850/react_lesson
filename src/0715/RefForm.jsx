import { Fragment, useRef } from "react";

function RefForm() {
    const inputRef = useRef(null);
    return (
        <Fragment>
            <form>
                <label htmlFor="name">姓名</label>
                <input type="text" ref={inputRef} />
            </form>
            <button onClick={() => inputRef.current.focus()}>focus</button>
            <button onClick={() => inputRef.current.blur()}>blur</button>
            <button onClick={() => alert(inputRef.current.value)}>
                show value
            </button>
        </Fragment>
    );
}

export default RefForm;

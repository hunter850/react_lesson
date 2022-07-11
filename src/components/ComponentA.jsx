import { useState, useCallback } from "react";

function ComponentA() {
    const [count, setCount] = useState(0);
    const addHandler = useCallback(() => {
        setCount((pre) => pre + 1);
    }, []);

    return (
        <>
            <h1 onClick={addHandler}>{count}</h1>
        </>
    );
}

export default ComponentA;

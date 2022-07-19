import React from "react";
import BootstrapNav from "../components/BootstrapNav";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const { isLogIn, setIsLogIn } = props;
    const navigate = useNavigate();
    return (
        <>
            <BootstrapNav />
            <h1 style={{ marginTop: "48px" }}>Login</h1>
            <button
                onClick={() => {
                    const newIsLogIn = !isLogIn;
                    setIsLogIn(!newIsLogIn);
                    if (newIsLogIn) {
                        alert("welcome back");
                        navigate("/", { replace: true });
                    }
                }}
            >
                {isLogIn ? "Logout" : "Login"}
            </button>
        </>
    );
}

export default Login;

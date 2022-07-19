import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Login from "./pages/Login";

function App() {
    const [isLogIn, setIsLogIn] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route
                    path="/login"
                    element={
                        <Login isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

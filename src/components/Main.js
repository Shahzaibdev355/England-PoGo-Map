
import { Routes, Route, } from "react-router-dom"

import "../assets/css/style.css"


import Home from "./Home";
import Pricing from "./Pricing";





const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>

                <Route path="/Pricing" element={<Pricing/>}></Route>
              
            </Routes>

           

        </>
    );
}

export default Main;
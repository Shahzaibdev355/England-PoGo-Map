import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "../assets/css/style.css"

const Navbar = () => {


    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };


    const [mode, setMode] = useState('light');

    useEffect(() => {
        const savedMode = localStorage.getItem('mode') || 'light';
        setMode(savedMode);
        document.body.classList.add(`${savedMode}-mode`);
    }, []);

    const switchToLightMode = () => {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        setMode('light');
        localStorage.setItem('mode', 'light');
    };

    const switchToDarkMode = () => {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        setMode('dark');
        localStorage.setItem('mode', 'dark');
    };



    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid mx-0 border-bottom border-dark">
                    <div className="row cf d-lg-none" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation" onClick={toggleClass}>
                        <div className="three col">
                            <div className={`hamburger ${isActive ? 'is-active' : ''}`} id="hamburger-1">
                                <span className="line" />
                                <span className="line" />
                                <span className="line" />
                            </div>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto p-3">
                            <li className="nav-item">
                                <Link className="nav-link active text-white px-3" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white px-3" to="#">Coverage</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white px-3" to="/Pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white px-3" to="#">Help</Link>
                            </li>
                        </ul>
                    </div>




                    <div className="btn-group py-2 ps-4" role="group" aria-label="Basic example">
                        <button
                            id="light-mode-btn"
                            type="button"
                            className={`btn nav-group-button-cus-sty ${mode === 'light' ? 'active' : ''}`}
                            onClick={switchToLightMode}
                        >
                            <i className="bi bi-brightness-high-fill"></i>
                        </button>
                        <button
                            id="dark-mode-btn"
                            type="button"
                            className={`btn nav-group-button-cus-sty ${mode === 'dark' ? 'active' : ''}`}
                            onClick={switchToDarkMode}
                        >
                            <i className="bi bi-moon"></i>
                        </button>
                        {/* <button id="light-mode-btn" type="button" className="btn active nav-group-button-cus-sty"><i className="bi bi-brightness-high-fill" /></button>
                        <button id="dark-mode-btn" type="button" className="btn nav-group-button-cus-sty"><i className="bi bi-moon" /></button> */}
                    </div>




                </div>
            </nav>
        </>
    )
}

export default Navbar;
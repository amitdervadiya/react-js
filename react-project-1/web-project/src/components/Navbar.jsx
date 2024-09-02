import React from 'react';
import logo from './photos/LOGO-1.png'; // Correct way to import the image

export default function Navbar() {
    return (
        <>
            <div>
                <div className="navbar navbar-expand-lg ">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Logo" className='logo' /> 
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll"
                            aria-controls="navbarScroll"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse px-5" id="navbarScroll">
                            <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
                                <li className="nav-item">
                                    <a className="nav-link px-3" href="#" style={{ color: "#ff6a58", fontWeight: "500" }}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" href="#" style={{ fontWeight: "500" }}>Spaces</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" href="#" style={{ fontWeight: "500" }}>Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" href="#" style={{ fontWeight: "500" }}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" href="#" style={{ fontWeight: "500" }}>Pages</a>
                                </li>
                            </ul>
                        </div>
                        <form className="d-flex" role="search">
                            <a href="#" className="hover1 text-decoration-none">Join Now</a>
                        </form>
                    </div>
                </div>

            </div>
            
        </>
    );
}

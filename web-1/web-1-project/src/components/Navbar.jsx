import React from 'react';
import TextField from '@mui/material/TextField'; // Correct import


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
                {/* Logo Section */}
                <a className="navbar-brand brand-logo" href="#"><img src="/light.png" alt="" className='logo-img' /></a>

                {/* Toggler for Mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links and Search */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home <span className='down'><i class="fa-solid fa-chevron-down"></i></span> </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop <span className='down'><i class="fa-solid fa-chevron-down"></i></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product <span className='down'><i class="fa-solid fa-chevron-down"></i></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pages <span className='down'><i class="fa-solid fa-chevron-down"></i></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog <span className='down'><i class="fa-solid fa-chevron-down"></i></span></a>
                        </li>
                    </ul>

                    {/* Search Box */}
                    <form className="d-flex align-items-center search-bar">
                        <select className="form-select category-select" >
                            <option value="0" selected ><span className='category'>CATEROGY</span></option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                        <TextField id="standard-basic" className="form-control search-input" label="Enter Your Keyword" variant="standard" />
                        {/* <input  type="search" placeholder="Enter Your Keyword" /> */}
                        <button className="btn search-btn">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>

                    {/* Icons Section */}
                    <div className="navbar-icons d-flex align-items-center">
                        <a href="#" className="icon-link">
                            <i class="fa-regular fa-user"></i>
                        </a>
                        <a href="#" className="icon-link">
                            <i class="fa-regular fa-heart"></i>
                            <span className="badge">0</span>
                        </a>
                        <a href="#" className="icon-link">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="badge">0</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

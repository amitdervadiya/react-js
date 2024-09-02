import React from 'react';
import hero from './photos/H2.jpg'

export default function Hero() {
    return (
        <>
            <div className="hero container-fluid d-flex justify-content-center">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="left d-flex align-items-center justify-content-center flex-column">
                        <h1>
                            Find perfect <br />
                            <span className="active-color">working space</span>
                            <br /> near by you!
                        </h1>
                        <br />
                        <div className="buttons d-flex justify-content-center align-items-center justify-content-between">
                            <div className="hero-btn hover1 d-flex justify-content-center align-items-center">
                                <span>Book A Tour</span>
                            </div>
                            <div className="hover2 hero-btn-1 d-flex justify-content-center align-items-center">
                                <span>Find Your Seat</span>
                            </div>
                        </div>

                    </div>
                    <div className="right d-flex align-items-center justify-content-center">
                        <img src={hero} alt="" className='hero-img' />
                    </div>
                </div>
            </div>
        </>
    );
}

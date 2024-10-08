import React from 'react'
import './Main.css';
import img1 from './photos/hero-img.png';

export default function Hero() {
    return (
        <>
            <section id="hero" className="hero section">

                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1 >We offer modern solutions for growing your business</h1>
                            <p >We are team of talented designers making websites with Bootstrap</p>
                            <div className="d-flex flex-column flex-md-row"  >
                                <a href="#about" className="btn-get-started">Get Started <i className="bi bi-arrow-right"></i></a>
                                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" >
                            <img src={img1} className="animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

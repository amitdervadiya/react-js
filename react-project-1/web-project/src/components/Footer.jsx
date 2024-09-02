import React from 'react'
import logo1 from './photos/logo-1-1.png'

export default function Footer() {
  return (
    <>
      <footer className="py-2">
        <div className="container py-4">
            <div className="row pb-4 white-color">
                <div className="col-lg-3 col-md-6 col-sm-6">
                 
                    <a href="index.html"><img src={logo1} alt="Logo" className='logo' /></a>
                    <p>Lorem Ipsum is simply dummy text
                        of the printing and typesetting
                        industry when an unknown
                        took a galley of type and.</p>
                    <div className="d-flex flex-row gap-2 white-color">
                        <a href="#" className="white-color"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="white-color"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="white-color"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <h5 className="mb-3">Get in Touch</h5>
                    <div className="d-flex flex-column row-gap-2 col-gap-2">
                        <div className="d-flex ">
                            <div className="px-2"><i className="fa-solid fa-location-dot"></i></div>
                            <a href="#" className="white-color  none">8819 Ohio St. South Gate, CA 90280</a>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="px-2"><i className="fa-solid fa-envelope"></i></div>
                            <a href="#" className="white-color none">Ourstudio@hello.com</a>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="px-2"><i className="fa-solid fa-phone"></i></div>
                            <a href="#" className="white-color none">+1 386-688-3295</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-4">
                    <h5>Explore</h5>
                    <ul className=" none" type="none">
                        <li><a href="index.html" className="white-color none">Home</a></li>
                        <li><a href="about.html" className="white-color none">About</a></li>
                        <li><a href="spaces.html" className="white-color none"> Spaces</a></li>
                        <li><a href="pricing.html" className="white-color none">Pricing</a></li>
                        <li><a href="latestNews.html" className="white-color none">Blog</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-4">
                    <h5>Locations</h5>
                    <ul className="d-flex flex-column justify-content-evenly none" type="none">
                        <li><a href="#" className="white-color none">New York City</a></li>
                        <li><a href="#" className="white-color none">Atlanta</a></li>
                        <li><a href="#" className="white-color none">Chicago</a></li>
                        <li><a href="#" className="white-color none">Soho East</a></li>
                        <li><a href="#" className="white-color none">Los Angles</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-4">
                    <h5>Support</h5>
                    <ul className="d-flex flex-column justify-content-evenly none" type="none">
                        <li><a href="#" className="white-color none">Help Center</a></li>
                        <li><a href="#" className="white-color none">Privacy Policy</a></li>
                        <li><a href="#" className="white-color none">Terms &amp; Conditions</a></li>
                        <li><a href="#" className="white-color none"> Book A Tour</a></li>
                        <li><a href="#" className="white-color none">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr/>
    </footer>
    </>
  )
}

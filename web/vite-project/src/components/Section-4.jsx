import React from 'react';
import space1 from  './photos/5.jpg'
import space2 from  './photos/6.jpg'
import space3 from  './photos/9.jpg'
import space4 from  './photos/7.jpg'
import space5 from  './photos/8.jpg'

export default function Section_4() {
  return (
    <>
      <section className="spaces mt-5">
        <div className="container">
          <h5 className="h6-color text-center">Work spaces</h5>
          <h2 className="text-center">
            Building <span className="active-color">A Better Workspace:</span> Our Mission And Values
          </h2>
          <p className="spaces-p text-center mx-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            <br /> the industry's standard dummy text.
          </p>
          <div className="row p-0 d-flex">
            <div className="col-lg-7 col-md-7 col-sm-12 aos-init aos-animate" data-aos="fade-down">
              <figure><img src={space1} alt="work" /></figure>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 aos-init aos-animate" data-aos="fade-up">
              <div className="spaces-card1">
                <h3>Hot desk</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text.
                </p>
                <div className="d-flex justify-content-between flex-lg-row flex-md-column flex-column gap-3 price">
                  <div className="d-flex">
                    <h6><i className="fa-regular fa-circle-dot"></i> $200</h6>
                    <p> / Per Month</p>
                  </div>
                  <div className="d-flex">
                    <h6><i className="fa-regular fa-circle-dot"></i> $14</h6>
                    <p> / Per Day</p>
                  </div>
                </div>
                <div className="seat">
                  <a href="contact.html" className="hover2 text-decoration-none">Reserve Your Seat</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-1 position-relative">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="spaces-card2">
                <h3 className="fw-bold">Conference room</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text.
                </p>
                <div className="d-flex justify-content-between flex-lg-row flex-md-column flex-column gap-3 price">
                  <div className="d-flex">
                    <h6><i className="fa-regular fa-circle-dot"></i> $200</h6>
                    <p> / Per Month</p>
                  </div>
                  <div className="d-flex">
                    <h6><i className="fa-regular fa-circle-dot"></i> $14</h6>
                    <p> / Per Day</p>
                  </div>
                </div>
                <div className="seat">
                  <a href="contact.html" className="hover2 text-decoration-none">Reserve Your Seat</a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 aos-init aos-animate" data-aos="fade-down">
              <figure><img src={space2} alt="work" /></figure>
            </div>
          </div>
          <div className="row mb-1 d-flex mb-4">
            <div className="col-lg-4 col-md-4 d-flex aos-init aos-animate" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="spaces-card">
                <figure><img src={space3} alt="image" /></figure>
                <div className="card-body">
                  <div>
                    <h4 className="card-title mb-2">Dedicated Desk</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              
                    </p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between flex-lg-row flex-md-column flex-column gap-2 price">
                      <div className="d-flex card-text ">
                        <h6><i className="fa-regular fa-circle-dot"></i> $200</h6>
                        <p> / Per Month</p>
                      </div>
                      <div className="d-flex">
                        <h6><i className="fa-regular fa-circle-dot"></i> $14</h6>
                        <p> / Per Day</p>
                      </div>
                    </div>
                    <div className="seat">
                      <a href="spaces.html" className="hover2 text-decoration-none">Reserve Your Seat</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 d-flex aos-init aos-animate" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="spaces-card">
                <figure><img src={space4} alt="image" /></figure>
                <div className="card-body">
                  <div>
                    <h4 className="card-title mb-2">Event Spaces</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
               
                    </p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between flex-lg-row flex-md-column flex-column gap-2 price">
                      <div className="d-flex card-text">
                        <h6><i className="fa-regular fa-circle-dot"></i> $200</h6>
                        <p> / Per Month</p>
                      </div>
                      <div className="d-flex">
                        <h6><i className="fa-regular fa-circle-dot"></i> $14</h6>
                        <p> / Per Day</p>
                      </div>
                    </div>
                    <div className="seat">
                      <a href="spaces.html" className="hover2 text-decoration-none">Reserve Your Seat</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 d-flex aos-init aos-animate" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className="spaces-card">
                <figure><img src={space5} alt="image" /></figure>
                <div className="card-body">
                  <div>
                    <h4 className="card-title mb-2">Private Office</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              
                    </p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between flex-lg-row flex-md-column flex-column gap-2 price">
                      <div className="d-flex card-text">
                        <h6><i className="fa-regular fa-circle-dot"></i> $200</h6>
                        <p> / Per Month</p>
                      </div>
                      <div className="d-flex">
                        <h6><i className="fa-regular fa-circle-dot"></i> $14</h6>
                        <p> / Per Day</p>
                      </div>
                    </div>
                    <div className="seat">
                      <a href="spaces.html" className="hover2 text-decoration-none">Reserve Your Seat</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

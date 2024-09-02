import React from 'react'
import work from './photos/2-2.jpg'
import work1 from './photos/Sc.jpg'

export default function Section_3() {
  return (
   <>
   
   <div className="workspaces">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 position-relative d-flex flex-column align-items-center justify-content-center aos-init aos-animate"
                            data-aos="fade-up">
                            <div className="d-flex align-items-start flex-column">
                                <div className="work-circle"></div>
                                <div className="work-image1">
                                    <figure><img src={work1} alt="Workspaces" /></figure>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-end mt-4 justify-content-evenly">
                                <div className="ture bg-white d-flex justify-content-center flex-column px-4">
                                    <h5>Do you like our <br /> features?</h5>
                                    <div className="d-flex mt-3"><a href="#" className="hover1" style={{textDecoration:'none'}}>Book A
                                        Tour</a></div>
                                </div>
                                <div className="work-image2">
                                    <figure>
                                        <img src={work} alt="Workspaces" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 aos-init aos-animate" data-aos="fade-down">
                            <h5 className="h6-color text-lg-start text-md-start text-sm-center text-center">Our benefits</h5>
                            <h2 className="h21">Our <span className="active-color">Workspaces</span> that Are Designed With Your
                                Business In Mind</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                            <div className="d-flex flex-column banifits">
                                <h6 className="work-active work-color" id="work-fanifits">Separate offices</h6>
                                <h6 className="work-active" id="work-fanifits">State of the art equipment</h6>
                                <h6 className="work-active" id="work-fanifits">Reading resources</h6>
                                <h6 className="work-active" id="work-fanifits">Building communities</h6>
                                <h6 className="work-active" id="work-fanifits">Meetup with professionals</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

   </>
  )
}

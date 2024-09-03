import React from 'react'
import group_1 from './photos/Group.png'
import group_2 from './photos/Group-1.png'
import group_3 from './photos/Group-2.png'
import group_4 from './photos/Group-3.png'

export default function Section_1() {
  return (
  <>
   <section className="s1 container-fluid  py-5">
        <div className="container d-flex justify-content-center align-items-center text-center flex-column">
            <h2 className="work">Workspace <span className="active-color">Flexibility</span> At Its Best: <br/> Explore Our
                Features </h2>

            <p style={{fontSize: '16px',color: '#212529'}} className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard <br/> dummy text.
            </p>


            <div className="slick-track d-flex justify-content-center align-items-center row animate__fadeInDown">

                <div className="card d-flex justify-content-center align-items-center col-xxl-3 col-lg-3 col-md-6 col-sm-12 
                     py-4">
                    <img src={group_1} alt="" className='group-1' />
                    <h5 className="mt-2 mb-4 color-1">Event access</h5>

                    <p className="p1">Lorem Ipsum is simply dummy text of the printing and huh typesetting
                        industry.</p>

                </div>
                <div
                    className="card d-flex justify-content-center align-items-center col-xxl-3 col-lg-3 col-md-6 col-sm-12 py-4">
                    <img src={group_2} alt=""/>
                    <h5 className="mt-2 mb-4 color-1">Event access</h5>

                    <p className="p1">Lorem Ipsum is simply dummy text of the printing and huh typesetting
                        industry.</p>

                </div>
                <div
                    className="card d-flex justify-content-center align-items-center col-xxl-3 col-lg-3 col-md-6 col-sm-12 py-4">
                    <img src={group_3} alt=""/>
                    <h5 className="mt-2 mb-4 color-1">Event access</h5>

                    <p className="p1">Lorem Ipsum is simply dummy text of the printing and huh typesetting
                        industry.</p>

                </div>
                <div
                    className="card d-flex justify-content-center align-items-center col-xxl-3 col-lg-3 col-md-6 col-sm-12 py-4">
                    <img src={group_4} alt=""/>
                    <h5 className="mt-2 mb-4 color-1">Event access</h5>

                    <p className="p1">Lorem Ipsum is simply dummy text of the printing and huh typesetting
                        industry.</p>
                </div>
            </div>
        </div>

    </section>

  </>
  )
}

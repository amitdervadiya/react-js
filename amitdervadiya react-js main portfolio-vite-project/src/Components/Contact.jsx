import React from 'react'
import Navbar1 from './Navbar1'

export default function Contact() {
    return (
        <>
            <Navbar1 />

            <div className="container c1 bg-black">
                <div className="row">
                    <div className="col-lg-7 c2">
                        <h1 className='font-semibold heading-3 '>Let's work together</h1>
                        <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt architecto offic
                            <br />                    quaerat reprehenderit rem excepturi?</p>
                        <div className="col-lg-12 data">
                            <input type="text" className='inputs focus1 ' placeholder='first name' />
                            <input type="text" className='inputs focus1' placeholder='last name' />
                            <input type="email" className='inputs focus1' placeholder='email address' />
                            <input type="number" className='inputs focus1' placeholder='phone number' />

                            <select name="" id="service" className='focus1'>
                                <option value="" selected>select service</option>
                                <option value="">frontend development</option>
                                <option value="">backend development</option>
                                <option value="">fullstack development</option>
                            </select>
                            <textarea name="" id="message" className='focus1'></textarea>
                            <button className='send '>send</button>
                        </div>

                    </div>
                    <div className="col-lg-5 c3"></div>
                </div>
            </div>
        </>
    )
}

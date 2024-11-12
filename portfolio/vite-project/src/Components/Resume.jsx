import React from 'react'
import Navbar1 from './Navbar1'
import logo2 from './photos/logo2.png'
import logo3 from './photos/logo3.png'
import logo4 from './photos/logo4.png'
import logo5 from './photos/logo5.png'
import logo6 from './photos/logo6.png'
import logo7 from './photos/logo7.png'
import Hero from './Hero';

export default function Resume() {
  const educationinfo = ()=>{
    
  }

  return (
    <>
      <Navbar1 />
      <div className="container r-1">
        <div className="row menu">
          <div className="col-lg-4 col-md-6 rr-1 ">
            <h1 className='heading-1'>Why hire me?</h1>
            <p className='text-white'>Lorem ipsum dolor  sit amet <br />consectetur
              adipisicing el</p>
            <div className="boxes">
              <div className="box-1">Experince</div>
              <div className="box-2" onClick={educationinfo} >Education</div>
              <div className="box-3">Skills</div>
              <div className="box-4">About me</div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 rr-2 col-sm-12">
            <h1 className='heading-2'>My Experince</h1>
            <p className='text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicie
              autem  <br />impedit, asperiores, eumo illum possimus!
            </p>
            <div className="row r-2">
              <div className="box mediabox col-lg-12 col-md-6 col-sm-6">
                <div className="icon-boxes">

                <img src={logo3} alt="" className='logo' />
                </div>
                <div className="icon-boxes">
                  <img src={logo2} alt="" className='logo' />
                </div>
                <div className="icon-boxes">
                  <img src={logo4} alt="" className='logo' />
           

                </div>   <div className="icon-boxes">
                 
                  <img src={logo5} alt="" className='logo' />

                </div>

              </div>
              <div className="box col-lg-12 col-md-6">


                <div className="icon-boxes">
                  <img src={logo6} alt="" className='logo' />

                </div>
                <div className="icon-boxes">
                  <img src={logo7} alt="" className='logo' />

                </div>
                <div className="icon-boxes">
                  <svg width="50px" height="50px" viewBox="-52.5 0 361 361" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26" /><path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529" /><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB" /><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" /><path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF" /></svg>

                </div>   <div className="icon-boxes">
                  <svg width="50px" height="50px" viewBox="-52.5 0 361 361" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26" /><path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529" /><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB" /><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" /><path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF" /></svg>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* <Hero/> */}

    </>
  )
}
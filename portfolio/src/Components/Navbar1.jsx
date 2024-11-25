import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function Navbar1() {
  return (
    <>
    {/* <Header/>  */}
      {/* <nav className="navbar navbar-expand-lg ">
        <div className="container black">
          <a className="navbar-brand white" href="#">amit</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to={'/'}>
                <li className="nav-item">
                  <a className="nav-link active green " aria-current="page" href="#">Home</a>
                </li>
              </Link>
              <Link to={"/Resume"}>
                <li className="nav-item ">
                  <a className="nav-link " href="#"  >
                    Resume
                  </a>
                </li>
              </Link>
              <Link to={'/Projects'}>
                <li className="nav-item">
                  <a className="nav-link" >Work</a>
                </li>

              </Link>
              <Link to={'/Contact'}>
                <li className="nav-item">
                  <a className="nav-link" >Contact</a>
                </li>
              </Link>

            </ul>
            <form className="d-flex" role="search">

              <button className="btn btn-success" type="submit">Hire me</button>
            </form>
          </div>
        </div>
      </nav> */}
    </>
  )
}

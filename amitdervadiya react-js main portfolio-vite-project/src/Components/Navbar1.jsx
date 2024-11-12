import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar1() {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container black">
          <a class="navbar-brand white" href="#">amit</a>
       
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to={'/'}>
              <li class="nav-item">
                <a class="nav-link active green " aria-current="page" href="#">Home</a>
              </li>
              </Link>
             
              <li class="nav-item">
                <a class="nav-link" href="#">services</a>
              </li>
              <Link to={"/Resume"}>
                <li class="nav-item ">

                  <a class="nav-link " href="#"  >
                    Resume
                  </a>
                </li></Link>

              <li class="nav-item">
                <a class="nav-link" >Work</a>
              </li>
              <Link to={'/Contact'}>
              <li class="nav-item">
                <a class="nav-link" >Contact</a>
              </li>
              </Link>
             
            </ul>
            <form class="d-flex" role="search">

              <button class="btn btn-success" type="submit">Hire me</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

import React from 'react'
import './App.css'
// import Main from './Components/Main'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Values from './Components/Values'
import Stats from './Components/Stats'
import Features from './Components/Features'
import Altfeatures from './Components/Altfeatures'
import Services from './Components/Services'
import Pricing from './Components/Pricing'
import Faq from './Components/Faq'
import Portfolio from './Components/Portfolio'
import Team from './Components/Team'
import Post from './Components/Post'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Client from './Components/Client'
import Testimonials from './Components/Testimonials'

function App() {


  return (
    <>
      {/* <Main/> */}
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Stats />
      <Features />
      <Altfeatures />
      <Services />
      <Pricing />
      <Faq />
      <Portfolio />
      <Team />
      <Testimonials/>
      <Post />
      {/* <Client/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

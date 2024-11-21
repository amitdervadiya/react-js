
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Components/Home'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Two from './Components/Two'


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Resume' element={<Resume />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          {/* <Route path='/two' element={<Two />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

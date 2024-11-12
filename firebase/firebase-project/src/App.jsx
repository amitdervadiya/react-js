import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Signin from './Components/Signin'
import Home from './Components/Home'
import Signup from './Components/Signup'

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />


        </Routes></BrowserRouter>
    </>
  )
}

export default App

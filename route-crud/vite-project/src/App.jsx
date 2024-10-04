import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home"
import Create from "./Components/create"
import Update from "./Components/Update"
import Delete from "./Components/Delete"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update" element={<Update />}></Route>
          <Route path="/delete" element={<Delete />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

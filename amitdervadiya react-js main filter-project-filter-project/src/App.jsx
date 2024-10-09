

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Filter from './Components/Filter'
import Filter2 from './Components/Filter2'
import Filter3 from './Components/Category'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Filter />} />
          <Route path="/pricefilter" element={<Filter2 />} />
          {/* <Route path="/categoryfilter" element={<Filter3 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

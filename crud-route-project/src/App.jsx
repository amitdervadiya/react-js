import React, { useState } from 'react'
import Home from './Component/Home'
import Update from './Component/Update'
import Create from './Component/Create'
import Delete from './Component/Delete'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
  const [data,setData]=useState([
    {id:1,name:"John",age:25,subject:"react",gmail:"john@gmail.com"},
    {id:2,name:"Anna",age:30,subject:"react",gmail:"anna@gmail.com"},
  ])
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home data={data}/>}></Route>
        <Route path='/Create' element={<Create data={data} setdata={setData}/>}></Route>
        <Route path='/Update' element={<Update data={data} setdata={setData}/>}></Route>
        <Route path='/Delete' element={<Delete data={data} setdata={setData}/>}></Route>
      </Routes>
    </BrowserRouter>
      
      
      
    </>
  )
}

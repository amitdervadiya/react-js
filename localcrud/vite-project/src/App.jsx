
import React, { useEffect, useState } from 'react'

export default function App() {
    
    const [name,setName]=useState('')
    const [sub,setSub]=useState('')

    const [data,setData]=useState([])
    const [index,setIndex]=useState()
  
    useEffect(()=>{
      let oldData = JSON.parse(localStorage.getItem("student"))||[]
      setData(oldData)
    },[])


    let handleclick = ()=>{
      
      let newStudent = {id:Date.now(),name:name,sub:sub}
      let oldData = JSON.parse(localStorage.getItem("student"))||[]
      if(index){
         let updataData = data.find((e)=>e.id == index)
         console.log(updataData);
         
         updataData.id = index
         updataData.name = name
         updataData.sub = sub
         localStorage.setItem("student",JSON.stringify(oldData))
         setIndex(null)


      }
      else{
        oldData.push(newStudent)  
      localStorage.setItem("student",JSON.stringify(oldData))
      setData(oldData)
      }
      console.log(oldData);
      

    }

  let handleDelete = (id)=>{
    let oldData = JSON.parse(localStorage.getItem("student"))||[]
    oldData =oldData.filter((e)=> e.id != id )
    localStorage.setItem("student",JSON.stringify(oldData))
    setData(oldData)
  }

  let handleEdit = (id)=>{
    let oldData = JSON.parse(localStorage.getItem("student"))||[]
    let editdata = oldData.find((e)=> e.id == id)
    console.log(editdata)
    setIndex(id)
    setName(editdata.name)
    setSub(editdata.sub)

  }
  return (
    <div>
      <input type="text" value={name} placeholder='name' onChange={(e)=>setName(e.target.value)} />
      <input type="text" value={sub} placeholder='subject' onChange={(e)=>setSub(e.target.value)}/>
      <button onClick={handleclick} >{index?"update":"addData"}</button>
      <table border={2} width={1000} >
        <thead>
          <th>id</th>
          <th>name</th>
          <th>sub</th>
          <th colSpan={2}>Action</th>
        </thead>
        <tbody>

          {data ? data.map((e,i)=>{
            return <tr key={i}>
              <td>{e.id}</td>  
              <td>{e.name}</td>
              <td>{e.sub}</td>
              <td colSpan={2}>
                <button color='green' onClick={()=>handleEdit(e.id)}>Edit</button>
                <button color='red' onClick={()=>handleDelete(e.id)}>Del</button>
              </td>

            </tr>
          }):(
            <tr>
                <td colSpan="3">No data available</td>
            </tr>
        )
        }
        </tbody>
      </table>
      
        


    </div>
  )
}

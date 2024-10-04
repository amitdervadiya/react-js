import React from 'react'
import { Link } from 'react-router-dom'
export default function Update() {
  return (
    <div>
      <h1>Update</h1>
      <Link to={"/create"}>create</Link>
      
            <Link to={"/delete"}>delete</Link>
    </div>
  )
}

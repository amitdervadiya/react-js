import React from 'react'
import { Link } from 'react-router-dom'
export default function Create() {
    return (
        <><h1>create</h1>
      
         
            <Link to={"/update"}>update</Link>
            <Link to={"/delete"}>delete</Link>
        </>
    )
}

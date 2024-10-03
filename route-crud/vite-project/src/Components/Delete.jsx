import React from 'react'
import { Link } from 'react-router-dom'
export default function Delete() {
    return (
        <> <h1>delete</h1>
            <Link to={"/create"}>create</Link>
            <Link to={"/update"}>update</Link>

        </>
    )
}

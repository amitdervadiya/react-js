import React, { useContext } from 'react'
import { mycontext } from './ComOne'


export default function ComThird() {

    const name = useContext(mycontext)
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

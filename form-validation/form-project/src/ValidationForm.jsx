import React from 'react'
import { useState } from 'react'

export default function ValidationForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [, setUserArr] = useState('')
    const handleclick = (e) => {
        e.preventDefault()
        if (username == "") {
            setUserArr("name is missing")
        } else {
            setUserArr("done")
        }
        console.log(username)
        console.log(email)

    }
    return (
        <div>
            <form action="" onSubmit={(e) => handleclick(e)}>
                <input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='name' />
                <br /><br />
                <span>{setUserArr}</span>
                <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                <br /><br />
                <span></span>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

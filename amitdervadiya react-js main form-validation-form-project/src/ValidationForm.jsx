import React from 'react'
import { useState } from 'react'

export default function ValidationForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [userArr, setUserArr] = useState('')
    const [emailarr, setEmailArr] = useState('')
    const [category, setCaterogy] = useState('')
    const handleclick = (e) => {
        e.preventDefault()
        if (username == "") {
            setUserArr("name is missing")
        }
        else if (email == "") {
            setEmailArr("email is missing")
        }
        console.log(username)
        console.log(email)

    }
    return (
        <div>
            <form action="" onSubmit={(e) => handleclick(e)}>
                <input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='name' />
                <br /><br />
                <span>{userArr}</span>
                <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                <br /><br />
                <span>
                    {emailarr}
                </span>
                <button type='submit'>submit</button>
                <hr />
                <select name="" id="" onChange={(e) => setCaterogy(e.target.value)}>
                    <option value="category">category</option>
                    <option value="electric" >electric</option>
                    <option value="clothes">clothes</option>
                </select>
                {
                    category == 'electric' && <input type="text" placeholder='enter warrnty' />
                }{
                    category == 'clothes' && <input type="text" placeholder='enter type' />

                }
            </form>
        </div>
    )
}

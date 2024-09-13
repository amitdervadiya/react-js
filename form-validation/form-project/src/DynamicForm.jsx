import React from 'react'
import { useState } from 'react'
export default function DynamicForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [category,setCaterogy] = useState('')
    const handleclick = (e) => {
        e.preventDefault()
        if (!username) {

        }
        if(category){
            
        }
   
        console.log(username)
        console.log(email)

    }
    return (
        <div>
            <form action="" onSubmit={(e) => handleclick(e)}>
                <input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='name' />
                <br /><br />
                <span></span>
                <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                <br /><br />
                <span></span>
                <select name="" id="" onChange={(e) => handleclick(e.target.value)}>
                    <option value="category">category</option>
                    <option value="electric" >electric</option>
                    <option value="clothes">clothes</option>
                </select>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

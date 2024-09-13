import { useState } from "react";
import React from 'react'

export default function Controlledcom() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const handleclick = ((e) => {

        e.preventDefault();
        console.log(name)

    })
    return (
        <div>
            <form action="" onSubmit={(e) => { handleclick(e) }}>
                <h1>{count}</h1>
                <br />
                <button onClick={() => setCount(count + 1)}>
                    click
                </button>
                <br /><br />
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <button type='submit'>submit</button>
                <br /><br />
            </form>
        </div>
    )
}

import React, { createContext, useState } from 'react'
import ComTwo from './ComTwo';
export let mycontext = createContext();
export default function ComOne() {
    const [name, setName] = useState('amit')
    return (
        <div>
            <mycontext.Provider value={name} >
                <ComTwo />
            </mycontext.Provider>
        </div>
    )
}

import React, { useRef } from 'react'

export default function UnControlledCom() {
    let ref1 = useRef()
    const handleclick1 = (e) => {
        e.preventDefault()
        alert(ref1.current.value)
    }
    return (
        <form onSubmit={(e) => handleclick1(e)}>
            <input type="text" ref={ref1} />
            <br /><br />
            <button type='submit'>submit</button>
        </form>
    )
}

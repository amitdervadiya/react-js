import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [sub, setSub] = useState({})
  let handelesubmit = (e) => {
    console.log("success")
    e.preventDefault()
    const obj = {
      sub: sub,

    }
    console.log(obj)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> click  </button>
      <br />  <br />
      <input type="text" onChange={(e) => setName(e.target.value)} /> <br /><br />
      <p>{name}</p>
      <form action="" onSubmit={(e) => handelesubmit(e)}>
        <input type="text" onChange={(e) => setSub(e.target.value)} /> <br /><br />
        <button type='submit'>submit</button>
      </form>

    </div>
  )
}

import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState()
  const arr = [
    { name: "amit", age: 18 },
    { name: "rahil", age: 18 },
    { name: "sanjay", age: 20 },
    { name: "karan", age: 20 },
    { name: "sushil", age: 18 },
    { name: "rutvik", age: 18 }
  ]
  let data = arr.sort((a, b) => a.name.localeCompare(b.name)).filter((item) => item.name.includes(name))

  return (
    <>
      <h1>filter</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder='search' />
      {
        data && data.map((e, i) => {
          return <ul key={i}>
            <li>
              {e.name} </li>

            <li>{e.age}</li> </ul>
        })
      }
    </>
  )
}

export default App

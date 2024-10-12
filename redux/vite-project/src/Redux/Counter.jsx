import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adddata, deletedata } from '../features/Counterslice';



export default function Counter() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const count = useSelector((state) => {
    return state.Counterkey
  })

  const dispatch = useDispatch();
  let addrecord = () => {
    dispatch(adddata({ id: Date.now(), name, age }))
    setName('')
    setAge('')
  }
  let deleterecord = (id) => {
    dispatch(deletedata({id}))
  }

  return (
    <>
      <h1>counter with redux</h1>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={addrecord}>add</button>
      {
        count.students ? count.students.map((e, i) => {
          return <ul key={i}>
            <li>{e.id}</li>
            <li>{e.name}</li>
            <li>{e.age}</li>
            <button onClick={() => deleterecord(e.id)}> delete</button>
            <button>edit</button>
          </ul>
        })
        : <p>rhytf</p>
      }
    </>
  )
}

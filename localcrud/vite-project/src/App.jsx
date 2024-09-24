import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [subject, setSubject] = useState('')
  const [record, setRecord] = useState('')




  let handleadd = () => {
    console.log(name, age, subject)
    let obj = { id: Date.now(), name, age, subject }
    record.push(obj)
    localStorage.setItem("student", JSON.stringify([record]))

  }
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("student")) || []
    setRecord(data)

  }, [handleadd])

  return (
    <>
      <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='age' onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder='subject' onChange={(e) => setSubject(e.target.value)} />
      <button onClick={handleadd}> add</button>

      <table>
        <thead>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>subject</th>
        </thead>
        <tbody>
          {
            record ? record.map((e, i) => {
              return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.subject}</td>

              </tr>
            })
              : "loading"
          }
        </tbody>
      </table >

    </>
  )

}

export default App

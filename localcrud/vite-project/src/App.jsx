import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [subject, setSubject] = useState('')
  const [record, setRecord] = useState([])
  const [editid, setEditId] = useState()

  let handleadd = () => {
    console.log(name, age, subject)
    let obj = { id: record.length + 1, name, age, subject }
    let data = JSON.parse(localStorage.getItem("student")) || []

    if (editid) {
      let singledata = record.find((item) => item.id == editid)
      singledata.name = name
      singledata.age = age
      singledata.subject = subject
      localStorage.setItem("student", JSON.stringify(singledata))
      setEditId(null)
    }
    else {
      let obj = { id: record.length + 1, name, age, subject }
      data.push(obj)
      setRecord(data)
      localStorage.setItem("student", JSON.stringify(data))

    }
    setName('')
    setAge('')
    setSubject('')
  }
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("student")) || []
    setRecord(data)
  }, [])
  let handledelete = (id) => {
    let deletedata = record.filter((item) => item.id !== id)
    setRecord(deletedata)
    localStorage.setItem("student", JSON.stringify(deletedata))
  }
  let handledit = (id) => {
    let editdata = record.find((item) => item.id == id)
    setName(editdata.name)
    setAge(editdata.age);
    setSubject(editdata.subject);
    setEditId(id);
  }

  return (
    <>
      <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='age' value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
      <button onClick={handleadd}>{editid ? 'update' : 'add'}</button>

      <table style={{ width: '500px', border: '1px solid black', }}>
        <thead>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>subject</th>
        </thead>
        <tbody>
          {
            record.length > 0 ? record.map((e, i) => {
              return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.subject}</td>
                <td colSpan={2}> <button onClick={() => handledit(e.id)}>edit</button> <button onClick={() => handledelete(e.id)}>delete</button></td>
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

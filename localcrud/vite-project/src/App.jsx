import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [subject, setSubject] = useState('')
  const [record, setRecord] = useState([])

  let handleadd = () => {
    console.log(name, age, subject)
    let obj = { id: record.length + 1, name, age, subject }
    let data = JSON.parse(localStorage.getItem("student")) || []
    // setRecorddata(data)
    setRecord(data)
    record.push(obj)
    localStorage.setItem("student", JSON.stringify(record))
    setName('')
    setAge('')
    setSubject('')

  }
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("student")) || []
    // setRecorddata(data)
    setRecord(data)
  }, [handleadd])
  let handledelete = (id) => {
    let deletedata = record.filter((item) => item.id !== id)
    setRecord(deletedata)
    localStorage.setItem("student", JSON.stringify(deletedata))
  }
  let handledit = (id) => {
    let  editdata = record.find((item) => item.id == id)
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
      <button onClick={handleadd}> add</button>

      <table style={{ width: '500px', border: '1px solid black', }}>
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

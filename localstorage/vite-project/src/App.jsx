

import './App.css'

function App() {
  localStorage.setItem("name", "amit")
  localStorage.setItem("age", "18")

  let data = localStorage.getItem("name")
  console.log(data)
  localStorage.removeItem("name")
  let obj = { name: "amit", age: 18 }
  localStorage.setItem("myobj", JSON.stringify(obj))
  let obj1 = JSON.parse(localStorage.getItem("myobj"))
  console.log(obj1)

  return (
    <>

    </>
  )
}

export default App

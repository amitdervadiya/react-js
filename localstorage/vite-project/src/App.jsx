

import './App.css'

function App() {
  localStorage.setItem("name", "amit")
  localStorage.setItem("age", 18)
  localStorage.setItem("study", "fullstack")



  let data = localStorage.getItem("name")
  let age = localStorage.getItem("age")
  console.log(age)
  console.log(data)
  localStorage.removeItem("name")
  localStorage.removeItem("study")
  let obj = { name: "amit", age: 18 }
  let obj1 = { name: "sakriyo", age: 18 }
  let obj2 = { name: "papudi", age: 20 }

  localStorage.setItem("myobj", JSON.stringify(obj))
  localStorage.setItem("sakriyo", JSON.stringify(obj1))
  localStorage.setItem("papudi", JSON.stringify(obj2))
  let get = JSON.parse(localStorage.getItem("myobj"))
  let get1 = JSON.parse(localStorage.getItem("sakriyo"))
  let get2 = JSON.parse(localStorage.getItem("papudi"))
  console.log(get)
  console.log(get1)
  console.log(get2)

  return (
    <>

    </>
  )
}

export default App

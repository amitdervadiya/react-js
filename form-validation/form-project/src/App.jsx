import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ValidationForm from './ValidationForm'
import DynamicForm from './DynamicForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ValidationForm/>
     {/* <DynamicForm/> */}
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usestateex from './component/usestateex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Usestateex/>
    </>
  )
}

export default App

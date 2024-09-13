import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Controlledcom from './Controlledcom'
import UnControlledCom from './UnControlledCom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Controlledcom/>
     <UnControlledCom/>
    </>
  )
}

export default App

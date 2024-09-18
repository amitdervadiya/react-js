import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products'
import Form from './components/Form'
import SelectVariants from './components/Select'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Products /> */}
      <Furniture/>
      {/* <Form /> */}

    </>
  )
}

export default App

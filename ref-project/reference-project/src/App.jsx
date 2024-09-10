import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const refrence = useRef()
  useEffect(() => {
    refrence.current.focus()
    ref1.current.style.backgroundColor = 'red'
    setTimeout(() => {
      ref2.current.style.backgroundColor = 'blue'
    }, 1000)

  })
  const ref1 = useRef()
  const ref2 = useRef()
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6])


  return (
    <>
      <input type="text" name="" id="" ref={refrence} />

      <input type="text" name="" id="" ref={ref1} />
      <br />

      <input type="text" name="" id="" ref={ref2} />
      <input type="text" name="" id="" />
      <br />
      <br />
      {arr.map((el, index) => {
        return <div key={index}>
          {el}
        </div>
      })}
    </>
  )
}

export default App

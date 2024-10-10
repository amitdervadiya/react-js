import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../features/Counterslice';



export default function Counter() {
  const count = useSelector((state) => {
    return state.Counterkey
  })
  const dispatch = useDispatch();
  return (
    <>
      <h1>counter with redux</h1>
      <h1>{count.count}</h1>
      <button onClick={() => dispatch(increment())}>add</button>
      <button onClick={() => dispatch(decrement())}>minus</button>
    </>
  )
}

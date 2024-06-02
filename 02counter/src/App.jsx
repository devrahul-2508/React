import { useState } from 'react'
import './App.css'

function App() {

  //counter is variable and setCounter is method
  let [counter,setCounter] = useState(15)

  //let counter = 15

  const addValue = ()=> {
    setCounter(counter+1)
  }

  const removeValue = ()=> {
    setCounter(counter-1)
  }


  return (
    <>
     <h1>React course with Rahul {counter}</h1>
     <h2>Counter value : {counter}:</h2>
     <button
     onClick={
addValue
     }
     >Add Value</button>{" "}
     <button onClick={
      removeValue
     }>Remove value</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App

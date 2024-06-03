import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    
    if (numberAllowed) {
      str+="0123456789"
    }
    if (charAllowed) {
      str+="!@#$%^&*()_+"

    }
    for (let i = 1; i < length; i++) {
    const char =  Math.floor(Math.random() * str.length+1) 
    pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,])

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed])

  const copyPasswordtoClipBoard = ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,4)
  }

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl font-bold mb-2 text-center'>Password Generator</h1>
    
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}  />
    <button onClick={copyPasswordtoClipBoard} className='outline-none bg-blue-700 text-white px-5 py-3'>copy</button>
    </div>
    <div className='flex items-center gap-x-1 text-orange-500'>
      <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=> setLength(e.target.value)} /> <label htmlFor="length">Length: {length}</label>
      <input type="checkbox" defaultChecked = {numberAllowed} onChange={()=>{
        setNumberAllowed((prev)=> !prev )
      }}></input> <label htmlFor="number">Numbers</label>

<input type="checkbox" defaultChecked = {charAllowed} onChange={()=>{
        setCharAllowed((prev)=> !prev )
      }}></input> <label htmlFor="charInput">Character</label>
    </div>
    </div>
  
    </>
  )
}

export default App

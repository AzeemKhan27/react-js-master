import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  let myObj = {
    username : "azeempathan",
    age : 21
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card username="Azeem Khan" btnText="click me" someObje = {myObj} />
     <Card username="Anju mam" />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
   
    counter = counter + 1;
    console.log("clicked",counter);
    setCounter(counter);
      // OR
    // setCounter(counter + 1)  
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
       <h1>Counter React Project</h1>
       <p>Counter value is : {counter}</p>

       <button onClick={addValue}>Add Value</button>
       <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  // let counter = 5

  const addValue = () => {
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1)
    }
    // console.log("Clicked", counter);

    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)

  }

  const removeValue = () => {
    if (counter === 0) {
      return
    }
    else {

      setCounter(counter - 1)
    }

  }


  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove value {counter}</button>
      <p>Footer {counter}</p>
    </>
  )
}

export default App

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    uername: "mukesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 p-5 rounded-xl text-black mb-3'>Chai aur Tailwind | Mukesh</h1>

      <Card username="Chai aur code" btnText="click" />
      <Card username="Mukesh Dwivedi" btnText="visit me" />

    </>
  )
}

export default App

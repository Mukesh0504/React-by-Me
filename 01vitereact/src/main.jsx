import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom APP</h1>
    </div>
  )
}


// const reactElement = {
//   type: 'a',
//   props: {
//     href: "https://google.com",
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com">Visit Google</a>
)


const anotherUser = 'Mukesh Dwivedi'

const reactElement = React.createElement(
  'a',
  { href: "https://google.com", target: '_blank' },
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(

  <App />

  // MyApp()//we can write in this way 😁
  // <MyApp />

  // anotherElement
  // reactElement

)



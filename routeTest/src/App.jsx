import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Outlet, redirect } from 'react-router-dom'

function App() {

  return (
    <>
      <div style={{ backgroundColor: "green" }}>
        <NavLink to="/home">
          Home
        </NavLink>
        <NavLink to='/about'>
          About
        </NavLink>
        <NavLink to='/contact/6261'>
          Contact
        </NavLink>
      </div>
      <Outlet />
    </>
  )
}

export default App

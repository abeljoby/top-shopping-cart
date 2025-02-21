import { useState } from 'react'
import styles from './App.module.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="store">Store</Link>
        <Link to="cart">Cart</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App

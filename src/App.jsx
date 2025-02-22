import { useState } from 'react'
import styles from './App.module.css'
import './index.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <header className={styles.header}>
        <Link to="/">Home</Link>
        <div className={styles.nav}>
          <Link to="store">Store</Link>
          <Link to="cart">Cart</Link>
        </div>
      </header>
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  )
}

export default App

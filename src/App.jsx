import { useState } from 'react'
import styles from './App.module.css'
import './index.css'
import { scpItems } from "./items.js"
import { Link, Outlet } from 'react-router-dom'

const itemList = {};

function App() {

  const [cartItems, setCartItems] = useState(itemList);

  return (
    <>
      <header className={styles.header}>
        <Link to="/">Home</Link>
        <div className={styles.nav}>
          <Link to="store">Store</Link>
          <Link to="cart"><img className={styles.cartIcon} src="https://banner2.cleanpng.com/20180905/wph/kisspng-computer-icons-portable-network-graphics-clip-art-ic-shopping-cart-px-svg-png-icon-free-download-1-5b907479023c32.0581863815361936570092.jpg" alt="Cart" /> {Object.keys(cartItems).length}</Link>
        </div>
      </header>
      <main className={styles.content}>
        <Outlet context={[cartItems, setCartItems]}/>
      </main>
    </>
  )
}

export default App

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
        <Link className={styles.logoLink} to="/"><img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/e/ec/SCP_Foundation_%28emblem%29.svg" alt="" srcset="" /><h1>SCP Foundation Commissary</h1></Link>
        <div className={styles.nav}>
          <Link to="store"><h2>Store</h2></Link>
          <Link className={styles.cartLink} to="cart"><img className={styles.cartIcon} src="https://banner2.cleanpng.com/20180905/wph/kisspng-computer-icons-portable-network-graphics-clip-art-ic-shopping-cart-px-svg-png-icon-free-download-1-5b907479023c32.0581863815361936570092.jpg" alt="Cart" /><h2>{Object.keys(cartItems).length}</h2></Link>
        </div>
      </header>
      <main className={styles.content}>
        <Outlet context={[cartItems, setCartItems]}/>
      </main>
    </>
  )
}

export default App

import styles from './Item.module.css'
import { use, useState } from 'react'

function Item({ name, url, amount }) {
    const [count, setCount] = useState(0);
    
    return (
        <div className='item'>
            <img src={url} alt={`A picture of ${name}`} />
            <span>{name} {amount}</span>
            <div className='adder'>
                <button type="button" onClick={()=> setCount(count-1)}>-</button>
                <span>{count}</span>
                <button type="button" onClick={()=> setCount(count+1)}>+</button>
            </div>
        </div>
    )
}

export default Item
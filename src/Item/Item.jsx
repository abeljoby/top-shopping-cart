import { use, useState } from 'react'
import styled from 'styled-components';

const ShopItem = styled.div`
    height: 16rem;
    width: 8rem;
    border: 2px solid red;
`;

function Item({ name, url, amount }) {
    const [count, setCount] = useState(0);
    
    return (
        <ShopItem>
            <img src={url} alt={`A picture of ${name}`} />
            <span>{name} {amount}</span>
            <div className='adder'>
                <button type="button" onClick={()=> setCount(count-1)}>-</button>
                <span>{count}</span>
                <button type="button" onClick={()=> setCount(count+1)}>+</button>
            </div>
        </ShopItem>
    )
}

export default Item
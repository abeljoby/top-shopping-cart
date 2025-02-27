import { use, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ShopItem = styled.div`
    height: 16rem;
    width: 12rem;
    padding: 4px;
    /* border-width: 1px; */
    /* border-top: 1px solid black;
    border-right: 1px solid black; */
    /* border: 1px solid gray; */
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:hover {
        box-shadow: -4px 4px;
        transition: box-shadow 100ms ease-in-out 0ms, transform 100ms ease-in-out 0ms;
        /* border-width: 4px; */
        border: 1px solid black;
        transform: scale(1.01);
    }

    a {
        align-self: start;
        text-decoration: none;
        color: black;
        font-size: large;
        font-weight: 600;
    }

    a:hover {
        text-decoration: underline;
    }
`;

const ItemImage = styled.div`
    height: 8rem;
    width: auto;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        max-height: 100%;
        width: 100%;
    }
`;

const PriceLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: stretch;
`;

const Adder = styled.div`
`;

function Item({ name, url, imgUrl, stock, price, cartItems, setCartItems }) {
    const [count, setCount] = useState(0);

    function setAmount(amount) {
        if(amount < 0) {
        }
        if(amount === stock + 1) {
            }
            else if(amount === 0) {
                setCount(amount);
                const { [name]: _, ...rest } = cartItems;
                setCartItems(rest);
            }
            else {
                setCount(amount);
                setCartItems({...cartItems, [name]: amount});
            }
    }
    
    return (
        <ShopItem>
            <ItemImage>
                <img src={imgUrl} alt={`A picture of ${name}`}/>
            </ItemImage>
            <Link to={url}>{name}</Link>
            <PriceLine>
                <span>${price}</span>
                <span>Stock: {stock}</span>
            </PriceLine>
            <Adder>
                <button type="button" onClick={()=> setAmount(count-1)}>-</button>
                <span>{count}</span>
                <button type="button" onClick={()=> setAmount(count+1)}>+</button>
            </Adder>
        </ShopItem>
    )
}

export default Item
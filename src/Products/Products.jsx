import styled from "styled-components"
import Item from "../Item/Item.jsx"
import { scpItems } from "../items.js"
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const ProductSection = styled.section`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
`;

function Products() {
    
    const [cartItems, setCartItems] = useOutletContext();

    return (
        <>
            <ProductSection>
                {Object.keys(scpItems).map((key) => {
                    return <Item name={scpItems[key].name} url={scpItems[key].url} imgUrl={scpItems[key].imageUrl} stock={scpItems[key].stock} price={scpItems[key].price} cartItems={cartItems} setCartItems={setCartItems}/>
                })}
            </ProductSection>
        </>
    )
}

export default Products
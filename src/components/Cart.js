// src/components/Cart.js
import React from 'react';
import styled from 'styled-components';

const Cart = ({ cartItems }) => {
  return (
    <CartContainer>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <CartList>
          {cartItems.map((item, index) => (
            <CartItem key={index}>
              <CartItemName>{item.name}</CartItemName>
              <CartItemPrice>Ksh {item.price}</CartItemPrice>
            </CartItem>
          ))}
        </CartList>
      )}
    </CartContainer>
  );
};

const CartContainer = styled.div`
  padding: 20px;
`;

const CartList = styled.div`
  margin-top: 20px;
`;

const CartItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const CartItemName = styled.h3`
  margin: 0;
`;

const CartItemPrice = styled.p`
  margin: 0;
`;

export default Cart;

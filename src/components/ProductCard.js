// src/components/ProductCard.js
import React from 'react';
import styled from 'styled-components';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Info>
        <Name>{product.name}</Name>
        <Price>Ksh {product.price}</Price>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </Info>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Info = styled.div`
  margin-top: 10px;
`;

const Name = styled.h3`
  font-size: 18px;
`;

const Price = styled.p`
  font-size: 16px;
  color: #555;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

export default ProductCard;

// src/pages/ProductDetails.js
import React from 'react';
import styled from 'styled-components';

const ProductDetails = () => {
  return (
    <ProductDetailsContainer>
      <h1>Product Details</h1>
      <p>Details about the product will go here.</p>
    </ProductDetailsContainer>
  );
};

const ProductDetailsContainer = styled.div`
  padding: 20px;
`;

export default ProductDetails;

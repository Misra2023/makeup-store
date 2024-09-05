// src/pages/Shop.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

const products = [
  { id: 1, name: 'Foundation', price: 2000, image: 'https://i.pinimg.com/564x/57/6c/57/576c57de5cb400da3b4bf2e6da6915d8.jpg' },
  { id: 2, name: 'Lipstick', price: 1500, image: 'https://i.pinimg.com/736x/89/5a/02/895a024835c38d1e2558e6f48ea4ffa4.jpg' },
  { id: 3, name: 'Mascara', price: 1800, image: 'https://i.pinimg.com/564x/bb/14/a8/bb14a8e14fd05d0b57ae4441f964d80e.jpg' },
  { id: 4, name: 'Eyeliner', price: 1200, image: 'https://i.pinimg.com/564x/28/ff/6d/28ff6d9c7e8af96c068e91918407fd18.jpg' },
  { id: 5, name: 'Blush', price: 1400, image: 'https://i.pinimg.com/564x/cb/69/3a/cb693abb1a3210a2b2e08d5862273722.jpg' },
  { id: 6, name: 'Eyeshadow Palette', price: 3000, image: ' https://i.pinimg.com/564x/0d/cd/a7/0dcda734733745dd95aa50e6e913c698.jpg'},
  { id: 7, name: 'Concealer', price: 1600, image: 'https://i.pinimg.com/564x/2c/63/ed/2c63ed7d351bd820729990cfb262cf2e.jpg' },
  { id: 8, name: 'Primer', price: 1700, image: 'https://i.pinimg.com/564x/86/db/35/86db35da738e961eb2f2d94925c7ffcb.jpg' },
  { id: 9, name: 'Highlighter', price: 2200, image: 'https://i.pinimg.com/564x/a4/43/fe/a443fe829cd30555ac8cab714bc867b4.jpg' },
  { id: 10, name: 'Bronzer', price: 2100, image: 'https://i.pinimg.com/564x/d7/d6/56/d7d656ee02dd2cded83abe1087e97178.jpg' },
  { id: 11, name: 'Setting Spray', price: 1900, image: 'https://i.pinimg.com/564x/26/15/b8/2615b8bb96d0dbfbf35cc1632a62e5e9.jpg' },
  { id: 12, name: 'Brow Pencil', price: 1300, image: 'https://i.pinimg.com/736x/32/9f/52/329f521584b3901a1f9210b5804fd33e.jpg' },
  { id: 13, name: 'Lip Gloss', price: 1100, image: 'https://i.pinimg.com/564x/4c/e9/69/4ce96940a388165a5ad9924494d216e5.jpg' },
  { id: 14, name: 'Lip Liner', price: 1000, image: 'https://i.pinimg.com/564x/ea/8e/8d/ea8e8d2338aad59504903f8be0fb969b.jpg' },
  { id: 15, name: 'Makeup Brush Set', price: 3500, image: 'https://i.pinimg.com/564x/e9/94/be/e994be1385a4a478f4e58407158111b8.jpg' },
  { id: 16, name: 'False Eyelashes', price: 800, image: 'https://i.pinimg.com/564x/e9/6a/6e/e96a6e1d1719dbd6965d79e29b8f0929.jpg' },
  { id: 17, name: 'Compact Powder', price: 1800, image: 'https://i.pinimg.com/564x/f5/33/f5/f533f586f7dff782235a2fc6e5bcc89b.jpg' },
  { id: 18, name: 'BB Cream', price: 2000, image: 'https://i.pinimg.com/564x/4d/bf/e3/4dbfe354486606f6d40a788cf43a18e1.jpg' },
  { id: 19, name: 'Nail Polish', price: 900, image: 'https://i.pinimg.com/564x/61/b1/55/61b1559dddb9e6245557b97e174c32ba.jpg' },
  { id: 20, name: 'Makeup Remover', price: 1200, image: 'https://i.pinimg.com/564x/67/32/89/673289b5655aa10532f6354b244603e4.jpg' },
];

const Shop = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <ProductGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ProductGrid>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export default Shop;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>Makeup Store</Logo>
      <Menu>
        <MenuItem><Link to="/">Home</Link></MenuItem>
        <MenuItem><Link to="/shop">Shop</Link></MenuItem>
        <MenuItem><Link to="/cart">Cart</Link></MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 15px;
  font-size: 18px;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default Navbar;

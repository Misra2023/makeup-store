// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <SearchContainer>
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for products..."
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export default SearchBar;

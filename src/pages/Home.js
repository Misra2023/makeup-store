import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroImage src="https://i.pinimg.com/564x/b2/6f/d1/b26fd1c73b5a65fc51fd11cee2cffb83.jpg" alt="Makeup" />
        <HeroText>
          <h1>Welcome to the Makeup Store!</h1>
          <p>Find the best makeup products just for you.</p>
        </HeroText>
      </HeroSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #f4f4f4;
`;

const HeroSection = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: cover;
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
`;

export default Home;

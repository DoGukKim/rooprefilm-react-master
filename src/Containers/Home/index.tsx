import React from 'react';
import HeroComponent from './Hero';
import styled from 'styled-components';

const MainContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  border: 1px solid black;
`;
const HomeContainer = () => {
  return (
    <MainContainer aria-label="main">
      <HeroComponent />
    </MainContainer>
  );
};

export default HomeContainer;

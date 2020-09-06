import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 10px;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;
export const SlideItem = styled.div`
  display: block;
  width: 100%;
  height: 830px;
  background: no-repeat center;
  background-size: cover;
  border-radius: 10px;
  border: 1px solid red;
  @media screen and (max-width: 768px) {
    height: 360px;
    border-radius: 0;
  }
`;
export const HeroImage = styled.picture`
  display: block;
  height: 100%;
`;

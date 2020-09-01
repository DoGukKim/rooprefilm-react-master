import styled from 'styled-components';
// NavigationStyled
export const Header = styled.header``;
export const GnbDimmed = styled.div``;
export const GnbWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
export const Gnb = styled.nav`
  display: flex;
  align-items: center;
  height: 90px;
  color: ${(props) => props.theme.color.PRIMARY};
  text-align: center;
`;
export const Logo = styled.h1`
  width: 33.33%;
`;
export const LogoImg = styled.img``;
export const GnbList = styled.ul`
  display: flex;
  width: 33.33%;
`;
export const GnbItem = styled.li`
  position: relative;
  width: 100%;
`;

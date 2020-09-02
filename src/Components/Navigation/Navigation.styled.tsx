import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  font-size: 17px;
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
  width: 100%;
`;
export const GnbLink = styled(Link)`
  position: relative;
  &::after {
    position: absolute;
    right: 0;
    bottom: -8px;
    left: 0;
    content: '';
    height: 1px;
    background-color: ${(props) => props.theme.color.SECONDARY};
    transform: scaleX(0);
    transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

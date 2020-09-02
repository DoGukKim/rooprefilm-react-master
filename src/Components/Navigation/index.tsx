import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
// styled-components
import {
  Header,
  GnbDimmed,
  GnbWrapper,
  Gnb,
  Logo,
  LogoImg,
  GnbList,
  GnbItem,
  GnbLink,
} from './Navigation.styled';

const HeaderComponent: React.FC = () => {
  return (
    <>
      <Header>
        <GnbDimmed />
        <GnbWrapper>
          <Gnb>
            <GnbList>
              <GnbItem>
                <GnbLink to="/">Home</GnbLink>
              </GnbItem>
              <GnbItem>
                <GnbLink to="/" onClick={(e) => e.preventDefault()}>
                  Categorize
                </GnbLink>
              </GnbItem>
            </GnbList>
            <Logo>
              <Link to="/">
                <LogoImg src={logo} alt="logo" />
              </Link>
            </Logo>
            <GnbList>
              <GnbItem>
                <GnbLink
                  to="/"
                  onClick={() =>
                    window.open('https://smartstore.naver.com/roopre_film')
                  }>
                  Shop
                </GnbLink>
              </GnbItem>
              <GnbItem>
                <GnbLink to="">Contact</GnbLink>
              </GnbItem>
            </GnbList>
          </Gnb>
        </GnbWrapper>
      </Header>
    </>
  );
};

export default withRouter(HeaderComponent);

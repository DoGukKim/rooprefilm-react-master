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
                <Link to="/">Home</Link>
              </GnbItem>
              <GnbItem>
                <Link to="/">Categorize</Link>
              </GnbItem>
            </GnbList>
            <Logo>
              <Link to="/">
                <LogoImg src={logo} alt="logo" />
              </Link>
            </Logo>
            <GnbList>
              <GnbItem>
                <Link
                  to="/"
                  onClick={() =>
                    window.open('https://smartstore.naver.com/roopre_film')
                  }>
                  Shop
                </Link>
              </GnbItem>
              <GnbItem>
                <Link to="">Contact</Link>
              </GnbItem>
            </GnbList>
          </Gnb>
        </GnbWrapper>
      </Header>
    </>
  );
};

export default withRouter(HeaderComponent);

import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  color: ${(props) => props.theme.color.PRIMARY};
`;

const HeaderComponent: React.FC = () => {
  return (
    <>
      <Header>
        <h1>색상이 변경 되었습니다</h1>
      </Header>
    </>
  );
};

export default HeaderComponent;

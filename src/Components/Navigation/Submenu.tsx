import React from 'react';
import { GnbSubList, GnbSubItem, GnbSubLink } from './Submenu.styled';

const Submenu = () => {
  return (
    <>
      <GnbSubList>
        {}
        {/* li와 link를 맵을 통해 리턴 받아서 놓아야 할 듯 */}
        {/* <GnbSubItem>
          <GnbSubLink to="/">Wedding</GnbSubLink>
        </GnbSubItem>
        <GnbSubItem>
          <GnbSubLink to="/">Beauty</GnbSubLink>
        </GnbSubItem>
        <GnbSubItem>
          <GnbSubLink to="/">Profile</GnbSubLink>
        </GnbSubItem>
        <GnbSubItem>
          <GnbSubLink to="/">Food</GnbSubLink>
        </GnbSubItem>
        <GnbSubItem>
          <GnbSubLink to="/">Product</GnbSubLink>
        </GnbSubItem> */}
      </GnbSubList>
    </>
  );
};

export default Submenu;

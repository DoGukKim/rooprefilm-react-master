import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GnbSubList = styled.ul`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 16px 0 0;
  border: 2px solid ${(props) => props.theme.color.POINT};
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.WHITE};
  z-index: 1;
  /* visibility: hidden; */
  opacity: 1;
`;
export const GnbSubItem = styled.li``;
export const GnbSubLink = styled(Link)`
  display: block;
  padding: 8px 26px;
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${(props) => props.theme.color.POINT};
  }
`;

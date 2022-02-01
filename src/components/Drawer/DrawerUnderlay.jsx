import React from 'react';
import styled from 'styled-components';

const Underlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
  cursor: pointer;

  ${({ open }) => {
    return open && `display: block;`;
  }};
`;

export const DrawerUnderlay = ({ drawerOpen, clickHandler, unmountTrap }) => {
  const handleClick = () => {
    clickHandler();
    unmountTrap();
  };

  return <Underlay open={drawerOpen} onClick={handleClick} />;
};

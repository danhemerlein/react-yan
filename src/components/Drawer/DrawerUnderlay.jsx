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

  ${({ modalOpen }) => {
    return modalOpen && `display: block;`;
  }};
`;

const DrawerUnderlay = ({ modalOpen, clickHandler, unmountTrap }) => {
  const handleClick = () => {
    clickHandler();
    unmountTrap();
  };

  return <Underlay modalOpen={modalOpen} onClick={handleClick} />;
};

export default DrawerUnderlay;

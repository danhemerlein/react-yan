import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;

  border: transparent;
  background: transparent;

  padding-left: 0;
  padding-right: 0;
`;

const DrawerTrigger = ({ clickHandler, mountTrap }) => {
  const handleClick = () => {
    clickHandler();
    mountTrap();
  };

  return (
    <Button type="button" onClick={handleClick}>
      <span>trigger</span>
    </Button>
  );
};

export default DrawerTrigger;

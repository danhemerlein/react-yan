import React from 'react';

export const DrawerTrigger = ({ Trigger, mountTrap, clickHandler }) => {
  const handleClick = () => {
    clickHandler();
    mountTrap();
  };

  return <Trigger handleClick={handleClick} />;
};

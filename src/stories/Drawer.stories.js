import { useState } from 'react';
import styled from 'styled-components';
import { Drawer } from '../components/Drawer/Drawer';
import { DrawerTrigger } from '../components/Drawer/DrawerTrigger';
import { DrawerUnderlay } from '../components/Drawer/DrawerUnderlay';

export default {
  title: 'Drawer',
  component: DrawerStory
};

const Interior = ({ closeButtonRef, handleClick }) => {
  const StyledInterior = styled.div`
    height: 100px;
    width: 100px;
    background: white;
    border: 5px solid black;
  `;

  return (
    <StyledInterior>
      <button type="button" ref={closeButtonRef} onClick={handleClick}>
        close drawer
      </button>
    </StyledInterior>
  );
};

const Trigger = ({ handleClick }) => {
  const Button = styled.button`
    cursor: pointer;
    border: transparent;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
  `;

  return (
    <Button type="button" onClick={handleClick}>
      <span>new trigger</span>
    </Button>
  );
};

export const DrawerStory = () => {
  const [open, setOpen] = useState(false);
  const [activeTrap, setActiveTrap] = useState(false);

  const drawerConfig = {
    id: 'drawer',
    top: 0,
    position: 'left',
    transform: '-116px'
  };

  const mountTrap = () => {
    setActiveTrap(true);
  };

  const unmountTrap = () => {
    setActiveTrap(false);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Drawer
        activeTrap={activeTrap}
        drawerOpen={open}
        unmountTrap={unmountTrap}
        clickHandler={() => {
          return toggleDrawer();
        }}
        config={drawerConfig}
        Interior={Interior}
      />

      <DrawerTrigger
        clickHandler={() => {
          return toggleDrawer();
        }}
        mountTrap={mountTrap}
        Trigger={Trigger}
      />

      <DrawerUnderlay
        drawerOpen={open}
        clickHandler={() => {
          return toggleDrawer();
        }}
        unmountTrap={unmountTrap}
        activeTrap={activeTrap}
      />
    </div>
  );
};

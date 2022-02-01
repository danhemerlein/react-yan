import { useState } from 'react';
import styled from 'styled-components';
import { Drawer } from '../components/Drawer/Drawer';
import DrawerTrigger from '../components/Drawer/DrawerTrigger';
import DrawerUnderlay from '../components/Drawer/DrawerUnderlay';

export default {
  title: 'Drawer',
  component: DrawerStory
};

const Interior = ({ closeButtonRef, handleClick }) => {
  return (
    <StyledInterior>
      <button type="button" ref={closeButtonRef} onClick={handleClick}>
        close drawer
      </button>
    </StyledInterior>
  );
};

const StyledInterior = styled.div`
  height: 100px;
  width: 100px;
  background: white;
  border: 5px solid black;
`;

export const DrawerStory = () => {
  const [open, setOpen] = useState(false);
  const [activeTrap, setActiveTrap] = useState(false);

  const ID = 'drawer';
  const TOP = 0;
  const POSITION = 'left';
  const HEIGHT = '100px';
  const WIDTH = '100px';
  const TRANSFORM = '-116px';

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
        id={ID}
        unmountTrap={unmountTrap}
        clickHandler={() => {
          return toggleDrawer();
        }}
        Inerior={Interior}
        top={TOP}
        position={POSITION}
        height={HEIGHT}
        width={WIDTH}
        transform={TRANSFORM}
        Interior={Interior}
      />

      <DrawerTrigger
        clickHandler={() => {
          return toggleDrawer();
        }}
        mountTrap={mountTrap}
        activeTrap={activeTrap}
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

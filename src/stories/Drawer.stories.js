import { useState } from 'react';
import { Drawer } from '../components/Drawer/Drawer';
import DrawerTrigger from '../components/Drawer/DrawerTrigger';
import DrawerUnderlay from '../components/Drawer/DrawerUnderlay';

export default {
  title: 'Drawer',
  component: DrawerStory
};

export const DrawerStory = () => {
  const [open, setOpen] = useState(false);
  const [activeTrap, setActiveTrap] = useState(false);

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
        id="drawer"
        unmountTrap={unmountTrap}
        clickHandler={() => {
          return toggleDrawer();
        }}
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

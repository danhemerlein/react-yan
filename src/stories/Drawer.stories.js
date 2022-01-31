import DrawerTrigger from '../components/Drawer/DrawerTrigger';
import DrawerUnderlay from '../components/Drawer/DrawerUnderlay';

export default {
  title: 'Drawer',
  component: DrawerStory
};

export const DrawerStory = () => {
  return (
    <>
      <DrawerTrigger />
      <DrawerUnderlay />
    </>
  );
};

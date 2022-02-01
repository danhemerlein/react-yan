import FocusTrap from 'focus-trap-react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import whatInput from 'what-input';
import { useOverrideContext } from '../../context/OverrideContext';
import { checkForOverride } from '../../utils';

const StyledDrawer = styled.div`
  position: absolute;
  display: block;
  visibility: hidden;

  ${({ position }) => {
    if (position === 'left') {
      return `left: 0;`;
    }

    return `right: 0;`;
  }};

  ${({ overrides, top, transform }) => {
    return `
      top: ${top};
      transform: translateX(${transform});
      z-index: ${checkForOverride('drawerZIndex', overrides)};
      transition: ${checkForOverride('drawerTransition', overrides)};
    `;
  }}

  ${({ open }) => {
    return (
      open &&
      `
        visibility: visible;
        transform: translateX(0);
        position: fixed;
      `
    );
  }};
`;

export const Drawer = ({
  clickHandler,
  drawerOpen,
  activeTrap,
  unmountTrap,
  Interior,
  config
}) => {
  const closeButtonRef = useRef();

  const { id, top, position, transform } = config;

  useEffect(() => {
    if (whatInput.ask() === 'keyboard' && drawerOpen) {
      closeButtonRef.current.focus();
    }
  }, [drawerOpen]);

  const handleClick = () => {
    clickHandler();
    unmountTrap();
  };

  const uiid = `#${id}`;

  return (
    <StyledDrawer
      open={drawerOpen}
      overrides={useOverrideContext()}
      transform={transform}
      position={position}
      top={top}
    >
      {activeTrap && (
        <FocusTrap
          focusTrapOptions={{
            fallbackFocus: uiid,
            allowOutsideClick: true,
            onDeactivate: unmountTrap
          }}
        >
          <Interior closeButtonRef={closeButtonRef} handleClick={handleClick} />
        </FocusTrap>
      )}
    </StyledDrawer>
  );
};

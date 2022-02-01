import FocusTrap from 'focus-trap-react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import whatInput from 'what-input';
import { useOverrideContext } from '../../context/OverrideContext';
import { checkForOverride } from '../../utils';

const StyledDrawer = styled.div`
  transform: translateX(-226px);
  width: 210px;

  position: absolute;
  left: 0;
  top: 0;

  height: 100px;
  display: block;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  padding: 1.6rem;

  background: white;

  border-right: 1px solid;

  visibility: hidden;

  ${(props) => {
    return `
      z-index: ${checkForOverride('drawerZIndex', props.overrides)};
      transition: ${checkForOverride('drawerTransition', props.overrides)};
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
  id
}) => {
  const closeButtonRef = useRef();

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

  console.log(activeTrap);

  return (
    <StyledDrawer open={drawerOpen} overrides={useOverrideContext()}>
      {activeTrap && (
        <FocusTrap
          focusTrapOptions={{
            fallbackFocus: uiid,
            allowOutsideClick: true,
            onDeactivate: unmountTrap
          }}
        >
          <div id={uiid} tabIndex="-1">
            <button type="button" ref={closeButtonRef} onClick={handleClick}>
              close drawer
            </button>
          </div>
        </FocusTrap>
      )}
    </StyledDrawer>
  );
};

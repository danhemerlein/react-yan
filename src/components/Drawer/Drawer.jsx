import FocusTrap from 'focus-trap-react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import whatInput from 'what-input';
import { checkForOverride } from '../../utils';
import FlexContainer from '../FlexContainer';

const Nav = styled.div`
  z-index: 5;
  transform: translateX(-226px);

  position: absolute;
  left: 0;
  top: 0;

  width: 210px;
  height: 100vh;

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
      transition: ${checkForOverride('drawerTransition', props.overrides)};
    `;
  }}

  ${({ navOpen }) => {
    return (
      navOpen &&
      `
      visibility: visible;
      transform: translateX(0);
      position: fixed;
  `
    );
  }};
`;

const StyledCloseButton = styled.button`
  cursor: pointer;
  padding: 0;
  border: 0;
  background: transparent;
  width: 2.4rem;
  height: 2.4rem;
`;

export const Drawer = ({ clickHandler, navOpen, activeTrap, unmountTrap }) => {
  const closeButtonRef = useRef();

  useEffect(() => {
    if (whatInput.ask() === 'keyboard' && navOpen) {
      closeButtonRef.current.focus();
    }
  }, [navOpen]);

  const handleClick = () => {
    clickHandler();
    unmountTrap();
  };

  return (
    <Nav navOpen={navOpen}>
      {activeTrap && (
        <FocusTrap
          focusTrapOptions={{
            fallbackFocus: '#mobile-nav-trap',
            allowOutsideClick: true,
            onDeactivate: unmountTrap
          }}
        >
          <div id="mobile-nav-trap" tabIndex="-1">
            {/* modal close */}

            <FlexContainer items="flex-end" justify="flex-end">
              <StyledCloseButton ref={closeButtonRef} onClick={handleClick}>
                close drawer
              </StyledCloseButton>
            </FlexContainer>
          </div>
        </FocusTrap>
      )}
    </Nav>
  );
};

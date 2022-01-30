import CloseIcon from 'components/base/icons/Close';
import FocusTrap from 'focus-trap-react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FlexContainer, P } from 'styles/elements';
import { modalTransition } from 'styles/utilities/variables';
import whatInput from 'what-input';

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
  transition: ${modalTransition};

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
  width: ${remHelper[24]};
  height: ${remHelper[24]};
`;

const StyledHR = styled.hr`
  width: 50%;
  border: 1px solid;
  border-color: ${({ theme }) => {
    return theme.border;
  }};

  margin-bottom: ${remHelper[16]};
`;

const RadioContainer = styled.div`
  margin-top: ${remHelper[8]};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  margin-top: ${remHelper[16]};
  height: 100%;
  display: inline-flex;
`;

const Modal = ({ clickHandler, navOpen, mode, activeTrap, unmountTrap }) => {
  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    dispatch(setSiteTheme(event.target.value));
  };

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
                <CloseIcon width="2.4rem" height="2.4rem" />
              </StyledCloseButton>
            </FlexContainer>

            {/* site navigation */}

            <nav role="navigation">
              <FlexContainer
                as="ul"
                items="center"
                justify="center"
                direction="column"
              />
            </nav>

            <StyledHR />

            {/* color modes */}

            <fieldset>
              <P textAlign="center" as="legend">
                color mode
              </P>
              <RadioContainer />
            </fieldset>
          </div>
        </FocusTrap>
      )}
    </Nav>
  );
};

export default Modal;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BottomBar from './BottomBar';
import TopBar from './TopBar';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0,
    rgba(0, 0, 0, 0.199) 3.5%,
    rgba(0, 0, 0, 0.195) 7%,
    rgba(0, 0, 0, 0.19) 10.35%,
    rgba(0, 0, 0, 0.182) 13.85%,
    rgba(0, 0, 0, 0.174) 17.35%,
    rgba(0, 0, 0, 0.165) 20.85%,
    rgba(0, 0, 0, 0.155) 24.35%,
    rgba(0, 0, 0, 0.145) 27.85%,
    rgba(0, 0, 0, 0.135) 31.35%,
    rgba(0, 0, 0, 0.126) 34.85%,
    rgba(0, 0, 0, 0.118) 38.35%,
    rgba(0, 0, 0, 0.11) 41.85%,
    rgba(0, 0, 0, 0.105) 45.35%,
    rgba(0, 0, 0, 0.1) 48.85%,
    rgba(0, 0, 0, 0.103) 52.35%,
    rgba(0, 0, 0, 0.112) 55.85%,
    rgba(0, 0, 0, 0.126) 59.35%,
    rgba(0, 0, 0, 0.144) 62.85%,
    rgba(0, 0, 0, 0.165) 66.35%,
    rgba(0, 0, 0, 0.188) 69.85%,
    rgba(0, 0, 0, 0.213) 73.35%,
    rgba(0, 0, 0, 0.237) 76.85%,
    rgba(0, 0, 0, 0.262) 80.35%,
    rgba(0, 0, 0, 0.285) 83.85%,
    rgba(0, 0, 0, 0.306) 87.35%,
    rgba(0, 0, 0, 0.324) 90.85%,
    rgba(0, 0, 0, 0.338) 94.35%,
    rgba(0, 0, 0, 0.347) 97.85%,
    rgba(0, 0, 0, 0.35)
  );
  &:not(:hover) {
    visibility: hidden;
  }
`;

function Detail({ splash }) {
  return (
    <Wrapper className='SplashDetail'>
      <Link
        style={{
          cursor: 'zoom-in',
          height: '100%',
          position: 'relative',
          width: '100%'
        }}
        to={`/photos/${splash.id}`}
      />
      <TopBar splash={splash} />
      <BottomBar splash={splash} />
    </Wrapper>
  );
}

export default Detail;

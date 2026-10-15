import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const P = {
  Container: styled.div<{ $theme: Theme }>`
    transition: background 0.5s linear;
    position: fixed;
    background: ${({ $theme }) => $theme.background};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    inset: 0;
    pointer-events: none;

    &::after {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(
          ${({ $theme }) => $theme.borderColor}36 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          ${({ $theme }) => $theme.borderColor}36 1px,
          transparent 1px
        );
      background-size: 64px 64px;
      mask-image: linear-gradient(to bottom, black, transparent 72%);
      content: '';
    }
  `,
};

export const Particles = () => {
  const { theme } = useContext(AppContext);

  return <P.Container data-v2="particles" $theme={theme} />;
};

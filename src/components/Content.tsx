import { useContext } from 'react';

import styled, { css } from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const sharedStyles = css`
  transition: color 0.5s linear;
  font-weight: 600;
  position: relative;
  z-index: 1;
  letter-spacing: -0.02em;
`;

const C = {
  Name: styled.h1<{ $theme: Theme }>`
    ${sharedStyles};
    font-size: clamp(4.5rem, 8vw, 7rem);
    margin: 0;
    color: ${({ $theme }) => $theme.primaryTextColor};
    font-weight: 700;
    text-wrap: balance;
  `,
};

export const Content = () => {
  const { config, theme } = useContext(AppContext);

  return (
    <C.Name data-v2="name" $theme={theme}>
      {config.name.display}
    </C.Name>
  );
};

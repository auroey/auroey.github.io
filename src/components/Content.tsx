import { useContext } from 'react';

import styled, { css } from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const sharedStyles = css`
  transition: color 0.5s linear;
  position: relative;
  z-index: 1;
`;

const C = {
  Name: styled.h1<{ $theme: Theme }>`
    ${sharedStyles};
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(34px, 4vw, 39px);
    line-height: 1.08;
    margin: 0 0 7px;
    color: ${({ $theme }) => $theme.primaryTextColor};
    font-weight: 600;
    letter-spacing: -0.02em;
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

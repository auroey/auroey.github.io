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
    font-size: clamp(2.45rem, 6vw, 3.55rem);
    line-height: 1.05;
    margin: 0;
    color: ${({ $theme }) => $theme.primaryTextColor};
    font-weight: 600;
    letter-spacing: -0.035em;
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

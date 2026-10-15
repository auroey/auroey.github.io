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
  Title: styled.h2<{ $theme: Theme }>`
    ${sharedStyles};
    max-width: 780px;
    font-size: clamp(1.7rem, 3vw, 2.35rem);
    margin: 1.5rem 0 1rem;
    color: ${({ $theme }) => $theme.secondaryTextColor};
    font-weight: 400;
    letter-spacing: 0.02em;
    text-wrap: balance;
  `,
};

export const Content = () => {
  const { config, theme } = useContext(AppContext);

  return (
    <>
      <C.Name data-v2="name" $theme={theme}>
        {config.name.display}
      </C.Name>
      <C.Title data-v2="title" $theme={theme}>
        {config.title.display}
      </C.Title>
    </>
  );
};

import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const N = {
  Outer: styled.div<{ $theme: Theme }>`
    position: relative;
    z-index: 2;
    border-top: 1px solid ${({ $theme }) => $theme.borderColor};
    border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
  `,
  Links: styled.nav<{ $theme: Theme }>`
    display: flex;
    width: min(1000px, calc(100% - 3rem));
    min-height: 3rem;
    margin: 0 auto;
    padding: 0 3rem;
    box-sizing: border-box;
    align-items: center;

    a {
      color: ${({ $theme }) => $theme.secondaryTextColor};
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
    }

    a + a::before {
      margin: 0 0.75rem;
      color: ${({ $theme }) => $theme.borderColor};
      content: '/';
    }

    a:hover,
    a:focus-visible {
      color: ${({ $theme }) => $theme.accentColor};
    }

    @media (max-width: 720px) {
      width: min(100% - 2rem, 1000px);
      padding: 0;
      overflow-x: auto;
      white-space: nowrap;
    }
  `,
};

export const Navigation = () => {
  const { theme } = useContext(AppContext);

  return (
    <N.Outer $theme={theme}>
      <N.Links $theme={theme} aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#publications">Publications</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </N.Links>
    </N.Outer>
  );
};

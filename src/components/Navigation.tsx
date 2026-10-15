import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const N = {
  Header: styled.header<{ $theme: Theme }>`
    position: fixed;
    z-index: 8;
    top: 0;
    right: 0;
    left: 0;
    border-bottom: 1px solid ${({ $theme }) => $theme.borderColor}b3;
    background: ${({ $theme }) => $theme.surfaceColor}e8;
    backdrop-filter: blur(18px);
  `,
  Inner: styled.div`
    display: flex;
    width: min(1040px, calc(100% - 3rem));
    height: 5.25rem;
    margin: 0 auto;
    padding-right: 4.5rem;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
  `,
  Brand: styled.a<{ $theme: Theme }>`
    display: inline-flex;
    color: ${({ $theme }) => $theme.primaryTextColor};
    align-items: center;
    gap: 0.8rem;
    font-size: 1.05rem;
    font-weight: 700;
    text-decoration: none;

    span {
      display: grid;
      width: 2.35rem;
      height: 2.35rem;
      color: #ffffff;
      border-radius: 9px;
      background: ${({ $theme }) => $theme.accentColor};
      place-items: center;
      font-size: 0.9rem;
      letter-spacing: -0.04em;
    }
  `,
  Links: styled.nav<{ $theme: Theme }>`
    display: flex;
    align-items: center;
    gap: 1.6rem;

    a {
      color: ${({ $theme }) => $theme.secondaryTextColor};
      font-size: 0.95rem;
      font-weight: 600;
      text-decoration: none;
      transition: color 0.2s ease;
    }

    a:hover,
    a:focus-visible {
      color: ${({ $theme }) => $theme.accentColor};
    }

    @media (max-width: 680px) {
      display: none;
    }
  `,
};

export const Navigation = () => {
  const { theme } = useContext(AppContext);

  return (
    <N.Header $theme={theme}>
      <N.Inner>
        <N.Brand href="#top" $theme={theme} aria-label="Back to top">
          <span>XT</span>
          Xinrui Tang
        </N.Brand>
        <N.Links $theme={theme} aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#publications">Publications</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </N.Links>
      </N.Inner>
    </N.Header>
  );
};

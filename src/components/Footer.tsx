import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { GitHub } from 'icons';
import { Theme } from 'types';

const Container = styled.footer<{ $theme: Theme }>`
  position: relative;
  z-index: 1;
  padding: 0 1.5rem 3rem;
  color: ${({ $theme }) => $theme.tertiaryTextColor};
  font-size: 1rem;

  a {
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 0.6rem;
    color: ${({ $theme }) => $theme.secondaryTextColor};
    vertical-align: -0.2rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Footer = () => {
  const { theme } = useContext(AppContext);

  return (
    <Container data-v2="footer" $theme={theme}>
      © 2026 Xinrui Tang
      <a
        data-v2="source"
        href="https://github.com/auroey/auroey.github.io"
        aria-label="Homepage source code"
        title="Source code"
      >
        <GitHub />
      </a>
    </Container>
  );
};

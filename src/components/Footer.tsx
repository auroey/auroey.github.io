import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const Container = styled.footer<{ $theme: Theme }>`
  position: relative;
  z-index: 1;
  padding: 0 1.5rem 3rem;
  color: ${({ $theme }) => $theme.tertiaryTextColor};
  font-size: 1rem;

  a {
    color: ${({ $theme }) => $theme.secondaryTextColor};
  }
`;

export const Footer = () => {
  const { theme } = useContext(AppContext);

  return (
    <Container data-v2="footer" $theme={theme}>
      Built by Xinrui Tang ·{' '}
      <a
        data-v2="source"
        href="https://github.com/auroey/auroey.github.io"
      >
        Source
      </a>
    </Container>
  );
};

import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const Container = styled.div<{ $theme: Theme }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  color: ${({ $theme }) => $theme.secondaryTextColor};
  font-size: 15px;

  .button-container {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  .button {
    color: ${({ $theme }) => $theme.primaryTextColor};
    font-weight: 700;
    text-decoration: none;
    transition: color 0.18s ease;
  }

  .button:hover,
  .button:focus-visible {
    color: ${({ $theme }) => $theme.accentColor};
  }

  .separator {
    color: ${({ $theme }) => $theme.secondaryTextColor};
    font-weight: 400;
  }
`;

export const Buttons = () => {
  const { config, theme } = useContext(AppContext);

  return (
    <Container $theme={theme} aria-label="Profiles and contact">
      {config.buttons.map(({ name, display, ariaLabel, href }, index) => (
        <span className="button-container" key={name}>
          <a
            data-v2={`button-${display}`}
            className="button"
            aria-label={ariaLabel}
            title={display}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {display}
          </a>
          {index < config.buttons.length - 1 && (
            <span className="separator" aria-hidden="true">
              ·
            </span>
          )}
        </span>
      ))}
    </Container>
  );
};

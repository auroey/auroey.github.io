import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const Container = styled.div<{ $theme: Theme }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;

  .button-container {
    display: inline-flex;
  }

  .button {
    display: inline-grid;
    width: 2.2rem;
    height: 2.2rem;
    color: ${({ $theme }) => $theme.secondaryTextColor};
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    border-radius: 50%;
    background: ${({ $theme }) => $theme.surfaceColor};
    place-items: center;
    text-decoration: none;
    transition:
      color 0.18s ease,
      border-color 0.18s ease,
      background 0.18s ease;
  }

  .button:hover,
  .button:focus-visible {
    color: ${({ $theme }) => $theme.accentColor};
    border-color: ${({ $theme }) => $theme.accentColor};
    background: ${({ $theme }) => $theme.accentMutedColor};
  }

  .icon {
    width: 1rem;
    height: 1rem;

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .icon_title {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export const Buttons = () => {
  const { config, theme } = useContext(AppContext);

  return (
    <Container $theme={theme} aria-label="Profiles and contact">
      {config.buttons.map(({ name, display, ariaLabel, icon, href }) => (
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
            <span className="icon">{icon}</span>
            <span data-v2={display} className="icon_title">
              {display}
            </span>
          </a>
        </span>
      ))}
    </Container>
  );
};

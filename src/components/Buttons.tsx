import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const Container = styled.div<{ $theme: Theme }>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;

  a,
  a:active,
  a:hover {
    outline: 0;
  }

  .button-container {
    display: inline-block;
    margin: 0;
  }

  .button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    min-height: 4.25rem;
    padding: 0 1.35rem;
    color: ${({ $theme }) => $theme.primaryTextColor};
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    text-decoration: none;
    position: relative;
    z-index: 1;
    border-radius: 12px;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    background: ${({ $theme }) => $theme.surfaceColor};
    box-shadow: 0 4px 14px ${({ $theme }) => $theme.shadowColor};
  }

  .icon {
    width: 1.55rem;
    height: 1.55rem;

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .icon_title {
    font-size: 1rem;
    font-weight: 650;
  }

  .button:hover {
    color: ${({ $theme }) => $theme.accentColor};
    background-color: ${({ $theme }) => $theme.accentMutedColor};
    box-shadow: 0 8px 24px ${({ $theme }) => $theme.shadowColor};
    border-color: ${({ $theme }) => $theme.accentColor};
    transform: translateY(-2px);
  }

  .button:active {
    transform: translateY(0) scale(0.98);
  }

  @media only screen and (max-width: 720px) {
    .button {
      min-height: 4rem;
      padding: 0 1.05rem;
    }
  }
`;

export const Buttons = () => {
  const { config, theme } = useContext(AppContext);

  return (
    <Container $theme={theme}>
      {config.buttons.map(({ name, display, ariaLabel, icon, href }) => (
        <span className="button-container" key={name}>
          <a
            data-v2={`button-${display}`}
            className="button"
            aria-label={ariaLabel}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="icon">{icon}</div>
            <span data-v2={display} className="icon_title">
              {display}
            </span>
          </a>
        </span>
      ))}
    </Container>
  );
};

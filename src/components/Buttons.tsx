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
    height: 4.75rem;
    width: 4.75rem;
    margin: 0;
  }

  .button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    height: 4.75rem;
    width: 4.75rem;
    color: ${({ $theme }) => $theme.primaryTextColor};
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    position: relative;
    z-index: 1;
    border-radius: 12px;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    background: ${({ $theme }) => $theme.surfaceColor};
    box-shadow: 0 4px 14px ${({ $theme }) => $theme.shadowColor};
  }

  .icon {
    height: 3.6rem;
    width: 3.6rem;
    padding: 0.6rem;
  }

  .icon_title {
    font-size: 1.25rem;
    font-weight: 500;
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

  .button-container .icon_title {
    display: none;
  }

  .button-container:hover .icon_title {
    display: initial;
  }

  .button-container:hover .icon {
    display: none;
  }

  @media only screen and (max-width: 720px) {
    .button-container {
      height: 5rem;
      width: 5rem;
      margin: 0;
    }

    .button {
      height: 5rem;
      width: 5rem;
    }

    .icon {
      height: 4rem;
      width: 4rem;
      padding: 0.5rem;
    }

    .icon_title {
      font-size: 1rem;
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

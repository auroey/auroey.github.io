import { useEffect, useState } from 'react';

import {
  Buttons,
  Content,
  Footer,
  Navigation,
  Particles,
  ProfileSections,
  Toggle,
} from 'components';

import './App.scss';
import { AppProvider } from './AppContext';
import { config } from './config';

export const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery =
      '(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)';
    const mediaQueryList = window.matchMedia(mediaQuery);

    const updateIsMobile = () => {
      setIsMobile(mediaQueryList.matches);
    };

    updateIsMobile();

    mediaQueryList.addEventListener('change', updateIsMobile);

    return () => {
      mediaQueryList.removeEventListener('change', updateIsMobile);
    };
  }, []);

  return (
    <AppProvider config={config} isMobile={isMobile}>
      <main className="app" id="top">
        <Particles />
        <Navigation />
        <Toggle />
        <section className="hero">
          <div className="hero-content">
            <p className="hero-kicker">Research portfolio</p>
            <Content />
            <p className="hero-affiliation">
              <span className="affiliation-degree">
                {config.education[0].detail}
              </span>
              <span className="affiliation-separator" aria-hidden="true">
                {' · '}
              </span>
              <span className="affiliation-institution">
                {config.education[0].institution}
              </span>
            </p>
            <p className="hero-focus">{config.researchFocus.join(' · ')}</p>
            <Buttons />
            <a className="explore" href="#about">
              Explore research and selected work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <ProfileSections />
        <Footer />
      </main>
    </AppProvider>
  );
};

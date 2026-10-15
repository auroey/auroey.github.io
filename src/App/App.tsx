import { useEffect, useState } from 'react';

import {
  Buttons,
  ChatBot,
  Content,
  Footer,
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
      <main className="app">
        <Particles />
        <Toggle />
        <section className="hero">
          <Content />
          <Buttons />
          <a className="explore" href="#about">
            Explore my work ↓
          </a>
        </section>
        <ProfileSections />
        <Footer />
        {process.env.REACT_APP_ENABLE_CHAT === 'true' && <ChatBot />}
      </main>
    </AppProvider>
  );
};

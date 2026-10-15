import { Themes } from 'types';

export const themes: Themes = {
  dark: {
    key: 'dark',
    primaryTextColor: '#f0f6fc',
    secondaryTextColor: '#b1bac4',
    tertiaryTextColor: '#8c959f',
    accentColor: '#58a6ff',
    accentMutedColor: '#0d419d66',
    surfaceColor: '#161b22',
    borderColor: '#30363d',
    background: 'linear-gradient(180deg, #0d1117 0%, #161b22 100%)',
    shadowColor: '#01040933',
  },
  light: {
    key: 'light',
    primaryTextColor: '#1f2328',
    secondaryTextColor: '#59636e',
    tertiaryTextColor: '#6e7781',
    accentColor: '#0969da',
    accentMutedColor: '#ddf4ff',
    surfaceColor: '#ffffff',
    borderColor: '#d1d9e0',
    background:
      'radial-gradient(circle at 50% 8%, #ddf4ff 0%, #ffffff 34%, #f6f8fa 100%)',
    shadowColor: '#1f232814',
  },
};

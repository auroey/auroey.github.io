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
    primaryTextColor: '#24364b',
    secondaryTextColor: '#526273',
    tertiaryTextColor: '#708090',
    accentColor: '#205f9b',
    accentMutedColor: '#edf5fb',
    surfaceColor: '#ffffff',
    borderColor: '#dbe3ea',
    background: '#ffffff',
    shadowColor: '#12304f12',
  },
};

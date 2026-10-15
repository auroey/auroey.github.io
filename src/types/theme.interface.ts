export interface Theme {
  key: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  tertiaryTextColor: string;
  accentColor: string;
  accentMutedColor: string;
  surfaceColor: string;
  borderColor: string;
  background: string;
  shadowColor: string;
}

export type Themes = Record<string, Theme>;

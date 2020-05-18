import Typography from 'typography';
import oceanBeachTheme from 'typography-theme-ocean-beach';

import { darkTheme } from './colors';

const linkColor = darkTheme.primary;

oceanBeachTheme.headerColor = darkTheme.text;
oceanBeachTheme.bodyColor = darkTheme.text;

oceanBeachTheme.overrideThemeStyles = () => ({
  a: {
    color: linkColor,
    textShadow: 'none',
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`,
  },
});

const typography = new Typography(oceanBeachTheme);

export default typography;

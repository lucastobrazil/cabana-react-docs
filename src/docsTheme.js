import cabanaDefaultTheme from './theme';

const bainTheme = {
  ...cabanaDefaultTheme,
  fonts: {
    default: '"Graphik", sans-serif',
  },
  colors: {
    primary: '#CC0000',
  },
  radii: {
    none: '0',
    small: '0px',
    medium: '10px',
    large: '100px',
  },
};
const darkTheme = {
  ...cabanaDefaultTheme,

  fonts: {
    default: '"Hind", sans-serif',
  },
  colors: {
    primary: 'pink',
    background: cabanaDefaultTheme.colors.darkGrey,
  },
};
export default cabanaDefaultTheme;
export { bainTheme, darkTheme };

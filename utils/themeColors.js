import { future } from '@theme-ui/presets';

const theme = {
  ...future,
  colors: {
    ...future.colors,
    background: '#E0EEFF',
    primary: '#4d05e8',

    modes: {
      dark: {
        background: '#000',
        primary: 'red',
      },
    },
  },
  sizes: {
    container: 768,
  },
  cards: {
    primary: {
      padding: 4,
      borderRadius: 4,
      marginTop: 16,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      border: '1px solid white',
      background: 'white',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
};

export default theme;

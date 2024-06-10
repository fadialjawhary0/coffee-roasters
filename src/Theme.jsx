import { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Theme = ({ children }) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: '#0E8784',
          },
          secondary: {
            main: '#83888F',
          },
          background: {
            default: '#FEFCF7',
          },
          text: {
            primary: '#FEFCF7',
            secondary: '#2C343E',
          },
        },
        typography: {
          fontFamily: 'Barlow, sans-serif',
          h1: {
            fontFamily: 'Fraunces, serif',
            fontSize: '4.8rem',
            color: '#FEFCF7',
          },
          h2: {
            fontFamily: 'Fraunces, serif',
            fontSize: '3.2rem',
          },
          h3: {
            fontFamily: 'Fraunces, serif',
            fontSize: '2.8rem',
          },
          body1: {
            fontFamily: 'Barlow, sans-serif',
            fontSize: '1.5rem',
            color: '#FEFCF7',
          },
          body2: {
            fontFamily: 'Barlow, sans-serif',
            fontSize: '1.6rem',
          },
          subtitle1: {
            fontFamily: 'Fraunces, serif',
            fontSize: '1.2rem',
          },
          subtitle2: {
            fontFamily: 'Barlow, sans-serif',
            fontSize: '1.2rem',
            color: '#83888F',
          },
          button: {
            fontFamily: 'Fraunces, serif',
            padding: '1.6rem 3.2rem',
            backgroundColor: '#0E8784',
            '&:hover': {
              backgroundColor: '#0E8784',
            },
          },
        },
      }),
    [],
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

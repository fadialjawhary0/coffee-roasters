import { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Theme = ({ children }) => {
  const colors = {
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
  };

  const theme = useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 768,
            md: 960,
            lg: 1280,
            xl: 1920,
          },
        },
        palette: {
          ...colors,
        },
        typography: {
          fontFamily: 'Barlow, sans-serif',
          h1: {
            fontFamily: 'Fraunces, serif',
            fontSize: '4.8rem',
            color: colors?.text?.primary,
          },
          h2: {
            fontFamily: 'Fraunces, serif',
            fontSize: '3.2rem',
            color: colors.text.secondary,
          },
          h3: {
            fontFamily: 'Fraunces, serif',
            fontSize: '2.8rem',
            color: colors.text.secondary,
          },
          h4: {
            fontFamily: 'Fraunces, serif',
            fontSize: '2.4rem',
            color: colors?.text?.secondary,
          },
          h5: {
            fontFamily: 'Fraunces, serif',
            fontSize: '2rem',
            color: colors.text.secondary,
          },
          h6: {
            fontFamily: 'Fraunces, serif',
            fontSize: '1.8rem',
            color: colors.text.secondary,
          },
          body1: {
            fontFamily: 'Barlow, sans-serif',
            fontSize: '1.5rem',
            color: colors.text.secondary,
          },
          body2: {
            fontFamily: 'Barlow, sans-serif',
            fontSize: '1.6rem',
            color: colors.text.secondary,
          },
          subtitle1: {
            fontFamily: 'Fraunces, serif',
            fontSize: '1.2rem',
            color: colors.text.secondary,
          },
          subtitle2: {
            fontFamily: 'Barlow, sans-serif',
            fontSize: '1.2rem',
            color: colors.text.secondary,
          },
          button: {
            fontFamily: 'Fraunces, serif',
            padding: '1.6rem 3.2rem',
            backgroundColor: '#0E8784',
            // '&:hover': {
            //   backgroundColor: '#0E8784',
            // },
          },
        },
        components: {
          MuiTypography: {
            styleOverrides: {
              root: {
                color: colors?.text?.secondary,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'initial',
              },
            },
            variants: [
              {
                props: { variant: 'navbar' },
                style: ({ theme }) => ({
                  backgroundColor: 'inherit',
                  color: theme.palette.secondary.main,
                  fontWeight: '600',
                  letterSpacing: '0.8px',
                  padding: 0,

                  fontSize: '1.2rem',
                  fontFamily: 'Barlow, sans-serif',
                  textTransform: 'none',
                  borderRadius: 0,

                  '&:hover': {
                    backgroundColor: 'none',
                    color: '#000000',
                  },
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: '2px',
                    backgroundColor: theme.palette.text.secondary,
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }),
              },
            ],
          },
        },
      }),
    // eslint-disable-next-line
    [],
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

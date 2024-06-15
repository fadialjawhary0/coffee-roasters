import { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const Theme = ({ children }) => {
  const COLORS = {
    palette: {
      primary: {
        DARKBLUE: '#333D4B',
        CREAM: '#FEFCF7',
      },
      secondary: {
        DARKCYAN: '#0E8784',
      },
      orange: {
        ORANGE: '#FDD6BA',
      },
      grey: {
        GREY: '#83888F',
      },
    },
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: COLORS.palette.primary.DARKBLUE,
          },
          secondary: {
            main: COLORS.palette.primary.CREAM,
          },
          darkcyan: {
            main: COLORS.palette.secondary.DARKCYAN,
          },
          orange: {
            main: COLORS.palette.orange.ORANGE,
          },
          grey: {
            main: COLORS.palette.grey.GREY,
          },
        },
        typography: {
          fontFamily: 'Fraunces, serif',
          color: 'COLORS.palette.primary.DARKBLUE',
          fontSize: 16,
          h1: {
            fontSize: 72,
            lineHeight: '7.2rem',
            [breakpoints.down('md')]: {
              fontSize: 48,
              lineHeight: '4.8rem',
            },
            [breakpoints.down('sm')]: {
              fontSize: '4rem',
            },
          },
          h2: {
            fontSize: 40,
            lineHeight: '4.8rem',
            [breakpoints.down('md')]: {
              fontSize: 32,
            },
            [breakpoints.down('sm')]: {
              fontSize: 28,
              lineHeight: '2.8rem',
            },
          },
          h3: {
            fontSize: 32,
            lineHeight: '3.6rem',
            [breakpoints.down('md')]: {
              fontSize: 28,
              lineHeight: '3.2rem',
            },
          },
          h4: {
            fontSize: 24,
            lineHeight: '3.2rem',
          },
          h5: {
            fontSize: 20,
          },
          h6: {
            fontSize: 18,
          },
          body1: {
            fontFamily: 'Barlow, sans-serif',
            fontSize: 16,
            lineHeight: '2.6rem',
            [breakpoints.down('md')]: {
              fontSize: 15,
              lineHeight: '2.5rem',
            },
          },
          body2: {
            fontFamily: 'Barlow, sans-serif',
            fontSize: 14,
            lineHeight: '2rem',
          },
          subtitle1: {
            fontFamily: 'Barlow, sans-serif',
            fontSize: 12,
            lineHeight: '1.5rem',
            letterSpacing: '0.92px',
            fontWeight: 600,
          },
          subtitle2: {
            fontSize: 12,
            lineHeight: '1.5rem',
            letterSpacing: '0.92px',
          },
          button: {},
        },
        components: {
          MuiTypography: {
            styleOverrides: {
              root: {
                color: COLORS.palette.primary.DARKBLUE,
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
                style: {
                  backgroundColor: 'inherit',
                  color: COLORS.palette.grey.GREY,
                  fontWeight: '600',
                  padding: 0,
                  textTransform: 'none',
                  borderRadius: 0,
                  minWidth: 0,

                  '&:hover': {
                    backgroundColor: 'transparent',
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
                    backgroundColor: COLORS.palette.primary.DARKBLUE,
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                },
              },
              {
                props: { variant: 'plan' },
                style: {
                  backgroundColor: COLORS.palette.secondary.DARKCYAN,
                  color: COLORS.palette.primary.CREAM,
                  padding: '1.2rem 3.2rem',
                  borderRadius: '0.8rem',
                  fontSize: '1.8rem',
                  '&:hover': {
                    backgroundColor: '#66D2CF',
                  },
                },
              },
              {
                props: { variant: 'footer' },
                style: {
                  backgroundColor: 'inherit',
                  color: COLORS.palette.grey.GREY,
                  fontWeight: '600',
                  letterSpacing: '0.8px',
                  padding: 0,
                  fontSize: '1.2rem',
                  fontFamily: 'Barlow, sans-serif',
                  textTransform: 'uppercase',
                  minWidth: 0,

                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                  },
                },
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

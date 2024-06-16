import { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 648,
    md: 900,
    lg: 1280,
    xl: 1536,
  },
});

const Theme = ({ children }) => {
  const COLORS = {
    palette: {
      primary: {
        DARKBLUE500: '#333D4B',
        DARKBLUE400: '#2C343E',
        CREAM: '#FEFCF7',
      },
      secondary: {
        DARKCYAN: '#0E8784',
      },
      orange: {
        ORANGE: '#FDD6BA',
      },
      grey: {
        GREY500: '#83888F',
        GREY400: '#9DA1A8',
        GREY300: '#B8BBBF',
        GREY200: '#D3D6D9',
        GREY100: '#F4F1EB',
      },
    },
  };

  const theme = useMemo(
    () =>
      createTheme({
        breakpoints,
        palette: {
          primary: {
            main: COLORS.palette.primary.DARKBLUE500,
            400: COLORS.palette.primary.DARKBLUE400,
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
            main: COLORS.palette.grey.GREY500,
            400: COLORS.palette.grey.GREY400,
            300: COLORS.palette.grey.GREY300,
            200: COLORS.palette.grey.GREY200,
            100: COLORS.palette.grey.GREY100,
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
          MuiList: {
            styleOverrides: {
              root: {
                padding: 0,
                width: 'fit-content',
              },
            },
          },
          MuiListItem: {
            styleOverrides: {
              root: {
                padding: 0,
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
                    bottom: '-0.5rem',
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
                  '&.Mui-disabled': {
                    backgroundColor: COLORS.palette.grey.GREY200,
                    color: COLORS.palette.grey.GREY500,
                  },
                },
              },
              {
                props: { variant: 'footer' },
                style: {
                  backgroundColor: 'inherit',
                  fontWeight: '600',
                  letterSpacing: '0.8px',
                  padding: 0,
                  fontSize: '1.2rem',
                  fontFamily: 'Barlow, sans-serif',
                  textTransform: 'uppercase',
                  minWidth: 0,
                  color: COLORS?.palette?.grey?.GREY500,

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

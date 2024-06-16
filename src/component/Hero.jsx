import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';

import { SectionsStyles } from '../constants';
/**
 * Hero Component
 *
 * This component is used as a shared Hero section across multiple pages.
 * It displays a background image with content on top of it. Each page can
 * override the default styles using the provided props.
 *
 * @param {object} content - Contains the data to be displayed on the Hero section.
 *                          - mobileImg: Image URL for mobile view.
 *                          - tabletImg: Image URL for tablet view.
 *                          - desktopImg: Image URL for desktop view.
 *                          - other content properties like text, buttons, etc.
 *
 * @param {object} mainStylesOverride - Custom styles to override the default styles
 *                                      of the main container. Useful for adjusting
 *                                      layout and spacing specific to each page.
 *
 * @param {object} imgStylesOverride - Custom styles to override the default styles
 *                                     of the image. Useful for adjusting image-specific
 *                                     styles such as size, positioning, etc.
 */

const Hero = ({ content, mainStylesOverride, imgStylesOverride }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ position: 'relative', height: { xs: '49.5rem', md: '52rem' }, ...mainStylesOverride, ...SectionsStyles }}>
      <Box
        component='img'
        src={isTablet ? (isMobile ? content?.mobileImg : content?.tabletImg) : content?.desktopImg}
        alt='Coffee press'
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top',
          borderRadius: '1rem',
          ...imgStylesOverride,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: { xs: 'center', sm: 'flex-start' },
          padding: { xs: '0 1rem', sm: '0 6rem', md: '0 8.5rem' },
          textAlign: { xs: 'center', sm: 'left' },
        }}>
        <Typography
          variant='h1'
          color='secondary.main'
          sx={{
            marginBottom: { xs: '2.5rem' },
            width: { xs: '100%', sm: 'auto' },
            maxWidth: { xs: '36rem', sm: '40rem', md: '50rem' },
          }}>
          {content?.title}
        </Typography>
        <Typography
          variant='body1'
          color='secondary.main'
          sx={{ marginBottom: { xs: '4rem' }, width: { xs: '100%', sm: '71%', md: '40rem' }, maxWidth: { xs: '40rem', sm: 'none' }, opacity: '0.8' }}>
          {content?.body}
        </Typography>
        {content?.page === 'HomePage' ? (
          <Button variant='plan' component={Link} to='/plan'>
            Create your plan
          </Button>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </Box>
    </Box>
  );
};

export default Hero;

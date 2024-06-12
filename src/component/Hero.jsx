import React from 'react';

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = ({ content }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ position: 'relative', height: { xs: '49.5rem', md: '52rem' } }}>
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
          variant={isMobile ? 'h2' : 'h1'}
          color={theme.palette.text.primary}
          sx={{
            marginBottom: { xs: '2.5rem' },
            width: { xs: '100%', sm: 'auto' },
            maxWidth: { xs: '36rem', sm: '40rem', md: '50rem' },
            fontSize: { xs: '4rem', sm: '4.8rem' },
          }}>
          {content?.title}
        </Typography>
        <Typography
          variant='body1'
          color={theme.palette.text.primary}
          sx={{
            marginBottom: { xs: '4rem' },
            width: { xs: '100%', sm: '71%', md: '40rem' },
            maxWidth: { xs: '40rem', sm: 'none' },
            opacity: '0.8',
            lineHeight: '1.6',
          }}>
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

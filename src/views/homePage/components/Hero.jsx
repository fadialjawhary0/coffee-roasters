import React from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import HeroImg_Desktop from '../../../assets/home/desktop/image-hero-coffeepress.jpg';
import HeroImg_Tablet from '../../../assets/home/tablet/image-hero-coffeepress.jpg';
import HeroImg_Mobile from '../../../assets/home/mobile/image-hero-coffeepress.jpg';

const Hero = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sharedStyles = {
    position: 'absolute',
    left: '8rem',
  };

  const titleStyles = {
    top: '12rem',
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        component='img'
        src={isTablet ? (isMobile ? HeroImg_Mobile : HeroImg_Tablet) : HeroImg_Desktop}
        alt='Coffee press'
        sx={{
          width: '100%',
          height: { xs: '46rem', md: '52rem' },
          objectFit: 'cover',
          objectPosition: 'top',
          borderRadius: '1rem',
        }}
      />
      <Typography variant='h1' color={theme?.palette?.text?.primary} sx={{ ...sharedStyles, ...titleStyles }}>
        Great coffee made simple.
      </Typography>
      <Typography
        variant='body1'
        color={theme?.palette?.text?.primary}
        sx={{ ...sharedStyles, opacity: '0.8', lineHeight: '1.6' }}>
        Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best
        roasters delivered directly to your door, at your schedule.
      </Typography>
      <Button variant='plan' sx={{ ...sharedStyles }}>
        Create your plan
      </Button>
    </Box>
  );
};

export default Hero;

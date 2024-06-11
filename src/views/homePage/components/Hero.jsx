import React from 'react';

import { Box, Typography } from '@mui/material';
import HeroImg from '../../../assets/home/desktop/image-hero-coffeepress.jpg';

const Hero = () => {
  return (
    <Box>
      <Box
        component='img'
        src={HeroImg}
        alt='Coffee press'
        sx={{ width: '100%', height: '52rem', objectFit: 'cover', objectPosition: 'top', borderRadius: '1rem' }}
      />
    </Box>
  );
};

export default Hero;

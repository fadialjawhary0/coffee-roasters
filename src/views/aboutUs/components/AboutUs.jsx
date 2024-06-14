import React from 'react';

import { Box, Grid } from '@mui/material';

import Hero from '../../../component/Hero';
import { AboutUsHero } from '../../../constants';
import Commitment from './Commitment';

const AboutUs = () => {
  const mainStylesOverride = {
    height: '45rem',
    mb: { xs: '12rem', sm: '14.4rem', lg: '16.8rem' },
  };

  const imgStylesOverride = {
    objectPosition: 'right',
  };

  return (
    <Box>
      <Hero content={AboutUsHero} mainStylesOverride={mainStylesOverride} imgStylesOverride={imgStylesOverride} />
      <Grid container>
        <Commitment />
      </Grid>
    </Box>
  );
};

export default AboutUs;

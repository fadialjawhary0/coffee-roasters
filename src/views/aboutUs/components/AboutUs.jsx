import React from 'react';

import { Box, Grid } from '@mui/material';

import Hero from '../../../component/Hero';
import { AboutUsHero, SectionsStyles } from '../../../constants';
import Commitment from './Commitment';
import Quality from './Quality';

const AboutUs = () => {
  const mainStylesOverride = {
    height: '45rem',
    ...SectionsStyles,
  };

  const imgStylesOverride = {
    objectPosition: 'right',
  };

  return (
    <Box>
      <Hero content={AboutUsHero} mainStylesOverride={mainStylesOverride} imgStylesOverride={imgStylesOverride} />
      <Commitment />
      <Quality />
    </Box>
  );
};

export default AboutUs;

import React from 'react';

import { Box } from '@mui/material';

import Hero from '../../../component/Hero';
import { AboutUsHero } from '../../../constants';
import Commitment from './Commitment';
import Quality from './Quality';
import Headquarters from './Headquarters';

const AboutUs = () => {
  const mainStylesOverride = {
    height: '45rem',
  };

  const imgStylesOverride = {
    objectPosition: 'right',
  };

  return (
    <Box>
      <Hero content={AboutUsHero} mainStylesOverride={mainStylesOverride} imgStylesOverride={imgStylesOverride} />
      <Commitment />
      <Quality />
      <Headquarters />
    </Box>
  );
};

export default AboutUs;

import React from 'react';

import { Box, Typography } from '@mui/material';

import Hero from '../../../component/Hero';
import { HomePageHero } from '../../../constants';
import Collections from './Collections';

const HomePage = () => {
  return (
    <Box>
      <Hero content={HomePageHero} />
      <Collections />
    </Box>
  );
};

export default HomePage;

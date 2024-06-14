import React from 'react';

import { Box } from '@mui/material';

import Hero from '../../../component/Hero';
import { HomePageHero } from '../../../constants';
import Collections from './Collections';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';

const HomePage = () => {
  const mainStylesOverride = {
    mb: { xs: '12rem', sm: '14.4rem', lg: '16.8rem' },
  };
  return (
    <Box>
      <Hero content={HomePageHero} mainStylesOverride={mainStylesOverride} />
      <Collections />
      <WhyChooseUs />
      <HowItWorks />
    </Box>
  );
};

export default HomePage;

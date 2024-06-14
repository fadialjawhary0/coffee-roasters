import React from 'react';

import { Box } from '@mui/material';

import { HomePageHero, SectionsStyles } from '../../../constants';
import Hero from '../../../component/Hero';
import Collections from './Collections';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';

const HomePage = () => {
  const mainStylesOverride = {
    ...SectionsStyles,
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

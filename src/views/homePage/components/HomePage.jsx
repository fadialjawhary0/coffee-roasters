import React from 'react';

import { Box } from '@mui/material';

import Hero from '../../../component/Hero';
import { HomePageHero } from '../../../constants';
import Collections from './Collections';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';

const HomePage = () => {
  return (
    <Box>
      <Hero content={HomePageHero} />
      <Collections />
      <WhyChooseUs />
      <HowItWorks />
    </Box>
  );
};

export default HomePage;

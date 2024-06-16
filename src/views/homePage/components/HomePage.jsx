import React from 'react';

import { Box } from '@mui/material';

import { HomePageHero } from '../../../constants';
import Hero from '../../../component/Hero';
import Collections from './Collections';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from '../../../component/HowItWorks';

const HomePage = () => {
  const mainStyles = { pt: { xs: '16rem', sm: '15rem', lg: '18rem' }, px: { md: '3.5rem', lg: '8.5rem' } };
  const circleStyles = { backgroundColor: 'secondary.main' };

  return (
    <Box>
      <Hero content={HomePageHero} />
      <Collections />
      <WhyChooseUs />
      <HowItWorks mainStyles={mainStyles} circleStyles={circleStyles} />
    </Box>
  );
};

export default HomePage;

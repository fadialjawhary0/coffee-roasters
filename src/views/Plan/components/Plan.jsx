import React from 'react';

import { Box } from '@mui/material';

import Hero from '../../../component/Hero';
import HowItWorks from '../../../component/HowItWorks';
import CreatePlan from './CreatePlan';

import { PlanHero } from '../../../constants';

const Plan = () => {
  const mainStyles = {
    backgroundColor: 'primary.main',
    py: { xs: '3rem', sm: '8rem', lg: '10rem' },
    px: { xs: '2rem', md: '3.5rem', lg: '8.5rem' },
    borderRadius: '1rem',
  };
  const textStyles = { color: 'secondary.main' };
  const circleStyles = { backgroundColor: 'primary.main' };

  return (
    <Box>
      <Hero content={PlanHero} />
      <HowItWorks mainStyles={mainStyles} textStyles={textStyles} circleStyles={circleStyles} />
      <CreatePlan />
    </Box>
  );
};

export default Plan;

import React from 'react';

import { Box, Typography } from '@mui/material';
import PerksCards from './PerksCards';

const WhyChooseUs = () => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4rem',
    textAlign: 'center',
    height: { xs: '86rem', sm: '56rem', md: '50rem' },
    padding: { xs: '6.4rem 2.4rem 0 2.4rem', sm: '5.8rem 5.6rem', md: '10rem 8.5rem' },
    mb: { xs: '56rem', sm: '30rem', md: '26rem' },
    borderRadius: '1rem',
    backgroundColor: 'primary.400',
    position: 'relative',
  };

  return (
    <Box sx={{ ...containerStyles }}>
      <Typography variant='h2' color='secondary.main'>
        Why choose us?
      </Typography>
      <Typography variant='body1' color='secondary.main' sx={{ maxWidth: '56rem', opacity: '0.8' }}>
        A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to
        give you a more impactful experience on every level.
      </Typography>
      <PerksCards />
    </Box>
  );
};

export default WhyChooseUs;

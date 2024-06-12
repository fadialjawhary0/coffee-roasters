import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import PerksCards from './PerksCards';

const WhyChooseUs = () => {
  const theme = useTheme();

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
    backgroundColor: theme?.palette?.background?.secondary,
    position: 'relative',
  };

  return (
    <Box sx={{ ...containerStyles }}>
      <Typography variant='h2' color={theme?.palette?.text?.primary} sx={{ fontSize: { xs: '2.8rem', sm: '4rem' } }}>
        Why choose us?
      </Typography>
      <Typography variant='body2' color={theme?.palette?.text?.primary} sx={{ maxWidth: '56rem' }}>
        A large part of our role is choosing which particular coffees will be featured in our range. This means working
        closely with the best coffee growers to give you a more impactful experience on every level.
      </Typography>
      <PerksCards />
    </Box>
  );
};

export default WhyChooseUs;

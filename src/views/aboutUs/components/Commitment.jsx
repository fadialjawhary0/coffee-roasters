import React from 'react';

import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import CommitmentImg from '../../../assets/about/desktop/image-commitment.jpg';
import CommitmentImg_Tablet from '../../../assets/about/tablet/image-commitment.jpg';
import CommitmentImg_Mobile from '../../../assets/about/mobile/image-commitment.jpg';

const Commitment = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const gridItemStyles = {
    display: 'grid',
    gridTemplateColumns: { sm: '1fr 1.21fr' },
    alignItems: { sm: 'start', md: 'center' },
    gap: { sm: '6rem', md: '10rem', lg: '12.7rem' },
    px: { md: '4.5rem', lg: '8.5rem' },
    mb: { xs: '12rem', md: '14.4rem', lg: '16.8rem' },
    minHeight: { xs: 'auto', sm: '30rem', md: '54rem' },
  };

  return (
    <Grid item sx={{ ...gridItemStyles }}>
      <Box
        component='img'
        src={isMobile ? CommitmentImg_Mobile : isTablet ? CommitmentImg_Tablet : CommitmentImg}
        alt='Commitment'
        sx={{
          borderRadius: '1rem',
          width: '100%',
          height: { xs: '40rem', sm: '100%' },
          objectFit: 'cover',
          objectPosition: 'top',
          mb: { xs: '4.8rem', sm: 0 },
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3.7rem', textAlign: { xs: 'center', sm: 'left' } }}>
        <Typography variant='h2' sx={{ color: 'primary.main' }}>
          Our commitment
        </Typography>
        <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ color: 'primary.main' }}>
          We're built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world's best
          coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the
          challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through
          with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only
          the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
        </Typography>
      </Box>
    </Grid>
  );
};

export default Commitment;

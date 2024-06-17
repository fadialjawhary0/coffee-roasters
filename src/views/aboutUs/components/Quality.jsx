import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import { SectionsStyles } from '../../../constants';
import QualityImg_Desktop from '../../../assets/about/desktop/image-quality.jpg';
import QualityImg_Tablet from '../../../assets/about/tablet/image-quality.jpg';
import QualityImg_Mobile from '../../../assets/about/mobile/image-quality.jpg';

const Quality = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const containerStyles = {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
    alignItems: 'flex-end',
    rowGap: { xs: '6rem', lg: '0' },
    position: 'relative',
    padding: { xs: '0 2.4rem 0 2.4rem', sm: '5.8rem 5.6rem', lg: '10rem 8.5rem' },
    ...SectionsStyles,

    '::after': {
      content: "''",
      position: 'absolute',
      zIndex: '-1',
      width: '100%',
      height: { xs: '48rem', sm: '50rem' },
      borderRadius: '1rem',
      backgroundColor: 'primary.main',
    },
  };

  return (
    <Box
      sx={{
        ...containerStyles,
      }}>
      <Box
        sx={{
          padding: { xs: '0 2.4rem 6rem 2.4rem', sm: '0 1rem', lg: '0 5rem 5rem 0' },
          gridRow: { xs: '2/3', lg: '1/2' },
          justifySelf: { xs: 'center', lg: 'start' },
          alignSelf: { xs: 'start', lg: 'end' },
          textAlign: { xs: 'center', lg: 'left' },
          overflow: { xs: 'hidden', md: 'visible' },
        }}>
        <Typography variant='h2' color={'secondary.main'} sx={{ pb: '3.2rem' }}>
          Uncompromising quality
        </Typography>
        <Typography variant='body1' color={'secondary.main'} sx={{ width: { xs: '100%', lg: '44rem' }, opacity: '0.8' }}>
          Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control
          program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
          consistent, user-friendly coffee, so that brewing is easy and enjoyable.
        </Typography>
      </Box>
      <Box
        component='img'
        src={isMobile ? QualityImg_Mobile : isTablet ? QualityImg_Tablet : QualityImg_Desktop}
        sx={{
          maxWidth: '100%',
          height: { xs: '22rem', sm: '37rem', lg: '50rem' },
          borderRadius: '1rem',
          objectFit: 'cover',
          justifySelf: { xs: 'center', lg: 'end' },
        }}
      />
    </Box>
  );
};

export default Quality;

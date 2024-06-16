import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import { SectionsStyles } from '../../../constants';
import QualityImg_Desktop from '../../../assets/about/desktop/image-quality.jpg';
import QualityImg_Tablet from '../../../assets/about/tablet/image-quality.jpg';
import QualityImg_Mobile from '../../../assets/about/mobile/image-quality.jpg';

const Quality = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const containerStyles = {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    alignItems: 'flex-end',
    rowGap: { xs: '6rem', md: '0' },
    position: 'relative',
    padding: { xs: '6.4rem 2.4rem 0 2.4rem', sm: '5.8rem 5.6rem', md: '10rem 8.5rem' },
    ...SectionsStyles,

    '::after': {
      content: "''",
      position: 'absolute',
      zIndex: '-1',
      width: '100%',
      height: { xs: '48rem', sm: '50rem', md: '50rem' },
      borderRadius: '1rem',
      backgroundColor: 'primary.400',
    },
  };

  return (
    <Box
      sx={{
        ...containerStyles,
      }}>
      <Box
        sx={{
          padding: { xs: '0 2.4rem 6rem 2.4rem', sm: '0 1rem', md: '0 5rem 5rem 0' },
          gridRow: { xs: '2/3', md: '1/2' },
          justifySelf: { xs: 'center', md: 'start' },
          alignSelf: { xs: 'start', md: 'end' },
          textAlign: { xs: 'center', md: 'left' },
          overflow: { xs: 'hidden', sm: 'visible' },
        }}>
        <Typography variant='h2' color={'secondary.main'} sx={{ pb: '3.2rem' }}>
          Uncompromising quality
        </Typography>
        <Typography variant='body1' color={'secondary.main'} sx={{ width: { xs: '100%', md: '44rem' }, opacity: '0.8' }}>
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
          height: { xs: '22rem', sm: '37rem', md: '50rem' },
          borderRadius: '1rem',
          objectFit: 'cover',
          justifySelf: { xs: 'center', md: 'end' },
        }}
      />
    </Box>
  );
};

export default Quality;

import React from 'react';
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import { PerksContent } from '../../../constants';

const PerksCards = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const gridStyles = {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: { md: 'wrap', lg: 'nowrap' },
    gap: '3rem',
    position: 'absolute',
    left: '50%',
    top: { xs: '34%', sm: '47.5%', md: '70%' },
    transform: 'translateX(-50%)',
    maxWidth: '132rem',
  };

  const itemStyles = {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row', md: 'column' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '7rem',
    padding: { xs: '7.2rem 0 5.2rem 0', sm: '4rem 0 4rem 7rem', md: '7.2rem 0 4.8rem 0' },
    backgroundColor: theme?.palette?.primary?.main,
    borderRadius: '1rem',
  };

  const textBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: { sm: 'flex-start', md: 'center' },
    textAlign: { sm: 'left', md: 'center' },
    gap: '2rem',
  };

  return (
    <Grid container sx={gridStyles}>
      {PerksContent.map((perk, idx) => (
        <Grid key={idx} item xs={11} sm={10.5} md={3.5} sx={itemStyles}>
          <Box component='img' src={perk?.icon} />
          <Box sx={textBoxStyles}>
            <Typography variant='h4' color={theme?.palette?.text?.primary}>
              {perk?.title}
            </Typography>
            <Typography
              variant={isTablet ? 'body1' : 'body2'}
              color={theme?.palette?.text?.primary}
              sx={{
                pr: { xs: '3.2rem', sm: '4.8rem', md: '4.8rem' },
                pl: { xs: '3.2rem', sm: '0', md: '4.8rem' },
                maxWidth: { xs: '42rem', sm: '100%' },
              }}>
              {perk?.body}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PerksCards;

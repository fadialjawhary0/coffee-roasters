import React from 'react';

import { Box, List, ListItem, Typography, useMediaQuery, useTheme } from '@mui/material';

import { HeadquartersDetails, SectionsStyles } from '../../../constants';

const Headquarters = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ padding: { xs: 0, md: '0 8.5rem' }, ...SectionsStyles }}>
      <Typography
        variant='h4'
        color={theme?.palette?.secondary?.main}
        sx={{ mb: '7.2rem', textAlign: { xs: 'center', sm: 'left' } }}>
        Our headquarters
      </Typography>
      <List
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '4rem',
          padding: 0,
          listStyle: 'none',
        }}>
        {HeadquartersDetails.map((headquarters, idx) => (
          <ListItem
            key={idx}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' }, p: 0 }}>
            <Box component='img' src={headquarters?.icon} alt={headquarters?.country} sx={{ mb: '4.8rem' }} />
            <Typography variant={isTablet ? 'h4' : 'h3'} color={theme?.palette?.text?.secondary} sx={{ mb: '2rem' }}>
              {headquarters?.country}
            </Typography>
            <Typography variant='body2' color={theme?.palette?.text?.secondary}>
              {headquarters?.address}
            </Typography>
            <Typography variant='body2' color={theme?.palette?.text?.secondary}>
              {headquarters?.city}
            </Typography>
            <Typography variant='body2' color={theme?.palette?.text?.secondary}>
              {headquarters?.postalCode}
            </Typography>
            <Typography variant='body2' color={theme?.palette?.text?.secondary}>
              {headquarters?.phone}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Headquarters;

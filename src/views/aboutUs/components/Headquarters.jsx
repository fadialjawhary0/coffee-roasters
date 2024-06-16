import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { HeadquartersDetails, SectionsStyles } from '../../../constants';

const Headquarters = () => {
  return (
    <Box sx={{ padding: { xs: 0, md: '0 8.5rem' }, ...SectionsStyles }}>
      <Typography variant='h4' color='grey.main' sx={{ mb: '7.2rem', textAlign: { xs: 'center', sm: 'left' } }}>
        Our headquarters
      </Typography>
      <Grid container spacing={4}>
        {HeadquartersDetails.map((headquarters, idx) => (
          <Grid item xs={12} sm={4} key={idx}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' }, p: 0 }}>
              <Box component='img' src={headquarters?.icon} alt={headquarters?.country} sx={{ mb: '4.8rem' }} />
              <Typography variant='h3' sx={{ minHeight: { xs: '5rem', md: '7rem' }, color: 'primary.main' }}>
                {headquarters?.country}
              </Typography>
              <Typography variant='body1'>{headquarters?.address}</Typography>
              <Typography variant='body1'>{headquarters?.city}</Typography>
              <Typography variant='body1'>{headquarters?.postalCode}</Typography>
              <Typography variant='body1'>{headquarters?.phone}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Headquarters;

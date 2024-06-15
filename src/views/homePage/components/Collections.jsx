import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { CollectionItems, SectionsStyles } from '../../../constants';

const Collections = () => {
  return (
    <Grid
      container
      justifyContent='center'
      spacing={2}
      sx={{ ...SectionsStyles, position: 'relative', pt: { xs: '6rem', sm: 0 }, rowGap: { xs: '4rem', lg: '0' } }}>
      <Box
        sx={{
          position: 'absolute',
          zIndex: '-1',
          top: { xs: 0, sm: '-7rem', md: '-4rem', lg: '-5rem' },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-4rem',
            left: 0,
            width: '100%',
            height: { xs: '10rem', sm: '16rem' },
            background: 'linear-gradient(rgba(254, 252, 247, 0.0001) -100%, #fefcf7 94%)',
            zIndex: 1,
          },
        }}>
        <Typography variant='h1' sx={{ fontSize: { xs: '4rem', sm: '8rem', md: '12rem', lg: '18rem' } }}>
          our collection
        </Typography>
      </Box>
      {CollectionItems.map((item, idx) => (
        <Grid
          xs={12}
          sm={6}
          md={6}
          lg={3}
          key={idx}
          item
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: '3rem', sm: '7rem' } }}>
          <Box component='img' src={item?.img} sx={{ width: { xs: '19.2rem', sm: '25.5rem' } }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: '1.5rem', sm: '3rem' }, textAlign: 'center' }}>
            <Typography variant='h4'>{item?.title}</Typography>
            <Typography variant='body1' sx={{ maxWidth: { xs: '28rem', lg: '25.5rem' } }}>
              {item?.body}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Collections;

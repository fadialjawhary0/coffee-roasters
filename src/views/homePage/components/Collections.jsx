import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { CollectionItems } from '../../../constants';

const Collections = () => {
  return (
    <Grid
      container
      justifyContent='center'
      sx={{
        position: 'relative',
        pb: { xs: '10rem', sm: '19.5rem' },
        pt: { xs: '8rem', sm: 0 },
        gap: { xs: '4rem', sm: '3rem' },
      }}>
      <Box
        sx={{
          position: 'absolute',
          zIndex: '-1',
          top: { xs: 0, sm: '-7rem', lg: '-12rem' },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(254, 252, 247, 0.0001) -100%, #fefcf7 94%)',
            zIndex: 1,
          },
        }}>
        <Typography variant='h1' sx={{ fontSize: { xs: '4rem', sm: '10rem', lg: '18rem' } }}>
          our collection
        </Typography>
      </Box>
      {CollectionItems.map((item, idx) => (
        <Grid
          key={idx}
          item
          sx={{
            maxWidth: { xs: '32rem', sm: '25rem' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: '4rem', sm: '7rem' },
          }}>
          <Box component='img' src={item?.img} sx={{ width: { xs: '19.2rem', sm: '100%' } }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: { xs: '1.5rem', sm: '3rem' },
              textAlign: 'center',
            }}>
            <Typography variant='h4'>{item?.title}</Typography>
            <Typography variant='body2'>{item?.body}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Collections;

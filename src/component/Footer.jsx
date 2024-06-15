import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Button, Grid } from '@mui/material';

import Logo from '../assets/shared/desktop/logo-footer.svg';
import { FooterLinks, NavbarLinks } from '../constants';

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        flexWrap: 'nowrap',
        gap: { xs: '3.2rem', md: '6rem', lg: '10rem' },
        backgroundColor: 'primary.main',
        padding: { xs: '5.4rem 0', md: '4.8rem 5.8rem', lg: '4.8rem 10.5rem' },
        mb: { xs: '7rem' },
      }}>
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        <Box component='img' src={Logo} alt='Coffee house logo' sx={{ maxWidth: { md: '20rem', lg: '24rem' } }} />
      </Grid>
      <Grid
        item
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'none' },
          gap: { xs: '4.2rem', md: '0' },
          width: { xs: 'fit-content', md: '100%' },
        }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '3.2rem' }}>
          {NavbarLinks.map((link, index) => (
            <Button disableRipple variant='footer' key={index} component={Link} to={link?.path} sx={{ textTransform: 'upper' }}>
              {link?.name}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          {FooterLinks.map((link, index) => (
            <Box key={index}>
              <Box component='img' src={link?.img} alt={link?.alt} sx={{ cursor: 'pointer' }} />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;

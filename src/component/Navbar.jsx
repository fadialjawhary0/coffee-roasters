import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';

import Logo from '../assets/shared/desktop/logo.svg';
import HamburgerMenu from '../assets/shared/mobile/icon-hamburger.svg';
import CloseMenu from '../assets/shared/mobile/icon-close.svg';

import { NavbarLinks } from '../constants/navbarLinks.const';

const Navbar = React.memo(() => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navbarStyles = {
    px: { xs: '2.4rem', sm: '4rem', md: '8.2rem', lg: '6.2rem' },
    pt: { xs: '1.6rem', sm: '2.4rem', lg: '4.4rem' },
    pb: { xs: '2.4rem', sm: '4rem', lg: '4.4rem' },
    position: 'relative',
  };

  return (
    <Grid container alignItems='center' justifyContent='space-between' sx={{ ...navbarStyles }}>
      <Grid item>
        <Link to='/'>
          <Box
            component='img'
            src={Logo}
            alt='Coffee Roasters'
            sx={{ cursor: 'pointer', width: { xs: '16rem', sm: '100%' } }}
          />
        </Link>
      </Grid>

      {isMobile ? (
        <Grid item>
          <Box component='div' sx={{ position: 'relative' }}>
            <Box
              component='img'
              src={HamburgerMenu}
              alt='Hamburger'
              sx={{
                py: '1.5rem',
                pl: '1.5rem',
                opacity: isMenuOpen ? '0' : '100%',
                transition: 'opacity 0.3s ease',
                position: 'absolute',
              }}
              onClick={onMenuClick}
            />
            <Box
              component='img'
              src={CloseMenu}
              alt='Close'
              sx={{ py: '1.6rem', pl: '1.6rem', opacity: isMenuOpen ? '100%' : '0', transition: 'opacity 0.3s ease' }}
              onClick={onMenuClick}
            />
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '90vh',
              backgroundImage: `linear-gradient(${theme?.palette?.background?.default} 40%,rgba(254, 252, 247, 0.56))`,
              position: 'absolute',
              top: '7rem',
              left: '0',
              opacity: isMenuOpen ? '100%' : '0',
              transition: 'all 0.3s ease',
              zIndex: '100',
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4rem', py: '5rem', alignItems: 'center' }}>
              {NavbarLinks.map((link, idx) => (
                <Button
                  disableRipple
                  key={idx}
                  component={Link}
                  to={link?.path}
                  onClick={() => setIsMenuOpen(false)}
                  sx={{
                    color: theme?.palette?.text?.secondary,
                    backgroundColor: 'transparent',
                    padding: 0,
                    width: 'fit-content',
                    display: isMenuOpen ? 'block' : 'none',
                  }}>
                  <Typography variant='h4'>{link?.name}</Typography>
                </Button>
              ))}
            </Box>
          </Box>
        </Grid>
      ) : (
        <Grid item>
          <Box sx={{ display: 'flex', pt: '0.5rem', gap: '3rem' }}>
            {NavbarLinks.map((link, idx) => (
              <Button
                disableRipple
                key={idx}
                variant='navbar'
                component={Link}
                to={link?.path}
                sx={{ textTransform: 'uppercase' }}>
                {link?.name}
              </Button>
            ))}
          </Box>
        </Grid>
      )}
    </Grid>
  );
});

export default Navbar;

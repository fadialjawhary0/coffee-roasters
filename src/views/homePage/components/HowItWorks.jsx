import React from 'react';
import { Box, Button, List, ListItem, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ProcessSteps, SectionsStyles } from '../../../constants';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', sm: 'flex-start' },
        px: { md: '5.5rem', lg: '8.5rem' },
        pt: { xs: '12rem', sm: '15rem', lg: '18rem' },
        ...SectionsStyles,
      }}>
      <Typography
        variant='h4'
        color={theme?.palette?.secondary?.main}
        sx={{ pb: { xs: '7rem', sm: '5.6rem', md: '9.6rem' } }}>
        How it works
      </Typography>

      <List
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'center', sm: 'flex-start' },
          alignItems: { xs: 'center', sm: 'flex-start' },
          pt: { sm: '4rem', md: '8rem' },
          position: 'relative',
        }}>
        {ProcessSteps.map((step, index) => (
          <ListItem
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', sm: 'flex-start' },
              maxWidth: { xs: '47rem', sm: '37rem' },
              textAlign: { xs: 'center', sm: 'left' },
              padding: { xs: '0', sm: '0 1.6rem 0 0', md: '0 9.6rem 0 0' },
              position: 'relative',
              mb: { xs: '5.6rem', sm: '0' },
            }}>
            {isMobile ? (
              <></>
            ) : (
              <React.Fragment>
                <Box
                  sx={{
                    width: '3.2rem',
                    height: '3.2rem',
                    borderRadius: '50%',
                    border: `2px solid ${theme?.palette?.primary?.main}`,
                    position: 'absolute',
                    top: { sm: '-4rem', md: '-8rem' },
                    left: '1.5rem',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: theme?.palette?.background?.default,
                    zIndex: 1,
                  }}
                />
                {index !== ProcessSteps.length - 1 && (
                  <Box
                    sx={{
                      height: '2px',
                      maxWidth: '77rem',
                      backgroundColor: theme?.palette?.text?.tertiary,
                      width: '100%',
                      position: 'absolute',
                      top: { sm: '-4rem', md: '-8rem' },
                    }}
                  />
                )}
              </React.Fragment>
            )}

            <Typography variant='h1' sx={{ color: theme?.palette?.text?.tertiary, fontSize: '7.2rem' }}>
              {step?.number}
            </Typography>
            <Typography
              variant='h3'
              sx={{
                mt: { xs: '2.4rem', sm: '3.8rem' },
                mb: { xs: '2.4rem', sm: '4.2rem' },
                minHeight: { xs: '0', sm: '7rem' },
              }}>
              {step?.title}
            </Typography>
            <Typography variant={isMobile ? 'body1' : 'body2'}>{step?.description}</Typography>
          </ListItem>
        ))}
      </List>
      <Button variant='plan' component={Link} to='/plan' sx={{ mt: { xs: '2rem', sm: '6rem' } }}>
        Create your plan
      </Button>
    </Box>
  );
};

export default HowItWorks;

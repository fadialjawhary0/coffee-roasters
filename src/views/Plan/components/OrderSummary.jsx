import React, { useState } from 'react';

import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

const OrderSummary = ({ options, questionsLength }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const { 0: coffeePreference = '_____', 1: beanType = '_____', 2: quantity = '_____', 3: grindOption = '_____', 4: deliveryFrequency = '_____' } = options;

  const optionColor = 'darkcyan.main';

  /* Summary Component

  @param {boolean} isOverlay - If the component is being displayed as an overlay (For the text color) */
  const Summary = ({ isOverlay }) => {
    return (
      <Box>
        <Typography variant='h4' color={isOverlay ? 'grey.main' : '#ffffff'}>
          ❝I drink my coffee as{' '}
          <Typography component='span' variant='h4' sx={{ color: optionColor }}>
            {coffeePreference}
          </Typography>
          , with a{' '}
          <Typography component='span' variant='h4' sx={{ color: optionColor }}>
            {beanType}
          </Typography>{' '}
          type of bean.{' '}
          <Typography component='span' variant='h4' sx={{ color: optionColor }}>
            {quantity}
          </Typography>{' '}
          ground ala{' '}
          <Typography component='span' variant='h4' sx={{ color: optionColor }}>
            {grindOption}
          </Typography>
          , sent to me{' '}
          <Typography component='span' variant='h4' sx={{ color: optionColor }}>
            {deliveryFrequency}
          </Typography>
          .❞
        </Typography>
      </Box>
    );
  };

  const onClickHandler = () => {
    setOrderSubmitted(true);
  };

  return (
    <React.Fragment>
      <Grid container flexDirection='column' sx={{ gap: '4.2rem', alignItems: { xs: 'center', md: 'end' } }}>
        <Grid item sx={{ backgroundColor: 'primary.400', padding: '2.8rem 6.4rem', borderRadius: '1rem' }}>
          <Typography variant='body1' sx={{ color: 'grey.main', mb: '2rem', textTransform: 'uppercase' }}>
            Order Summary
          </Typography>

          {/* Summary Component*/}
          <Summary isOverlay={false} />
        </Grid>
        <Grid item>
          <Button variant='plan' disabled={Object.keys(options).length !== questionsLength} onClick={onClickHandler}>
            Create my plan!
          </Button>
        </Grid>
      </Grid>
      {orderSubmitted && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 5,
          }}>
          <Box sx={{ maxWidth: '60rem', backgroundColor: 'secondary.main', borderRadius: '1rem', mx: { xs: '1rem', sm: '0' } }}>
            <Typography
              variant='h2'
              sx={{
                backgroundColor: 'primary.400',
                color: '#ffffff',
                padding: { xs: '4rem 2rem', sm: '4rem 5rem' },
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
              }}>
              Order Summary
            </Typography>
            <Box sx={{ padding: { xs: '4rem 2rem', sm: '4rem 5rem' } }}>
              <Summary isOverlay={true} />
              <Typography variant='body1' sx={{ mt: '1rem' }}>
                Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed
                at the checkout.
              </Typography>
              {isMobile ? (
                <Button variant='plan' sx={{ mt: '4.2rem', width: '100%' }} onClick={() => setOrderSubmitted(false)}>
                  Checkout - $14.00/mo
                </Button>
              ) : (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '4.2rem' }}>
                  <Typography variant='h3'>$14.00/ mo</Typography>
                  <Button variant='plan' sx={{ maxWidth: '26rem', width: '100%' }} onClick={() => setOrderSubmitted(false)}>
                    Checkout
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default OrderSummary;

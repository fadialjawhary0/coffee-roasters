import React from 'react';
import { Box, useTheme } from '@mui/material';

const HowItWorks = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        maxWidth: '50rem',
      }}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: theme?.palette?.text?.tertiary,
          transform: 'translateY(-50%)',
        }}
      />
      <Box
        sx={{
          width: '20px',
          height: '20px',
          backgroundColor: '#FEFCF7',
          borderRadius: '50%',
          border: `2px solid ${theme?.palette?.primary?.main}`,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          width: '20px',
          height: '20px',
          backgroundColor: '#FEFCF7',
          borderRadius: '50%',
          border: `2px solid ${theme?.palette?.primary?.main}`,
          zIndex: 1,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <Box
        sx={{
          width: '20px',
          height: '20px',
          backgroundColor: '#FEFCF7',
          borderRadius: '50%',
          border: `2px solid ${theme?.palette?.primary?.main}`,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default HowItWorks;

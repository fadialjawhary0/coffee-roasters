import React, { Suspense } from 'react';

import { Box, CircularProgress } from '@mui/material';

import PublicLayout from './PublicLayout';

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'space-between',
      }}>
      {/* <Navbar /> */}
      <Suspense
        fallback={
          <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' flexGrow={1}>
            <CircularProgress />
          </Box>
        }>
        <PublicLayout />
        {/* <Footer /> */}
      </Suspense>
    </Box>
  );
};

export default Layout;

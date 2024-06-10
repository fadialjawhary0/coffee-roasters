import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Box, useTheme } from '@mui/material';

import { PublicRouter } from '../routers';

const PublicLayout = () => {
  // const theme = useTheme();

  const AppBarWrapper = ({ Component, routerName }) => (
    <Box
      sx={{
        display: 'flex',
        gap: 5,
      }}>
      <Box sx={{ flexGrow: 1, overflowX: 'auto' }}>
        <Box>
          <Component />
        </Box>
      </Box>
    </Box>
  );
  return (
    <Routes>
      {PublicRouter?.map((router, index) => (
        <Route
          key={`${index}-${router.name}`}
          path={router.path}
          element={<AppBarWrapper Component={router.component} routerName={router.name} />}
        />
      ))}
    </Routes>
  );
};

export default PublicLayout;

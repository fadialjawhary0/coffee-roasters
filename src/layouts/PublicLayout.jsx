import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Box, useTheme } from '@mui/material';

import { PublicRouter } from '../routers';

const PublicLayout = () => {
  const theme = useTheme();

  const AppBarWrapper = ({ Component, routerName }) => (
    <Box sx={{ px: { xs: '2.4rem', sm: '4rem', md: '8rem', lg: '6rem' } }}>
      <Box sx={{ minHeight: theme.spacing(65), display: 'flex', flexDirection: 'column' }}>
        <Component />
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

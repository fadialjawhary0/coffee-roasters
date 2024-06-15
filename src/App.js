import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, GlobalStyles } from '@mui/material';
import Theme from './Theme';

import AppContainer from './layouts/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Theme>
          <CssBaseline />
          <GlobalStyles styles={{ html: { fontSize: '62.5%' }, body: { backgroundColor: '#FEFCF7' }, scrollBehavior: 'smooth' }} />
          <AppContainer />
        </Theme>
      </BrowserRouter>
    </>
  );
}

export default App;

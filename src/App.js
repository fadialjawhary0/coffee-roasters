import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, GlobalStyles, Box, CircularProgress } from '@mui/material';

import AppContainer from './layouts/index';
import Theme from './Theme';

import img1 from './assets/home/desktop/image-danche.png';
import img2 from './assets/home/desktop/image-gran-espresso.png';
import img3 from './assets/home/desktop/image-planalto.png';
import img4 from './assets/home/desktop/image-piccollo.png';
import img5 from './assets/home/desktop/image-hero-coffeepress.jpg';
import img6 from './assets/home/tablet/image-hero-coffeepress.jpg';
import img7 from './assets/home/mobile/image-hero-coffeepress.jpg';
import img8 from './assets/about/desktop/image-hero-whitecup.jpg';
import img9 from './assets/about/tablet/image-hero-whitecup.jpg';
import img10 from './assets/about/mobile/image-hero-whitecup.jpg';
import img11 from './assets/about/desktop/image-commitment.jpg';
import img12 from './assets/about/tablet/image-commitment.jpg';
import img13 from './assets/about/mobile/image-commitment.jpg';
import img14 from './assets/plan/desktop/bg-modal-top.png';
import img15 from './assets/plan/desktop/bg-order-summary.png';
import img16 from './assets/plan/desktop/bg-steps.png';
import img17 from './assets/plan/desktop/image-hero-blackcup.jpg';

const cacheImages = async srcArray => {
  const promises = await srcArray.map(src => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });
  await Promise.all(promises);
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17];
    cacheImages(imgs).then(() => setIsLoading(false));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Theme>
          <CssBaseline />
          <GlobalStyles styles={{ html: { fontSize: '62.5%' }, body: { backgroundColor: '#FEFCF7' }, scrollBehavior: 'smooth' }} />
          {isLoading ? (
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' minHeight='100vh'>
              <CircularProgress />
            </Box>
          ) : (
            <AppContainer />
          )}
        </Theme>
      </BrowserRouter>
    </>
  );
}

export default App;

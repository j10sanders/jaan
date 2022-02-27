import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden bg-black`}>
      {/* <div className={`relative bg-background bg-black`}> */}
      {/* <div className="max-w-7xl mx-auto bg-black"> */}
      {/* <div
          className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-black`}
        > */}
      {/* <div className=""> */}
      <Header />

      <MainHero />
      {/* </div> */}
      {/* </div> */}
      {/* <MainHeroImage /> */}
      {/* </div> */}
      <Canvas />
      {/* </div> */}

      {/* <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow> */}
      <LazyShow>
        <>
          {/* <Canvas /> */}
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;

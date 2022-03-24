import React, { useState } from 'react';

import About from '../components/About';
import Canvas from '../components/Canvas';
import { ContactUsForm } from '../components/ContactUsForm';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`grid gap-y-16 overflow-hidden bg-background`}>
      <div className={`relative h-screen`}>
        <Header setIsOpen={setIsOpen} />
        <ContactUsForm isOpen={isOpen} setIsOpen={setIsOpen} />

        <MainHero />
        <Canvas />
      </div>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
      {/* <Analytics /> */}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Jost', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default App;

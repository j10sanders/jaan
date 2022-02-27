import React, { useState } from 'react';

import { Dialog } from '@headlessui/react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`grid gap-y-16 overflow-hidden bg-black`}>
      {/* <div className={`relative bg-background bg-black`}> */}
      {/* <div className="max-w-7xl mx-auto bg-black"> */}
      {/* <div
          className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-black`}
        > */}
      {/* <div className=""> */}

      <Header setIsOpen={setIsOpen} />
      {/* <ContactUsForm isOpen={isOpen} /> */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="relative bg-white rounded max-w-sm mx-auto">
            <Dialog.Title>This will be a form</Dialog.Title>
            <Dialog.Description>No styling yet</Dialog.Description>

            <p>Styling</p>

            {/* <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button> */}
          </div>
        </div>
      </Dialog>

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

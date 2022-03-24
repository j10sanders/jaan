import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="flex justify-center items-center h-[calc(100%-200px)] text-center">
      <h1 className="text-4xl tracking-tight text-gray-400 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">{mainHero.title}</span>
      </h1>
    </main>
  );
};

export default MainHero;

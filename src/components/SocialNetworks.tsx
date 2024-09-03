import React from 'react';
import blueArrow from '/assets/illustrations/arrow_blue.svg';

const SocialNetworks: React.FC = () => (
  <div className="mt-12 xl:mt-20 mx-auto mr-auto flex flex-row max-w-[90%] xl:max-w-[50%] relative">
    <img src={blueArrow} className="w-auto h-4 xl:h-12 mr-4 mb-auto" alt="Decoration arrow"/>
    <div className="relative flex flex-col ">
      <div
        className="absolute top-2.5 xl:top-6 left-0 w-full h-4 xl:h-8 bg-primary-accent transform scale-x-100 origin-left opacity-70 z-0"
      />
      <a href="mailto:arthur.robine@gmail.com" className="relative z-10">
        <h1
          className="font-title text-primary-text leading-4 xl:leading-10 text-2xl xl:text-6xl font-bold -tracking-[0.05em] hover:cursor-pointer"
        >
          arthur.robine@gmail.com
        </h1>
      </a>
      <a href="https://www.linkedin.com/in/arthur-robine/" target="_blank" rel="noopener noreferrer"
         className="relative group w-min hover:cursor-pointer"
      >
        <h1 className="font-title text-primary-accent text-xl xl:text-4xl font-bold -tracking-[0.03em] mt-3 xl:mt-4">
          Linkedin
        </h1>
        <div
          className="absolute bottom-0 left-0 w-full h-1 bg-[#5e76a3] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
        />
      </a>
      <a href="https://github.com/arthurrbn" target="_blank" rel="noopener noreferrer"
         className="relative group w-min hover:cursor-pointer">
        <h1 className="font-title text-primary-accent text-xl xl:text-4xl font-bold -tracking-[0.03em] mt-0 xl:mt-2">
          GitHub
        </h1>
        <div
          className="absolute bottom-0 left-0 w-full h-1 bg-[#5e76a3] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
      </a>
    </div>
  </div>
);

export default SocialNetworks;

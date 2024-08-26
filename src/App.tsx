import React from 'react'
import dotCloud1 from '/assets/illustrations/dot_cloud_1.svg'
import dotCloud2 from '/assets/illustrations/dot_cloud_2.svg'
import flowers from '/assets/illustrations/flowers.png'
import planet from '/assets/illustrations/planet.svg'
import smiley from '/assets/illustrations/smiley.svg'
import './App.css'
import {useTranslation} from "react-i18next";
import HeaderLink from "./components/HeaderLink.tsx";
import TranslationTester from "./components/TranslationTester.tsx";
import Presentation from "./components/Presentation.tsx";
import SocialNetworks from "./components/SocialNetworks.tsx";
import Experiences from "./components/Experiences.tsx";
import SideIllustration from "./components/SideIllustration.tsx";
import ProjectDetails from "./components/ProjectDetails.tsx";
import decorationArrow from "/assets/illustrations/arrow_white.svg";

interface Illustration {
  path: string;
    styles?: string;
}

const illustrations: Illustration[] = [
  {
    path: dotCloud1,
    styles: 'top-10 left-10 max-w-[22%] h-auto'
  },
  {
    path: flowers,
    styles: 'top-[22%] right-[80px] max-w-[130px] -auto'
  },
  {
    path: dotCloud2,
    styles: 'top-[67%] right-10 max-w-[307px] h-auto'
  },
  {
    path: planet,
    styles: 'top-[80%] right-0 max-w-[30%] h-auto transform translate-x-1/3'
  },
  {
    path: smiley,
    styles: 'top-[93%] left-0 max-w-[20%] h-auto transform -translate-x-1/3'
  },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function App() {
  const {t} = useTranslation();

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {illustrations.map((item, index) => (
        <SideIllustration
          key={index}
          src={item.path}
          styles={item.styles}
        />
      ))}
      <div className="flex flex-row justify-end w-full pr-10 pt-10">
        <HeaderLink text={'experiences'}/>
        <HeaderLink text={'my_projects'}/>
      </div>
      <Presentation/>
      <h1 className="text-primary-text text-3xl font-medium -tracking-[0.03em] w-[75%] text-justify mx-auto my-20">
        {t('presentation_description')}
      </h1>
      <SocialNetworks/>
      <Experiences/>
      <ProjectDetails
        name={t('calendify-title')}
        description={t('calendify-description')}
        tags={t('calendify-tags', {returnObjects: true})}
        carouselURLs={["/assets/calendify/calendify-1.png", "/assets/calendify/calendify-2.png", "/assets/calendify/calendify-3.png", "/assets/calendify/calendify-4.png"]}
      />
      <div className="my-20 flex flex-row justify-center">
        <TranslationTester/>
      </div>
      <img
        src={decorationArrow}
        className="absolute bottom-10 right-10 w-10 h-auto cursor-pointer transform -rotate-[135deg] hover:scale-125 transition-transform duration-300"
        alt="Scroll to top"
        onClick={scrollToTop}
      />
    </div>
  )
}

export default App

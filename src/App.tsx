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
    styles: 'top-5 lg:top-10 left-5 lg:left-10 max-w-[19%] md:max-w-[22%] h-auto'
  },
  {
    path: flowers,
    styles: 'top-[14%] sm:top-[18%] xl:top-[22%] right-[30px] md:right-[80px] max-w-[50px] sm:max-w-[80px] md:max-w-[130px] -auto'
  },
  {
    path: dotCloud2,
    styles: 'hidden lg:block top-[65%] xl:top-[68%] right-2 lg:right-5 xl:right-10 max-w-[207px] xl:max-w-[307px] h-auto'
  },
  {
    path: planet,
    styles: 'top-[90%] sm:top-[85%] md:top-[80%] right-0 max-w-[30%] h-auto transform translate-x-1/3'
  },
  {
    path: smiley,
    styles: 'top-[97%] sm:top-[93%] left-0 max-w-[20%] h-auto transform -translate-x-1/3'
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
      <div className="flex flex-row justify-end w-full pr-5 xl:pr-10 pt-5 xl:pt-10">
        <HeaderLink text={'experiences'}/>
        <HeaderLink text={'my_projects'}/>
      </div>
      <Presentation/>

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

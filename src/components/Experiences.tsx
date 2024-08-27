import React from 'react';
import {useTranslation} from 'react-i18next';
import decorationArrow from '/assets/illustrations/arrow_white.svg';
import ExperienceItem from "./ExperienceItem.tsx";

const Experiences: React.FC = () => {
  const {t} = useTranslation();

  return (
    <div className="relative mt-16 xl:mt-32 ml-auto xl:ml-[90px] mr-auto flex flex-col max-w-[90%] xl:max-w-[70%]">
      <div className="flex flex-row">
        <img
          src={decorationArrow}
          className="w-auto h-4 xl:h-10 mr-4 mb-auto transform -rotate-90"
          alt="Decoration arrow"
        />
        <h1
          className="font-title text-primary-text text-2xl xl:text-5xl leading-4 xl:leading-10 font-medium -tracking-[0.03em] mb-8 xl:mb-12">
          {t('experiences')}
        </h1>
      </div>
      <div className="relative flex flex-col ml-2 xl:ml-16">
        <div className="absolute left-0 xl:left-2 top-0 w-0.5 xl:w-1 bg-white z-0 rounded h-[calc(100%-80px)]"/>

        <ExperienceItem
          date={`${t('apr')} 2024 - ${t('currently')}`}
          details={t('teaching-assistant-description')}
          tags={t('teaching-assistant-tags', {returnObjects: true})}
        />

        <ExperienceItem
          date={`${t('sep')} 2023 - ${t('feb')} 2024`}
          details={t('yanport-description')}
          tags={t('yanport-tags', {returnObjects: true})}
        />
        <ExperienceItem
          date={`${t('apr')} 2022 - ${t('aug')} 2022`}
          details={t('cypios-description')}
          tags={t('cypios-tags', {returnObjects: true})}
        />

        <ExperienceItem
          date={`${t('nov')} 2021 - ${t('jan')} 2022`}
          details={t('epita-description')}
          tags={t('epita-tags', {returnObjects: true})}
        />

        <ExperienceItem
          date={`${t('sep')} 2021 - ${t('mar')} 2022`}
          details={t('epitech-description')}
          tags={t('epitech-tags', {returnObjects: true})}
        />

        <ExperienceItem
          date={`${t('nov')} 2020 - ${t('dec')} 2020`}
          details={t('chrome-finance-description')}
          tags={t('chrome-finance-tags', {returnObjects: true})}
        />

        <ExperienceItem
          date={`${t('sep')} 2020 - ${t('nov')} 2020`}
          details={t('numendo-description')}
          tags={t('numendo-tags', {returnObjects: true})}
        />
      </div>
    </div>
  );
};

export default Experiences;

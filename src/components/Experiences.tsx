import React from 'react';
import { useTranslation } from 'react-i18next';
import decorationArrow from '/assets/illustrations/arrow_white.svg';
import ExperienceItem from "./ExperienceItem.tsx";
import Tag from "./Tag.tsx";

const Experiences: React.FC = () => {
  const {t} = useTranslation();

  return (
    <div className="relative mt-32 ml-[90px] mr-auto flex flex-row max-w-[70%]">
      <img src={decorationArrow} className="w-auto h-10 mr-4 mb-auto transform -rotate-90" alt="Decoration arrow"/>
      <div className="flex flex-col">
        <h1 className="font-title text-primary-text text-5xl font-medium -tracking-[0.03em] mb-12">{t('experiences')}</h1>
        <div className="relative">
          <div className="absolute left-2 top-0 w-1 bg-white z-0 rounded" style={{ height: 'calc(100% - 80px)' }}></div>

          {/* Experience Items */}
          <ExperienceItem
            date={`${t('apr')} 2024 - Currently`}
            details={t('teaching-assistant-description')}
            tags={t('teaching-assistant-tags', { returnObjects: true })}
          />

          <ExperienceItem
            date={`${t('sep')} 2023 - ${t('feb')} 2024`}
            details={t('yanport-description')}
            tags={t('yanport-tags', { returnObjects: true })}
          />
          <ExperienceItem
            date={`${t('apr')} 2022 - ${t('aug')} 2022`}
            details={t('cypios-description')}
            tags={t('cypios-tags', { returnObjects: true })}
          />

          <ExperienceItem
            date={`${t('nov')} 2021 - ${t('jan')} 2022`}
            details={t('epita-description')}
            tags={t('epita-tags', { returnObjects: true })}
          />

          <ExperienceItem
            date={`${t('sep')} 2021 - ${t('mar')} 2022`}
            details={t('epitech-description')}
            tags={t('epitech-tags', { returnObjects: true })}
          />

          <ExperienceItem
            date={`${t('nov')} 2020 - ${t('dec')} 2020`}
            details={t('chrome-finance-description')}
            tags={t('chrome-finance-tags', { returnObjects: true })}
          />

          <ExperienceItem
            date={`${t('sep')} 2020 - ${t('nov')} 2020`}
            details={t('numendo-description')}
            tags={t('numendo-tags', { returnObjects: true })}
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;

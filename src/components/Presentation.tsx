import React from 'react';
import { useTranslation } from 'react-i18next';
import decorationArrow from '/assets/illustrations/arrow_white.svg';

const Presentation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative mt-20 ml-[290px] mr-auto flex flex-row max-w-[50%]">
      <img src={decorationArrow} className="w-auto h-20 mr-4 mb-auto" alt="Decoration arrow" />
      <div className="flex flex-col">
        <h1 className="font-title text-primary-text text-6xl font-bold -tracking-[0.05em]">{t('presentation')}</h1>
        <h1 className="font-title text-primary-text text-5xl font-medium -tracking-[0.03em]">{t('presentation_role')}</h1>
        <h1 className="text-primary-accent text-3xl font-medium -tracking-[0.03em] mt-5">
          {t('presentation_text')}
        </h1>
      </div>
    </div>
  );
};

export default Presentation;

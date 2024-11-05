import React from 'react';
import {Trans, useTranslation} from 'react-i18next';
import decorationArrow from '/assets/illustrations/arrow_white.svg';
import {Helmet} from "react-helmet-async";
import {generatePersonJSONLD} from "../utils/StructuredData.ts";

const Presentation: React.FC = () => {
  const {t} = useTranslation();

  const jsonLD = generatePersonJSONLD(
    t('presentation'),
    t('presentation_role'),
    t('presentation_text')
  );

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLD)}
        </script>
      </Helmet>
      <div className="relative mt-20 ml-5 sm:ml-5 md:ml-[19%] mr-auto flex flex-row max-w-[90%] xl:max-w-[50%] z-0">
        <img
          src={decorationArrow}
          className="w-auto h-4 sm:h-12 xl:h-20 mr-2 sm:mr-4 mb-auto"
          alt={t('decoration_arrow')}
        />
        <div className="flex flex-col">
          <h2
            className="uppercase font-title text-primary-text leading-4 sm:leading-10 text-xl sm:text-4xl xl:text-6xl font-bold -tracking-[0.05em] text-nowrap"
          >
            {t('presentation')}
          </h2>
          <h3
            className="uppercase font-title text-primary-text text-lg sm:text-3xl xl:text-5xl font-medium -tracking-[0.03em]"
          >
            {t('presentation_role')}
          </h3>
          <p
            className="text-primary-accent text-base sm:text-2xl xl:text-3xl font-medium -tracking-[0.03em] pr-0 sm:pr-8 xl:pr-0 mt-0 sm:mt-5"
          >
            {t('presentation_text')}
          </p>
        </div>
      </div>
      <p
        className="translated-text text-primary-text text-base sm:text-2xl xl:text-3xl font-medium w-[90%] xl:w-[75%] text-justify mx-auto my-8 xl:my-20">
        <Trans i18nKey='presentation_description'/>
      </p>
    </>
  );
};

export default Presentation;

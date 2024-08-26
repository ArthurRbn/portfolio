import React from 'react';
import { useTranslation } from 'react-i18next';
import redirectArrow from '/assets/illustrations/arrow_blue.svg';

interface HeaderLinkProps {
  text: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ text }) => {
  const { t } = useTranslation();

  return (
    <div className="relative ml-10 flex flex-row group hover:cursor-pointer">
      <img src={redirectArrow} className="w-7 h-auto mr-3" alt="Redirect arrow" />
      <div className="relative">
        <span className="font-title text-primary-accent text-4xl font-normal -tracking-[0.03em]">{t(text)}</span>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#5e76a3] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
      </div>
    </div>
  );
};

export default HeaderLink;

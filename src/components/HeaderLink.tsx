import React from 'react';
import { useTranslation } from 'react-i18next';
import redirectArrow from '/assets/illustrations/arrow_blue.svg';

interface HeaderLinkProps {
  text: string;
  targetId: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ text, targetId }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  };

  return (
    <a onClick={handleClick} className="relative ml-2 sm:ml-5 lg:ml-10 flex flex-row items-center group hover:cursor-pointer">
      <img src={redirectArrow} className="w-3 sm:w-5 xl:w-7 h-fit mr-1.5 sm:mr-3" alt="Redirect arrow" />
      <div className="relative flex">
        <span className="font-normal font-title text-primary-accent leading-3 text-sm sm:leading-4 sm:text-2xl xl:leading-8 xl:text-4xl -tracking-[0.03em]">{t(text)}</span>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#5e76a3] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
      </div>
    </a>
  );
};

export default HeaderLink;

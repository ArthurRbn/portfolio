import React from 'react';
import {useTranslation} from 'react-i18next';

const MyComponent: React.FC = () => {
  const {i18n} = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className="mx-10" onClick={() => changeLanguage('en')}>English</button>
      <button className="mx-10" onClick={() => changeLanguage('fr')}>Français</button>
    </div>
  );
};

export default MyComponent;

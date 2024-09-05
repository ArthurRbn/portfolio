import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import App from './App';

const LanguageWrapper: React.FC = () => {
  const { i18n } = useTranslation();
  const { lng } = useParams<{ lng: string }>();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return <App />;
};

const MainRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/:lng" element={<LanguageWrapper />} />
      <Route path="/" element={<Navigate replace to="/fr" />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  </Router>
);

export default MainRouter;

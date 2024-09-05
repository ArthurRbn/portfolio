import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n';
import {HelmetProvider} from "react-helmet-async";
import MainRouter from "./MainRouter.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <MainRouter/>
    </HelmetProvider>
  </StrictMode>,
)

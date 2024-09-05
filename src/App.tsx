import dotCloud1 from '/assets/illustrations/dot_cloud_1.svg'
import dotCloud2 from '/assets/illustrations/dot_cloud_2.svg'
import flowers from '/assets/illustrations/flowers.png'
import planet from '/assets/illustrations/planet.svg'
import './App.css'
import {useTranslation} from "react-i18next";
import HeaderLink from "./components/HeaderLink.tsx";
import Presentation from "./components/Presentation.tsx";
import SocialNetworks from "./components/SocialNetworks.tsx";
import Experiences from "./components/Experiences.tsx";
import SideIllustration from "./components/SideIllustration.tsx";
import ProjectDetails from "./components/ProjectDetails.tsx";
import decorationArrow from "/assets/illustrations/arrow_white.svg";
import LanguageSelector from "./components/LanguageSelector.tsx";
import {Helmet} from "react-helmet-async";
import {generateWebPageJSONLD} from "./utils/StructuredData.ts";

interface Illustration {
  path: string;
  styles?: string;
}

const illustrations: Illustration[] = [
  {
    path: dotCloud1,
    styles: 'top-5 md:top-10 left-5 md:left-10 max-w-[19%] md:max-w-[22%] 2xl:max-w-[15%] h-auto'
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
    styles: 'top-[97%] sm:top-[93%] left-0 max-w-[20%] h-auto transform -translate-x-1/3'
  },
];

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

function App() {
  const {t} = useTranslation();

  const jsonLD = generateWebPageJSONLD(
    `${t("presentation")} - ${t("presentation_role")}`,
    t("presentation_text"),
    "https://arthurrobine.fr",
    "/path-to-image.jpg"
  );

  return (
    <div className="relative w-full  min-h-screen overflow-hidden mx-auto">
      <Helmet>
        <title>{`Arthur Robine - ${t("presentation_role")}`}</title>
        <meta
          name="description"
          content={`${t("presentation")} ${t("presentation_role")} ${t("presentation_text")}`}
        />
        <meta
          name="keywords"
          content="Fullstack Developer, Portfolio, Arthur Robine, React, SEO, Web Development"
        />
        <meta name="author" content="Arthur Robine"/>
        <link rel="canonical" href="https://arthurrobine.fr"/>
        <link rel="alternate" href="https://arthurrobine.fr/en" hrefLang="en"/>
        <link rel="alternate" href="https://arthurrobine.fr/fr" hrefLang="fr"/>
        <link rel="alternate" href="https://arthurrobine.fr" hrefLang="x-default"/>

        <meta property="og:title" content={`${t("presentation")} - ${t("presentation_role")}`}/>
        <meta property="og:description" content={t("presentation_text")}/>
        <meta property="og:image" content={dotCloud1}/>
        <meta property="og:url" content="https://arthurrobine.fr"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={`${t("presentation")} - ${t("presentation_role")}`}/>
        <meta name="twitter:description" content={t("presentation_text")}/>
        <meta name="twitter:image" content={dotCloud1}/>

        <script type="application/ld+json">
          {JSON.stringify(jsonLD)}
        </script>
      </Helmet>

      {illustrations.map((item, index) => (
        <SideIllustration
          key={index}
          src={item.path}
          styles={item.styles ?? ''}
        />
      ))}

      <div className="flex flex-row justify-end w-full pr-5 md:pr-10 pt-5 md:pt-10">
        <HeaderLink text={'experiences'} targetId={"experiences-section"}/>
        <HeaderLink text={'my_projects'} targetId={"projects-section"}/>
        <LanguageSelector/>
      </div>

      <Presentation/>
      <SocialNetworks/>
      <Experiences/>

      <div id="projects-section">
        <ProjectDetails
          name={t('calendify-title')}
          description={t('calendify-description')}
          tags={t('calendify-tags', {returnObjects: true})}
          carouselURLs={["/assets/calendify/calendify-1.png", "/assets/calendify/calendify-2.png", "/assets/calendify/calendify-3.png", "/assets/calendify/calendify-4.png"]}
          siteUrl={"https://calendify.arthurrobine.fr"}
          githubUrl={"https://github.com/ArthurRbn/Calendify"}
        />
      </div>

      <img
        src={decorationArrow}
        className="absolute bottom-5 xl:bottom-10 right-5 xl:right-10 w-5 xl:w-10 h-auto cursor-pointer transform -rotate-[135deg] hover:scale-125 transition-transform duration-300"
        alt="Scroll to top"
        onClick={scrollToTop}
      />
    </div>
  )
}

export default App

import React, { useState } from "react";
import Slider from "react-slick";
import decorationArrow from "/assets/illustrations/arrow_white.svg";
import Tag from "./Tag.tsx";
import {Helmet} from "react-helmet-async";
import "../style/Slider.css";
import { useTranslation, Trans } from "react-i18next";
import Modal from "react-modal";
import {generateProjectJSONLD} from "../utils/StructuredData.ts";

interface ProjectDetailsProps {
  name: string;
  description: string;
  tags: string[];
  carouselURLs: string[];
  siteUrl: string;
  githubUrl: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = (
  {
    name,
    description,
    tags,
    carouselURLs,
    siteUrl,
    githubUrl,
  }
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentIndex(null);
  };

  const showNextImage = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) =>
        (prevIndex === carouselURLs.length - 1 || prevIndex === null) ? 0 : prevIndex + 1
      );
    }
  };

  const showPrevImage = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) =>
        (prevIndex === 0 || prevIndex === null) ? carouselURLs.length - 1 : prevIndex - 1
      );
    }
  };

  const jsonLD = generateProjectJSONLD(
    name,
    description,
    siteUrl,
    githubUrl,
    carouselURLs[0]
  );

  return (
    <div className="relative p-0 xl:p-10 max-w-[90%] xl:max-w-[75%] ml-auto xl:ml-24 mr-auto mt-8 xl:mt-20">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLD)}
        </script>
      </Helmet>

      <div className="flex flex-col items-start">
        <div className="flex flex-row items-start">
          <img
            src={decorationArrow}
            className="w-4 xl:w-10 h-auto mr-3"
            alt="Redirect arrow"
          />
          <h1 className="font-title text-primary-text text-2xl xl:text-5xl leading-4 xl:leading-10 font-bold mb-4">
            {name}
          </h1>
        </div>
        <div className="ml-2 xl:ml-6 relative flex flex-row items-start w-[80vw]">
          <p className="ml-7 xl:ml-8 text-primary-text text-lg text-justify">
            <Trans>
              {description}
            </Trans>
          </p>
          <div className="absolute left-0 top-0 bottom-0 w-2 xl:w-4 bg-primary-accent"/>
        </div>
      </div>

      <div className="flex flex-row justify-start flex-wrap mt-3 ml-5">
        {tags.map((tag, index) => (
          <div
            className="bg-secondary-dark text-primary-accent text-sm rounded-full"
            key={index}
          >
            <Tag text={tag}/>
          </div>
        ))}
      </div>

      <div className="mt-1 text-center">
        <p className="text-primary-text">
          <Trans i18nKey="project-details-visit"/>
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            <Trans i18nKey="project-details-website">website</Trans>
          </a>{" "}
          {t('and') + " "}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </p>
      </div>

      <div className="mt-3 mb-8 w-[70%] mx-auto">
        <Slider
          dots
          infinite
        >
          {carouselURLs.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt={`${name} illustration ${index + 1}`}
                className="w-full h-auto cursor-pointer"
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </Slider>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "none",
            border: "none",
            overflow: "visible",
            width: "80%",
            maxWidth: "600px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 50,
          },
        }}
      >
        {currentIndex !== null && (
          <div className="relative">
            <img
              src={carouselURLs[currentIndex]}
              alt={`${name} illustration enlarged view ${currentIndex + 1}`}
              className="w-full h-auto"
            />
            <button
              onClick={showPrevImage}
              className="absolute top-1/2 -left-8 transform -translate-y-1/2 text-white text-2xl p-2"
            >
              ❮
            </button>
            <button
              onClick={showNextImage}
              className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-white text-2xl p-2"
            >
              ❯
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ProjectDetails;

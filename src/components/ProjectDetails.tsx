import React, { useState } from 'react';
import Slider from "react-slick";
import Modal from 'react-modal';
import decorationArrow from "/assets/illustrations/arrow_white.svg";
import Tag from "./Tag.tsx";
import { useTranslation } from "react-i18next";

interface ProjectDetailsProps {
  name: string;
  description: string;
  tags: string[];
  carouselURLs: string[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ name, description, tags, carouselURLs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="relative p-10 max-w-[75%] ml-24 mr-auto mt-20">
      <div className="flex flex-col items-start">
        <div className="flex flex-row items-start">
          <img src={decorationArrow} className="w-10 h-auto mr-3" alt="Redirect arrow" />
          <h1 className="font-title text-primary-text text-5xl font-bold mb-4">{name}</h1>
        </div>
        <div className="ml-6 relative flex flex-row items-start">
          <p className="ml-8 text-primary-text text-lg">{description}</p>
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-primary-accent"></div>
        </div>
      </div>

      <div className="my-12 w-[70%] mx-auto">
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {carouselURLs.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-auto cursor-pointer"
                onClick={() => openModal(url)}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex flex-row justify-center space-x-4">
        {tags.map((tag, index) => (
          <div className="bg-secondary-dark text-primary-accent text-sm rounded-full px-3 py-1" key={index}>
            <Tag text={tag}/>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 'none',
            border: 'none',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        {currentImage && (
          <div>
            <img
              src={currentImage}
              alt="Enlarged view"
              className="w-full h-auto max-w-screen-lg mx-auto"
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-white text-xl p-4"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ProjectDetails;

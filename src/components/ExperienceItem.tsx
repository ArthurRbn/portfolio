import React from 'react';
import Tag from "./Tag.tsx";
import {Trans} from "react-i18next";

const ExperienceItem: React.FC<{ date: string, details: string, tags: string[] }> = ({ date, details, tags }) => {
  return (
    <div className="relative flex flex-row items-start mb-10">
      <div className="absolute -left-[5px] xl:left-0.5 w-3 xl:w-4 h-3 xl:h-4 rounded-full bg-white mb-4 mt-2 xl:mt-3 z-10"></div>
      <div className="flex flex-col items-start">
        <h2 className="font-title text-primary-accent text-xl xl:text-4xl font-bold ml-5 xl:ml-10">
          {date}
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="ml-7 xl:ml-14 mt-1 w-[75vw] xl:w-[50vw] text-justify">
            <p className="translated-text text-primary-text text-md xl:text-lg">
              <Trans>
                {details}
              </Trans>
            </p>
          </div>
          <div className="flex flex-row flex-wrap content-start w-[80vw] xl:w-[30vw] mt-2 ml-7 xl:ml-2">
            {
              tags.map((tag: string, index) => <Tag key={index} text={tag}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;

import React from 'react';
import Tag from "./Tag.tsx";

const ExperienceItem: React.FC<{ date: string, details: string, tags: string[] }> = ({ date, details, tags }) => {
  return (
    <div className="relative flex flex-row items-start mb-10">
      <div className="absolute left-0.5 w-4 h-4 rounded-full bg-white mb-4 mt-3 z-10"></div>
      <div className="flex flex-col items-start">
        <h2 className="font-title text-primary-accent text-4xl font-bold ml-10">
          {date}
        </h2>
        <div className="flex flex-row">
          <div className="ml-14 w-[50vw] text-justify">
            <p className="text-primary-text text-lg">{details}</p>
          </div>
          <div className="flex flex-row flex-wrap content-start w-[30vw] mt-2 ml-2">
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

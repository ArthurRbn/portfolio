const Tag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-secondary text-secondary-text font-title font-bold py-1 px-4 xl:px-7 text-xs xl:text-sm rounded-full mx-1 mb-2 inline-block h-min">
      {text}
    </div>
  );
};


export default Tag;

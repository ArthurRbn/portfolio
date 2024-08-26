const Tag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-secondary text-secondary-text font-title font-bold py-1 px-7 text-sm rounded-full mx-1 mb-2 inline-block h-min">
      {text}
    </div>
  );
};


export default Tag;

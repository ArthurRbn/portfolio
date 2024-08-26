import React from 'react';

interface SideIllustrationProps {
  src: string;
  styles: string;
}

const SideIllustration: React.FC<SideIllustrationProps> = ({ src, styles }) => {

  return (
    <img
      src={src}
      className={'absolute ' + ' ' + styles}
      alt="Illustration"
    />
  );
};

export default SideIllustration;

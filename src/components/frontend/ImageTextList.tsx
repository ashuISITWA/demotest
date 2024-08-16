import React from 'react';

// Define the interface for the items prop
interface ImgItem {
  imageUrl: string;
  text: string;
}

// Define the props interface for ImageTextList
interface ImageTextListProps {
  imgitems: ImgItem[];
}

const ImageTextList: React.FC<ImageTextListProps> = ({ imgitems }) => {
  return (
    <>
      {imgitems.map((item, index) => (
        <div className="flex items-center gap-2" key={index}>
          <div className="flex-shrink-0">
            <img src={item.imageUrl} alt={item.text} />
          </div>
          <div className="flex-grow-1">
            <h5 className="text-[14px] text-black dark:text-white">{item.text}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default ImageTextList;

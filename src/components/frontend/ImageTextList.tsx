import React from 'react'

// Define the interface for the items prop
interface ImgItem {
  imageUrl: string
  text: string
}

// Define the props interface for ImageTextList
interface ImageTextListProps {
  imgitems: ImgItem[]
}

const ImageTextList: React.FC<ImageTextListProps> = ({ imgitems }) => {
  return (
    <>
      {imgitems.map((item, index) => (
        <div className="flex items-center gap-[10px]" key={index}>
          <div className="flex-shrink-0">
            <div className="aspect-square w-[20px]">
              <img src={item.imageUrl} alt={item.text} className="w-full" />
            </div>
          </div>
          <div className="flex-grow-1">
            <h5 className="text-[14px] text-[#000] dark:text-white">{item.text}</h5>
          </div>
        </div>
      ))}
    </>
  )
}

export default ImageTextList

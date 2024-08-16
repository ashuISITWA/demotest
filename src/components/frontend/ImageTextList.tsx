const ImageTextList = ({ imgitems }) => {
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
  )
}

export default ImageTextList

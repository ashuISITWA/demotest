import Link from 'next/link'
const DropLinks = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Link href={item.link} className="flex gap-2"  key={index}>
          <div className="flex-shrink-0">
            <div className="inline-block h-[15px] w-[15px] rounded-full">
              <img src={item.imageUrl} alt={item.text} />
            </div>
          </div>
          <div className="flex-grow-1 flex flex-col">
            <h3 className="text-[14px] text-black dark:text-white">{item.title}</h3>
            <h4 className="text-[14px] text-slate-400">{item.text}</h4>
          </div>
        </Link>
      ))}
    </>
  )
}

export default DropLinks

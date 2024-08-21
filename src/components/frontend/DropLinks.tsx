import Link from 'next/link';

// Define the interface for the items prop
interface Item {
  link: string;
  imageUrl: string;
  text: string;
  title: string;
}

// Define the props interface for DropLinks
interface DropLinksProps {
  items: Item[];
}

const DropLinks: React.FC<DropLinksProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Link href={item.link} className="flex gap-2 hover:bg-[#f2f2f5] dark:hover:bg-slate-900 rounded-md p-[10px]" key={index}>
          <div className="flex gap-2">
            <div className="flex-shrink-0">
              <div className="inline-block h-[20px] w-[20px] rounded-full">
                <img src={item.imageUrl} alt={item.text} className='w-full' />
              </div>
            </div>
            <div className="flex-grow-1 flex flex-col">
              <h3 className="text-[14px] text-[#000] dark:text-white">{item.title}</h3>
              <h4 className="text-[14px] text-[#5b5e61] dark:text-[#b1b1b1]">{item.text}</h4>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default DropLinks;

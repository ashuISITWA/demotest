import Link from 'next/link';
import { IconStarFilled } from '@tabler/icons-react';

// Define the interface for the items prop
interface ProductItem {
  imageUrl: string;
  tag: string;
  title: string;
  des: string;
  person: string;
  pername: string;
  reviews: string;
  price: number | string;
  totalprice: number | string;
}

// Define the props interface for ProductBlock
interface ProductBlockProps {
  items: ProductItem[];
}

const ProductBlock: React.FC<ProductBlockProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div className="col-span-1" key={index}>
          <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-500 dark:bg-slate-900">
            <div className="block h-[200px]">
              <img src={item.imageUrl} alt={item.title} className="inline-block h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-[10px] p-[15px]">
              <Link href="/">
                <a>
                  <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">{item.tag}</h6>
                </a>
              </Link>
              <Link href="/">
                <a className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                  {item.title}
                </a>
              </Link>
              <p className="text-[14px] leading-[20px] text-slate-400 line-clamp-2">{item.des}</p>
              <Link href="/">
                <a className="flex items-center gap-[15px]">
                  <div className="flex-shrink-0">
                    <img
                      src={item.person}
                      alt={item.pername}
                      className="inline-block h-[28px] w-[28px] rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <p className="text-[14px] italic leading-[20px] text-black dark:text-white">by {item.pername}</p>
                  </div>
                </a>
              </Link>
              <div className="flex items-center gap-[10px]">
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <IconStarFilled className="w-[20px] fill-[#FFC32B]" />
                    <IconStarFilled className="w-[20px] fill-[#FFC32B]" />
                    <IconStarFilled className="w-[20px] fill-[#FFC32B]" />
                    <IconStarFilled className="w-[20px] fill-[#FFC32B]" />
                    <IconStarFilled className="w-[20px] fill-[#FFC32B]" />
                  </div>
                </div>
                <div className="flex-grow-12">
                  <p className="text-[14px] leading-[20px] text-black dark:text-white">{item.reviews}</p>
                </div>
              </div>
              <h6 className="text-[16px] font-semibold text-black dark:text-white">
                ${item.price} <span className="font-normal italic line-through">${item.totalprice}</span>
              </h6>
              <Link href="/">
                <a className="inline-block rounded-lg bg-black py-[8px] text-center text-white hover:bg-[#222] dark:bg-white dark:text-black dark:hover:bg-[#cfcfcf]">
                  Buy Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductBlock;

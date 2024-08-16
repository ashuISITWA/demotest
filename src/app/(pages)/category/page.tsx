'use client'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconMail, IconStarFilled } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../../components/frontend/footer'
import Header from '../../../components/frontend/header'
import p1 from '../../../images/logos/img.jpg'
import logo from '../../../images/logos/logo.png'

const Page = () => {
  return (
    <>
      <Header />
      <section className="block bg-white py-[100px] dark:bg-black">
        <div className="container px-[15px] mx-auto">
          <div className="mx-auto flex flex-col gap-[25px] text-center md:w-[800px]">
            <Image src={logo} alt="image" className="mx-auto h-[80px] w-[80px] rounded-full object-cover" />
            <div className="flex flex-col gap-[10px]">
              <h4 className="mx-auto text-[16px] leading-[20px] text-black dark:text-white">Category name</h4>
              {/* <h4 className="mx-auto text-[14px] leading-[20px] text-slate-400">Web Designer</h4> */}
            </div>
      

            <h1 className="text-[30px] font-bold leading-[32px] text-black dark:text-white">
              Cillum irure laboris occaecat labore. Consectetur pariatur commodo quis.
            </h1>
            <p className="text-[16px] leading-[20px] text-slate-400">
              Proident non occaecat dolore veniam excepteur. Est dolor consequat et nulla. Sint non sit nulla laboris
              est officia elit do. Dolor irure qui consequat excepteur elit.
            </p>
          </div>
        </div>
      </section>
      <section className="block bg-white py-[60px] dark:bg-black">
        <div className="container px-[15px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
            <div className="col-span-1">
              <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-500 dark:bg-slate-900">
                <div className="block h-[200px]">
                  <Image src={p1} alt="image" className="inline-block h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-[10px] p-[15px]">
                  <Link href="/">
                    <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">Featured</h6>
                  </Link>
                  <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                    Main Heading Link
                  </Link>
                  <p className="text-[14px] leading-[20px] text-slate-400">
                    Cupidatat ex non id eiusmod id reprehenderit ad incididunt.
                  </p>
                  <Link href="/" className="flex items-center gap-[15px]">
                    <div className="flex-shrink-0">
                      <Image
                        src={p1}
                        alt="image"
                        className="inline-block h-[28px] w-[28px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-[14px] italic leading-[20px] text-black dark:text-white">by Rohit</p>
                    </div>
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
                      <p className="text-[14px] leading-[20px] text-black dark:text-white">5 Reviews</p>
                    </div>
                  </div>
                  <h6 className="text-[16px] font-semibold text-black dark:text-white">
                    $ 79.00 <span className="font-normal italic line-through">$ 100.99</span>
                  </h6>
                  <Link
                    href="/"
                    className="inline-block rounded-lg bg-black py-[8px] text-center text-white hover:bg-[#222] dark:bg-white dark:text-black dark:hover:bg-[#cfcfcf]"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-500 dark:bg-slate-900">
                <div className="block h-[200px]">
                  <Image src={p1} alt="image" className="inline-block h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-[10px] p-[15px]">
                  <Link href="/">
                    <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">Featured</h6>
                  </Link>
                  <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                    Main Heading Link
                  </Link>
                  <p className="text-[14px] leading-[20px] text-slate-400">
                    Cupidatat ex non id eiusmod id reprehenderit ad incididunt.
                  </p>
                  <Link href="/" className="flex items-center gap-[15px]">
                    <div className="flex-shrink-0">
                      <Image
                        src={p1}
                        alt="image"
                        className="inline-block h-[28px] w-[28px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-[14px] italic leading-[20px] text-black dark:text-white">by Rohit</p>
                    </div>
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
                      <p className="text-[14px] leading-[20px] text-black dark:text-white">5 Reviews</p>
                    </div>
                  </div>
                  <h6 className="text-[16px] font-semibold text-black dark:text-white">
                    $ 79.00 <span className="font-normal italic line-through">$ 100.99</span>
                  </h6>
                  <Link
                    href="/"
                    className="inline-block rounded-lg bg-black py-[8px] text-center text-white hover:bg-[#222] dark:bg-white dark:text-black dark:hover:bg-[#cfcfcf]"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-500 dark:bg-slate-900">
                <div className="block h-[200px]">
                  <Image src={p1} alt="image" className="inline-block h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-[10px] p-[15px]">
                  <Link href="/">
                    <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">Featured</h6>
                  </Link>
                  <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                    Main Heading Link
                  </Link>
                  <p className="text-[14px] leading-[20px] text-slate-400">
                    Cupidatat ex non id eiusmod id reprehenderit ad incididunt.
                  </p>
                  <Link href="/" className="flex items-center gap-[15px]">
                    <div className="flex-shrink-0">
                      <Image
                        src={p1}
                        alt="image"
                        className="inline-block h-[28px] w-[28px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-[14px] italic leading-[20px] text-black dark:text-white">by Rohit</p>
                    </div>
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
                      <p className="text-[14px] leading-[20px] text-black dark:text-white">5 Reviews</p>
                    </div>
                  </div>
                  <h6 className="text-[16px] font-semibold text-black dark:text-white">
                    $ 79.00 <span className="font-normal italic line-through">$ 100.99</span>
                  </h6>
                  <Link
                    href="/"
                    className="inline-block rounded-lg bg-black py-[8px] text-center text-white hover:bg-[#222] dark:bg-white dark:text-black dark:hover:bg-[#cfcfcf]"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-500 dark:bg-slate-900">
                <div className="block h-[200px]">
                  <Image src={p1} alt="image" className="inline-block h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-[10px] p-[15px]">
                  <Link href="/">
                    <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">Featured</h6>
                  </Link>
                  <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                    Main Heading Link
                  </Link>
                  <p className="text-[14px] leading-[20px] text-slate-400">
                    Cupidatat ex non id eiusmod id reprehenderit ad incididunt.
                  </p>
                  <Link href="/" className="flex items-center gap-[15px]">
                    <div className="flex-shrink-0">
                      <Image
                        src={p1}
                        alt="image"
                        className="inline-block h-[28px] w-[28px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-[14px] italic leading-[20px] text-black dark:text-white">by Rohit</p>
                    </div>
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
                      <p className="text-[14px] leading-[20px] text-black dark:text-white">5 Reviews</p>
                    </div>
                  </div>
                  <h6 className="text-[16px] font-semibold text-black dark:text-white">
                    $ 79.00 <span className="font-normal italic line-through">$ 100.99</span>
                  </h6>
                  <Link
                    href="/"
                    className="inline-block rounded-lg bg-black py-[8px] text-center text-white hover:bg-[#222] dark:bg-white dark:text-black dark:hover:bg-[#cfcfcf]"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-500 dark:bg-slate-900">
                <div className="block h-[200px]">
                  <Image src={p1} alt="image" className="inline-block h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-[10px] p-[15px]">
                  <Link href="/">
                    <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">Featured</h6>
                  </Link>
                  <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                    Main Heading Link
                  </Link>
                  <p className="text-[14px] leading-[20px] text-slate-400">
                    Cupidatat ex non id eiusmod id reprehenderit ad incididunt.
                  </p>
                  <Link href="/" className="flex items-center gap-[15px]">
                    <div className="flex-shrink-0">
                      <Image
                        src={p1}
                        alt="image"
                        className="inline-block h-[28px] w-[28px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-[14px] italic leading-[20px] text-black dark:text-white">by Rohit</p>
                    </div>
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
                      <p className="text-[14px] leading-[20px] text-black dark:text-white">5 Reviews</p>
                    </div>
                  </div>
                  <h6 className="text-[16px] font-semibold text-black dark:text-white">
                    $ 79.00 <span className="font-normal italic line-through">$ 100.99</span>
                  </h6>
                  <Link
                    href="/"
                    className="inline-block rounded-lg bg-black py-[8px] text-center text-white hover:bg-[#222] dark:bg-white dark:text-black dark:hover:bg-[#cfcfcf]"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-500 dark:bg-slate-900">
                <div className="block h-[200px]">
                  <Image src={p1} alt="image" className="inline-block h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-[10px] p-[15px]">
                  <Link href="/">
                    <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">Featured</h6>
                  </Link>
                  <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                    Main Heading Link
                  </Link>
                  <p className="text-[14px] leading-[20px] text-slate-400">
                    Cupidatat ex non id eiusmod id reprehenderit ad incididunt.
                  </p>
                  <Link href="/" className="flex items-center gap-[15px]">
                    <div className="flex-shrink-0">
                      <Image
                        src={p1}
                        alt="image"
                        className="inline-block h-[28px] w-[28px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-[14px] italic leading-[20px] text-black dark:text-white">by Rohit</p>
                    </div>
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
                      <p className="text-[14px] leading-[20px] text-black dark:text-white">5 Reviews</p>
                    </div>
                  </div>
                  <h6 className="text-[16px] font-semibold text-black dark:text-white">
                    $ 79.00 <span className="font-normal italic line-through">$ 100.99</span>
                  </h6>
                  <Link
                    href="/"
                    className="inline-block rounded-lg bg-black py-[8px] text-center text-white hover:bg-[#222] dark:bg-white dark:text-black dark:hover:bg-[#cfcfcf]"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-500 dark:bg-slate-900">
                <div className="block h-[200px]">
                  <Image src={p1} alt="image" className="inline-block h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-[10px] p-[15px]">
                  <Link href="/">
                    <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">Featured</h6>
                  </Link>
                  <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                    Main Heading Link
                  </Link>
                  <p className="text-[14px] leading-[20px] text-slate-400">
                    Cupidatat ex non id eiusmod id reprehenderit ad incididunt.
                  </p>
                  <Link href="/" className="flex items-center gap-[15px]">
                    <div className="flex-shrink-0">
                      <Image
                        src={p1}
                        alt="image"
                        className="inline-block h-[28px] w-[28px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-[14px] italic leading-[20px] text-black dark:text-white">by Rohit</p>
                    </div>
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
                      <p className="text-[14px] leading-[20px] text-black dark:text-white">5 Reviews</p>
                    </div>
                  </div>
                  <h6 className="text-[16px] font-semibold text-black dark:text-white">
                    $ 79.00 <span className="font-normal italic line-through">$ 100.99</span>
                  </h6>
                  <Link
                    href="/"
                    className="inline-block rounded-lg bg-black py-[8px] text-center text-white hover:bg-[#222] dark:bg-white dark:text-black dark:hover:bg-[#cfcfcf]"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-500 dark:bg-slate-900">
                <div className="block h-[200px]">
                  <Image src={p1} alt="image" className="inline-block h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-[10px] p-[15px]">
                  <Link href="/">
                    <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">Featured</h6>
                  </Link>
                  <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                    Main Heading Link
                  </Link>
                  <p className="text-[14px] leading-[20px] text-slate-400">
                    Cupidatat ex non id eiusmod id reprehenderit ad incididunt.
                  </p>
                  <Link href="/" className="flex items-center gap-[15px]">
                    <div className="flex-shrink-0">
                      <Image
                        src={p1}
                        alt="image"
                        className="inline-block h-[28px] w-[28px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-[14px] italic leading-[20px] text-black dark:text-white">by Rohit</p>
                    </div>
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
                      <p className="text-[14px] leading-[20px] text-black dark:text-white">5 Reviews</p>
                    </div>
                  </div>
                  <h6 className="text-[16px] font-semibold text-black dark:text-white">
                    $ 79.00 <span className="font-normal italic line-through">$ 100.99</span>
                  </h6>
                  <Link
                    href="/"
                    className="inline-block rounded-lg bg-black py-[8px] text-center text-white hover:bg-[#222] dark:bg-white dark:text-black dark:hover:bg-[#cfcfcf]"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-500 dark:bg-slate-900">
                <div className="block h-[200px]">
                  <Image src={p1} alt="image" className="inline-block h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-[10px] p-[15px]">
                  <Link href="/">
                    <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">Featured</h6>
                  </Link>
                  <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                    Main Heading Link
                  </Link>
                  <p className="text-[14px] leading-[20px] text-slate-400">
                    Cupidatat ex non id eiusmod id reprehenderit ad incididunt.
                  </p>
                  <Link href="/" className="flex items-center gap-[15px]">
                    <div className="flex-shrink-0">
                      <Image
                        src={p1}
                        alt="image"
                        className="inline-block h-[28px] w-[28px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-[14px] italic leading-[20px] text-black dark:text-white">by Rohit</p>
                    </div>
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
                      <p className="text-[14px] leading-[20px] text-black dark:text-white">5 Reviews</p>
                    </div>
                  </div>
                  <h6 className="text-[16px] font-semibold text-black dark:text-white">
                    $ 79.00 <span className="font-normal italic line-through">$ 100.99</span>
                  </h6>
                  <Link
                    href="/"
                    className="inline-block rounded-lg bg-black py-[8px] text-center text-white hover:bg-[#222] dark:bg-white dark:text-black dark:hover:bg-[#cfcfcf]"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex divide-x divide-solid border border-slate-200 rounded-md overflow-hidden">
              <button type='button' className='text-black bg-white dark:text-white dark:bg-black text-[14px] px-[20px] py-[10px] hover:bg-slate-100 dark:hover:bg-slate-800'>Previous</button>
              <button type='button' className='text-black bg-white dark:text-white dark:bg-black text-[14px] px-[20px] py-[10px] hover:bg-slate-100 dark:hover:bg-slate-800'>1</button>
              <button type='button' className='text-black bg-white dark:text-white dark:bg-black text-[14px] px-[20px] py-[10px] hover:bg-slate-100 dark:hover:bg-slate-800'>2</button>
              <button type='button' className='text-black bg-white dark:text-white dark:bg-black text-[14px] px-[20px] py-[10px] hover:bg-slate-100 dark:hover:bg-slate-800'>3</button>
              <button type='button' className='text-black bg-white dark:text-white dark:bg-black text-[14px] px-[20px] py-[10px] hover:bg-slate-100 dark:hover:bg-slate-800'>4</button>
              <button type='button' className='text-black bg-white dark:text-white dark:bg-black text-[14px] px-[20px] py-[10px] hover:bg-slate-100 dark:hover:bg-slate-800'>5</button>
              <button type='button' className='text-black bg-white dark:text-white dark:bg-black text-[14px] px-[20px] py-[10px] hover:bg-slate-100 dark:hover:bg-slate-800'>6</button>
              <button type='button' className='text-black bg-white dark:text-white dark:bg-black text-[14px] px-[20px] py-[10px] hover:bg-slate-100 dark:hover:bg-slate-800'>Next</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Page

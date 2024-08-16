'use client'
import { IconCoin, IconLayoutSidebarRight, IconPencil, IconSearch, IconStarFilled } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Footer from '../../../components/frontend/footer'
import Header from '../../../components/frontend/header'
import ProductBlock from '../../../components/frontend/ProductBlock'
import p1 from '../../../images/logos/img.jpg'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2)
  }
  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3)
  }

  const items = [
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://reactjs.com/&size=24',
      text: 'React js',
      tag: 'Featured',
      person:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://reactjs.com/&size=24',
      title: 'title heading text',
      des:'Fugiat culpa eiusmod non minim qui sint ex commodo consectetur minim pariatur commodo incididunt eu.',
      link: '/',
      pername: 'Tony',
      reviews: '5 Reviews',
      price: '79.00',
      totalprice: '100.00',
    },

    // Add more items here
  ]

  return (
    <>
      <Header />
      <section className="block bg-white py-[100px] dark:bg-black">
        <div className="container mx-auto px-[15px]">
          <div className="mx-auto flex flex-col gap-[25px] text-center md:w-[800px]">
            <h1 className="text-[30px] font-bold leading-[32px] text-black dark:text-white md:text-[48px] md:leading-[50px]">
              Cillum irure laboris occaecat labore. Consectetur pariatur commodo quis.
            </h1>
            <p className="text-[16px] leading-[20px] text-slate-400">
              Proident non occaecat dolore veniam excepteur. Est dolor consequat et nulla. Sint non sit nulla laboris
              est officia elit do. Dolor irure qui consequat excepteur elit.
            </p>
            <div className="mx-auto block w-[400px]">
              <form action="">
                <div className="flex items-center rounded-lg bg-[#F2F2F2]">
                  <div className="flex-grow">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="search something"
                      className="w-full bg-transparent p-[10px] px-[20px] text-[16px] text-black focus-visible:outline-0"
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <button type="submit" className="bg-transparent p-[10px] text-black">
                      <IconSearch stroke={1} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="mx-auto flex flex-col items-center gap-[15px] md:flex-row">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <Image src={p1} alt="image" className="relative z-[1] h-[28px] w-[28px] rounded-full object-cover" />
                  <Image
                    src={p1}
                    alt="image"
                    className="relative z-[2] -ml-[10px] h-[28px] w-[28px] rounded-full object-cover"
                  />
                  <Image
                    src={p1}
                    alt="image"
                    className="relative z-[3] -ml-[10px] h-[28px] w-[28px] rounded-full object-cover"
                  />
                  <Image
                    src={p1}
                    alt="image"
                    className="relative z-[4] -ml-[10px] h-[28px] w-[28px] rounded-full object-cover"
                  />
                  <Image
                    src={p1}
                    alt="image"
                    className="relative z-[5] -ml-[10px] h-[28px] w-[28px] rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-grow-1">
                <p className="text-[16px] leading-[20px] text-slate-400">
                  Minim ipsum laborum do duis amet voluptate esse .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block bg-white py-[60px] dark:bg-black">
        <div className="container mx-auto px-[15px]">
          <div className="flex flex-col gap-[30px] md:flex-row">
            <div className="min-w-[380px] flex-shrink-0">
              <div className="flex flex-col gap-[10px]">
                <h3 className="text-[20px] font-semibold text-black dark:text-white">Filter Boilerplates</h3>
                <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between p-4 text-left text-black dark:text-white"
        onClick={toggleAccordion}
      >
        <span className="text-[16px] font-medium">Type</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 rounded-lg bg-[#f3f3f3] px-[10px]">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1" className="flex w-full cursor-pointer gap-1 py-[6px]">
              <IconPencil stroke={1} /> <span>Design Kit</span>
            </label>
          </div>
          <div className="flex gap-1 rounded-lg bg-[#f3f3f3] px-[10px]">
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label htmlFor="vehicle2" className="flex w-full cursor-pointer gap-1 py-[6px]">
              <IconLayoutSidebarRight stroke={1} /> <span>Boilerplate</span>
            </label>
          </div>
        </div>
      )}
    </div>
                <div className="border-b border-gray-200">
                  <button
                    className="flex w-full items-center justify-between p-4 text-left text-black dark:text-white"
                    onClick={toggleAccordion2}
                  >
                    <span className="text-[16px] font-medium">Price</span>
                    <span>{isOpen2 ? '-' : '+'}</span>
                  </button>
                  {isOpen2 && (
                    <div className="flex flex-col gap-1">
                      {/*  */}
                      <div className="flex gap-1 rounded-lg bg-[#f3f3f3] px-[10px]">
                        <input type="checkbox" id="car1" name="car1" value="Bike" />
                        <label htmlFor="car1" className="flex w-full cursor-pointer gap-1 py-[6px]">
                          <IconCoin stroke={1} /> <span>$200</span>{' '}
                        </label>
                      </div>
                      <div className="flex gap-1 rounded-lg bg-[#f3f3f3] px-[10px]">
                        <input type="checkbox" id="car3" name="car3" value="Car" />
                        <label htmlFor="car3" className="flex w-full cursor-pointer gap-1 py-[6px]">
                          <IconCoin stroke={1} /> <span>$250</span>{' '}
                        </label>
                      </div>

                      {/*  */}
                    </div>
                  )}
                </div>
                <div className="border-b border-gray-200">
                  <button
                    className="flex w-full items-center justify-between p-4 text-left text-black dark:text-white"
                    onClick={toggleAccordion3}
                  >
                    <span className="text-[16px] font-medium">Textstack</span>
                    <span>{isOpen3 ? '-' : '+'}</span>
                  </button>
                  {isOpen3 && (
                    <div className="flex flex-col gap-1">
                      {/*  */}
                      <div className="flex gap-1 rounded-lg bg-[#f3f3f3] px-[10px]">
                        <input type="checkbox" id="bike1" name="bike1" value="Bike" />
                        <label htmlFor="bike1" className="flex w-full cursor-pointer gap-1 py-[6px]">
                          <IconPencil stroke={1} /> <span>Next js</span>{' '}
                        </label>
                      </div>
                      <div className="flex gap-1 rounded-lg bg-[#f3f3f3] px-[10px]">
                        <input type="checkbox" id="bike2" name="bike2" value="Car" />
                        <label htmlFor="bike2" className="flex w-full cursor-pointer gap-1 py-[6px]">
                          <IconLayoutSidebarRight stroke={1} /> <span>React js</span>{' '}
                        </label>
                      </div>

                      {/*  */}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex-grow-1 w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-[20px] font-semibold text-black dark:text-white">159 boilerplates</h3>
                <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
                  <ProductBlock items={items} />
                  <div className="col-span-1">
                    <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-500 dark:bg-slate-900">
                      <div className="block h-[200px]">
                        <Image src={p1} alt="image" className="inline-block h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-col gap-[10px] p-[15px]">
                        <Link href="/">
                          <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">
                            Featured
                          </h6>
                        </Link>
                        <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                          Main Heading Link
                        </Link>
                        <p className="text-[14px] leading-[20px] text-slate-400  line-clamp-2">
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
                          <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">
                            Featured
                          </h6>
                        </Link>
                        <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                          Main Heading Link
                        </Link>
                        <p className="text-[14px] leading-[20px] text-slate-400  line-clamp-2">
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
                          <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">
                            Featured
                          </h6>
                        </Link>
                        <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                          Main Heading Link
                        </Link>
                        <p className="text-[14px] leading-[20px] text-slate-400  line-clamp-2">
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
                          <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">
                            Featured
                          </h6>
                        </Link>
                        <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                          Main Heading Link
                        </Link>
                        <p className="text-[14px] leading-[20px] text-slate-400  line-clamp-2">
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
                          <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">
                            Featured
                          </h6>
                        </Link>
                        <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                          Main Heading Link
                        </Link>
                        <p className="text-[14px] leading-[20px] text-slate-400  line-clamp-2">
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
                          <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">
                            Featured
                          </h6>
                        </Link>
                        <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                          Main Heading Link
                        </Link>
                        <p className="text-[14px] leading-[20px] text-slate-400  line-clamp-2">
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
                          <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">
                            Featured
                          </h6>
                        </Link>
                        <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                          Main Heading Link
                        </Link>
                        <p className="text-[14px] leading-[20px] text-slate-400  line-clamp-2">
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
                          <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">
                            Featured
                          </h6>
                        </Link>
                        <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                          Main Heading Link
                        </Link>
                        <p className="text-[14px] leading-[20px] text-slate-400  line-clamp-2">
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
                          <h6 className="float-start rounded-full bg-slate-300 px-[6px] text-[12px] text-black">
                            Featured
                          </h6>
                        </Link>
                        <Link href="/" className="text-[18px] font-semibold leading-[20px] text-black dark:text-white">
                          Main Heading Link
                        </Link>
                        <p className="text-[14px] leading-[20px] text-slate-400  line-clamp-2">
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
            </div>
         
        </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

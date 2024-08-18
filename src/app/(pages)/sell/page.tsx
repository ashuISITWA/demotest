'use client'
import Link from 'next/link'
import { IconCircleCheck,IconCoin } from '@tabler/icons-react';
import { useState } from 'react'
import Image from 'next/image'
import Footer from '../../../components/frontend/footer'
import Header from '../../../components/frontend/header'

export default function Page() {
  const [activeTab, setActiveTab] = useState('tab1')

  const handleTab1 = () => {
    setActiveTab('tab1')
  }

  const handleTab2 = () => {
    setActiveTab('tab2')
  }
  return (
    <>
      <Header />
      <section className="block bg-white py-[100px] dark:bg-[#000]">
        <div className="max-w-[1228px] mx-auto px-[15px]">
          <div className="mx-auto flex flex-col gap-[25px] text-center md:w-[800px]">
            <h1 className="text-[30px] font-bold leading-[32px] text-[#000] dark:text-white md:text-[48px] md:leading-[50px]">
            Design, edit, and share – all within a single interface.
            </h1>
            <p className="text-[16px] leading-[20px] text-[#000] dark:text-white">
            Whether you're a designer, writer, or marketer, our platform offers a suite of powerful tools that allow you to bring your ideas to life effortlessly. 
            </p>
            <div className="flex justify-center">
              <div className="flex gap-[20px]">
                <button type="button" className=' rounded-md text-[16px] py-[8px] px-[30px] text-center w-[160px] capitalize bg-[#000] text-white dark:bg-white dark:text-[#000] hover:bg-slate-800 dark:hover:bg-slate-300'>start selling</button>
                <button type="button" className=' rounded-md text-[16px] py-[8px] px-[30px] text-center w-[160px] capitalize bg-slate-300 text-[#000] dark:bg-slate-800 dark:text-white hover:bg-slate-400 dark:hover:bg-slate-600'>discover</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block bg-slate-100 dark:bg-slate-900 py-[100px] ">
        <div className="max-w-[1228px] mx-auto px-[15px]">
          <div className="flex flex-col items-center gap-[30px]">
            <div className="flex justify-center">
              <div className="flex flex-col gap-4 text-center md:w-[600px]">
                <h2 className="text-[30px] font-semibold text-[#000] dark:text-white">Main title heading</h2>
                <p className="text-[16px] text-[#5b5e61]">
                  Aute eiusmod culpa qui eiusmod non incididunt nostrud id cupidatat consequat aute tempor enim fugiat.
                  Cillum tempor sit adipisicing aute pariatur laboris tempor anim. Ut nostrud excepteur nostrud commodo.
                </p>
              </div>
            </div>
            <div className="flex cursor-pointer mt-[50px]">
              <div
                className={`rounded-lg px-4 py-2 text-[16px] ${
                  activeTab === 'tab1'
                    ? 'bg-[#000] text-white dark:bg-white dark:text-[#000]'
                    : 'bg-transparent text-[#000] dark:text-white'
                }`}
                onClick={handleTab1}
              >
                Monthly
              </div>
              <div
                className={`ml-2 rounded-lg px-4 py-2 text-[16px] ${
                  activeTab === 'tab2'
                    ? 'bg-[#000] text-white dark:bg-white dark:text-[#000]'
                    : 'bg-transparent text-[#000] dark:text-white'
                }`}
                onClick={handleTab2}
              >
                Annually
              </div>
            </div>
            <div className="block w-full">
              {activeTab === 'tab1' ? (
                <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-[15px]">
                  <div className="flex flex-col gap-[15px] rounded-lg bg-white p-[20px] shadow dark:bg-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <IconCoin stroke={2} />
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="text-[16px] font-semibold text-[#000] dark:text-white">Starter</h3>
                      </div>
                    </div>
                    <h5 className="text-[30px] leading-[30px] text-[#000] dark:text-white">$0</h5>
                    <p className="text-[16px] text-[#5b5e61]">
                      Sint dolore culpa aliqua in dolore ex labore consectetur quis irure laboris laborum fugiat
                      excepteur.
                    </p>
                    <button
                      type="button"
                      className="w-full rounded-lg bg-[#000] py-[8px] font-semibold text-white dark:bg-white dark:text-[#000]"
                    >
                      Get started for free
                    </button>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Commission-free trading</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Multi-layered encryption</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">One tip every day</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Invest up to $l,500 each month</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[15px] rounded-lg bg-white p-[20px] shadow dark:bg-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <IconCoin stroke={2} />
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="text-[16px] font-semibold text-[#000] dark:text-white">Investor</h3>
                      </div>
                    </div>
                    <h5 className="text-[30px] leading-[30px] text-[#000] dark:text-white">$7</h5>
                    <p className="text-[16px] text-[#5b5e61]">
                      Sint dolore culpa aliqua in dolore ex labore consectetur quis irure laboris laborum fugiat
                      excepteur.
                    </p>
                    <button
                      type="button"
                      className="w-full rounded-lg bg-[#000] py-[8px] font-semibold text-white dark:bg-white dark:text-[#000]"
                    >
                      Get started for free
                    </button>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Commission-free trading</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Multi-layered encryption</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">One tip every day</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Invest up to $l,500 each month</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[15px] rounded-lg bg-slate-200 p-[20px] shadow dark:bg-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <IconCoin stroke={2} />
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="text-[16px] font-semibold text-[#000] dark:text-white">VIP</h3>
                      </div>
                    </div>
                    <h5 className="text-[30px] leading-[30px] text-[#000] dark:text-white">$199</h5>
                    <p className="text-[16px] text-[#5b5e61]">
                      Sint dolore culpa aliqua in dolore ex labore consectetur quis irure laboris laborum fugiat
                      excepteur.
                    </p>
                    <button
                      type="button"
                      className="w-full rounded-lg bg-blue-600 py-[8px] font-semibold text-white  "
                    >
                      Get started for free
                    </button>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Commission-free trading</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Multi-layered encryption</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">One tip every day</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Invest up to $l,500 each month</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid w-full  grid-cols-1 md:grid-cols-3 gap-[15px]">
                  <div className="flex flex-col gap-[15px] rounded-lg bg-white p-[20px] shadow dark:bg-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <IconCoin stroke={2} />
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="text-[16px] font-semibold text-[#000] dark:text-white">Starter</h3>
                      </div>
                    </div>
                    <h5 className="text-[30px] leading-[30px] text-[#000] dark:text-white">$10</h5>
                    <p className="text-[16px] text-[#5b5e61]">
                      Sint dolore culpa aliqua in dolore ex labore consectetur quis irure laboris laborum fugiat
                      excepteur.
                    </p>
                    <button
                      type="button"
                      className="w-full rounded-lg bg-[#000] py-[8px] font-semibold text-white dark:bg-white dark:text-[#000]"
                    >
                      Get started for free
                    </button>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Commission-free trading</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Multi-layered encryption</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">One tip every day</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Invest up to $l,500 each month</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[15px] rounded-lg bg-white p-[20px] shadow dark:bg-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <IconCoin stroke={2} />
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="text-[16px] font-semibold text-[#000] dark:text-white">Investor</h3>
                      </div>
                    </div>
                    <h5 className="text-[30px] leading-[30px] text-[#000] dark:text-white">$50</h5>
                    <p className="text-[16px] text-[#5b5e61]">
                      Sint dolore culpa aliqua in dolore ex labore consectetur quis irure laboris laborum fugiat
                      excepteur.
                    </p>
                    <button
                      type="button"
                      className="w-full rounded-lg bg-[#000] py-[8px] font-semibold text-white dark:bg-white dark:text-[#000]"
                    >
                      Get started for free
                    </button>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Commission-free trading</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Multi-layered encryption</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">One tip every day</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Invest up to $l,500 each month</h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[15px] rounded-lg bg-slate-100 p-[20px] shadow dark:bg-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <IconCoin stroke={2} />
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="text-[16px] font-semibold text-[#000] dark:text-white">VIP</h3>
                      </div>
                    </div>
                    <h5 className="text-[30px] leading-[30px] text-[#000] dark:text-white">$100</h5>
                    <p className="text-[16px] text-[#5b5e61]">
                      Sint dolore culpa aliqua in dolore ex labore consectetur quis irure laboris laborum fugiat
                      excepteur.
                    </p>
                    <button
                      type="button"
                      className="w-full rounded-lg bg-blue-600 py-[8px] font-semibold text-white  "
                    >
                      Get started for free
                    </button>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Commission-free trading</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Multi-layered encryption</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">One tip every day</h6>
                      </div>
                      <div className="flex gap-2">
                        <IconCircleCheck stroke={2} className="text-[#000] dark:text-white" />
                        <h6 className="text-[#5b5e61]">Invest up to $l,500 each month</h6>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="block bg-white py-[100px] dark:bg-[#000]">
        <div className="max-w-[1228px] mx-auto px-[15px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-2">
              <h2 className="text-[30px] font-semibold leading-[32px] text-[#000] dark:text-white">
                Frequently asked questions
              </h2>
              <p className="text-[16px] text-[#5b5e61]">If you have anything else you want to ask, <Link href="/" className=" border-b border-black text-[#000]">reach out to us.</Link> </p>
            </div>
            <div className="grid grid-cols-1 gap-[25px] md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold leading-[20px] text-[#000] dark:text-white">How do I know the tips are good?</h4>
                <p className="text-[16px] text-[#5b5e61]">
                  Our whole business depends on our tips being good, so it's in our best interest that they are. The
                  results of our customers speak for themselves, ust trust us.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold leading-[20px] text-[#000] dark:text-white">How do I know the tips are good?</h4>
                <p className="text-[16px] text-[#5b5e61]">
                  Our whole business depends on our tips being good, so it's in our best interest that they are. The
                  results of our customers speak for themselves, ust trust us.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold leading-[20px] text-[#000] dark:text-white">How do I know the tips are good?</h4>
                <p className="text-[16px] text-[#5b5e61]">
                  Our whole business depends on our tips being good, so it's in our best interest that they are. The
                  results of our customers speak for themselves, ust trust us.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold leading-[20px] text-[#000] dark:text-white">How do I know the tips are good?</h4>
                <p className="text-[16px] text-[#5b5e61]">
                  Our whole business depends on our tips being good, so it's in our best interest that they are. The
                  results of our customers speak for themselves, ust trust us.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold leading-[20px] text-[#000] dark:text-white">How do I know the tips are good?</h4>
                <p className="text-[16px] text-[#5b5e61]">
                  Our whole business depends on our tips being good, so it's in our best interest that they are. The
                  results of our customers speak for themselves, ust trust us.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold leading-[20px] text-[#000] dark:text-white">How do I know the tips are good?</h4>
                <p className="text-[16px] text-[#5b5e61]">
                  Our whole business depends on our tips being good, so it's in our best interest that they are. The
                  results of our customers speak for themselves, ust trust us.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold leading-[20px] text-[#000] dark:text-white">How do I know the tips are good?</h4>
                <p className="text-[16px] text-[#5b5e61]">
                  Our whole business depends on our tips being good, so it's in our best interest that they are. The
                  results of our customers speak for themselves, ust trust us.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold leading-[20px] text-[#000] dark:text-white">How do I know the tips are good?</h4>
                <p className="text-[16px] text-[#5b5e61]">
                  Our whole business depends on our tips being good, so it's in our best interest that they are. The
                  results of our customers speak for themselves, ust trust us.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold leading-[20px] text-[#000] dark:text-white">How do I know the tips are good?</h4>
                <p className="text-[16px] text-[#5b5e61]">
                  Our whole business depends on our tips being good, so it's in our best interest that they are. The
                  results of our customers speak for themselves, ust trust us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

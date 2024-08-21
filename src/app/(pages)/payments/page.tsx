'use client'
import { useState } from 'react'
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
      <section className="block bg-white py-[150px] dark:bg-[#000] md:h-[64vh]">
        <div className="max-w-[1228px] mx-auto px-[15px]">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="col-span-12 md:col-span-5">
              <div className="flex flex-col gap-[15px]">
                <h2 className="text-[30px] font-semibold leading-[30px] text-[#000] dark:text-white">
                  Astro Starter Kitu LaunchFast
                </h2>
                <h3 className="text-[22px] leading-[26px] text-[#5b5e61] dark:text-[#b1b1b1]">$75.00</h3>
                <p className="text-[16px] leading-[24px] text-[#000] dark:text-white">
                  High Quality Astro Starter Kit with built-in authentication flow, image uploads, analytics, payments,
                  email flows, and much more. Compatible with any Redis and Postgres database.
                </p>
              </div>
            </div>
            <div className="col-span-3"></div>
            <div className="col-span-12 md:col-span-4">
              <div>
                <div className="flex cursor-pointer justify-center">
                  <div
                    className={`rounded-lg px-4 py-2 text-[16px] ${
                      activeTab === 'tab1'
                        ? 'bg-[#000] text-white dark:bg-white dark:text-[#000]'
                        : 'bg-transparent text-[#000] dark:text-white'
                    }`}
                    onClick={handleTab1}
                  >
                    Pay by Code
                  </div>
                  <div
                    className={`ml-2 rounded-lg px-4 py-2 text-[16px] ${
                      activeTab === 'tab2'
                        ? 'bg-[#000] text-white dark:bg-white dark:text-[#000]'
                        : 'bg-transparent text-[#000] dark:text-white'
                    }`}
                    onClick={handleTab2}
                  >
                    Buy Code
                  </div>
                </div>
                <div className="block w-full">
                  {activeTab === 'tab1' ? (
                    <div className="mt-4 block">
                      <form action="">
                        <div className="flex flex-col gap-[25px]">
                          <label htmlFor="" className="text-[16px] font-medium text-[#000] dark:text-white">
                            Code Link
                          </label>
                          <input
                            type="text"
                            placeholder="type here..."
                            className="rounded-lg border border-slate-200 px-[20px] py-[10px] text-[16px] text-[#000] focus-visible:outline-none"
                          />
                          <div className="flex justify-end">
                          <button
                            type="submit"
                            className="rounded-lg bg-[#000] px-[20px] py-[10px] text-white hover:bg-slate-800 dark:bg-white dark:text-[#000] dark:hover:bg-slate-800 dark:hover:text-white text-[16px]"
                          >
                            Pay Now
                          </button>
                          </div>
                         
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="mt-4 block">
                      <form action="">
                        <div className="flex flex-col gap-[25px]">
                          <label htmlFor="" className="text-[16px] font-medium text-[#000] dark:text-white">
                            Label
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-[10px]">
                            <button
                              type="button"
                              className="rounded-lg border border-slate-200 px-[20px] py-[50px] text-[16px] text-[#000] focus-visible:outline-none dark:text-white"
                            >
                              Link
                            </button>
                            <button
                              type="button"
                              className="rounded-lg border border-slate-200 px-[20px] py-[50px] text-[16px] text-[#000] focus-visible:outline-none dark:text-white"
                            >
                              Link
                            </button>
                            <button
                              type="button"
                              className="rounded-lg border border-slate-200 px-[20px] py-[50px] text-[16px] text-[#000] focus-visible:outline-none dark:text-white"
                            >
                              Link
                            </button>
                            <button
                              type="button"
                              className="rounded-lg border border-slate-200 px-[20px] py-[50px] text-[16px] text-[#000] focus-visible:outline-none dark:text-white"
                            >
                              Link
                            </button>
                          </div>
               
                        </div>
                      </form>
                    </div>
                  )}
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

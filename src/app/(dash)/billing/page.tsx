'use client'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import { BiSolidCheckCircle } from 'react-icons/bi'

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Page() {
  return (
    <>
      <div className="block h-screen w-full">
        {/* <Header /> */}
        <div className="flex justify-center py-[60px]">
          <div className="w-[1000px] px-[15px]">
            <div className="flex flex-col gap-[20px]">
              <div className="flex justify-center">
                <div className="flex flex-col gap-4 text-center">
                  <h3 className="text-[20px] font-bold text-black md:text-[32px]">Billing</h3>
                  <h3 className="text-[16px] font-normal text-[#999]">Here are your sites</h3>
                </div>
              </div>

              <Tabs className={`new-sub`}>
                <div className={`flex justify-center`}>
                  <TabList
                    className={`year-block inline-flex divide-x divide-[#eee] overflow-hidden rounded-md border border-[#eee]`}
                  >
                    <Tab className={`rounded-0 cursor-pointer px-[15px] py-[9px] text-[14px]`}>Monthly</Tab>
                    <Tab className={`rounded-0 cursor-pointer px-[15px] py-[9px] text-[14px]`}>Yearly</Tab>
                    <Tab className={`rounded-0 cursor-pointer px-[15px] py-[9px] text-[14px]`}>Lifetime</Tab>
                    <Tab className={`rounded-0 cursor-pointer px-[15px] py-[9px] text-[14px]`}>AppSumo Lifetime</Tab>
                  </TabList>
                </div>
                <TabPanel>
                  <div className="my-5 grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-4">
                      <div className="flex flex-col gap-[35px] rounded-md border border-[#eee] p-[15px]">
                        <h3 className="text-[16px] text-[#222]">Standard yearly (up to 4 users)</h3>
                        <div className="flex flex-col gap-3 text-center">
                          <div className="flex flex-col">
                            <h3 className="text-[20px] font-semibold text-[#222]">4.17 USD / month</h3>
                            <div className="flex justify-center">
                              <div className="flex items-center gap-3">
                                <h4 className="text-[14px] text-red-500 line-through">60 USD</h4>
                                <h4 className="text-[14px] text-[#999]">50 USD / year (Save 16 %)</h4>
                              </div>
                            </div>
                          </div>
                          <div className="mb-[20px] mt-[50px] block">
                            <button
                              type="button"
                              className="w-full rounded-md bg-black py-[10px] text-[14px] text-[#fff]"
                            >
                              Upgrad
                            </button>
                          </div>
                          <div className="flex flex-col gap-[10px]">
                            <h3 className="text-left text-[13px]">This includes:</h3>
                            <div className="flex flex-col divide-y divide-[#eee]">
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">Quantum-safe E2E Encryption</h6>
                              </div>
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">30 retention days</h6>
                              </div>
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">Unlimited GB of maximum storage</h6>
                              </div>
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">No file size limit</h6>
                              </div>
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">Multi-user workspace</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                      <div className="flex flex-col gap-[35px] rounded-md border border-[#eee] p-[15px]">
                        <h3 className="text-[16px] text-[#222]">Pro yearly (pack 25 users)</h3>
                        <div className="relative flex flex-col gap-3 text-center">
                          <h2 className="absolute -top-[28px] left-0 z-[10] rounded-md border border-[#eee] bg-white px-[6px] py-[4px] text-[11px] text-black">
                            Most Popular
                          </h2>
                          <div className="flex flex-col">
                            <h3 className="text-[20px] font-semibold text-[#222]">4.17 USD / month</h3>
                            <div className="flex justify-center">
                              <div className="flex items-center gap-3">
                                <h4 className="text-[14px] text-red-500 line-through">60 USD</h4>
                                <h4 className="text-[14px] text-[#999]">50 USD / year (Save 16 %)</h4>
                              </div>
                            </div>
                          </div>
                          <div className="mb-[20px] mt-[50px] block">
                            <button
                              type="button"
                              className="w-full rounded-md bg-black py-[10px] text-[14px] text-[#fff]"
                            >
                              Upgrad
                            </button>
                          </div>
                          <div className="flex flex-col gap-[10px]">
                            <h3 className="text-left text-[13px]">This includes:</h3>
                            <div className="flex flex-col divide-y divide-[#eee]">
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">Quantum-safe E2E Encryption</h6>
                              </div>
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">30 retention days</h6>
                              </div>
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">Unlimited GB of maximum storage</h6>
                              </div>
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">No file size limit</h6>
                              </div>
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">Multi-user workspace</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                      <div className="flex flex-col gap-[35px] rounded-md border border-[#eee] p-[15px]">
                        <h3 className="text-[16px] text-[#222]">Enterprise yearly</h3>
                        <div className="flex flex-col gap-3 text-center">
                          <div className="flex flex-col">
                            <h3 className="text-[20px] font-semibold text-[#222]">4.17 USD / month</h3>
                            <div className="flex justify-center">
                              <div className="flex items-center gap-3">
                                <h4 className="text-[14px] text-red-500 line-through">60 USD</h4>
                                <h4 className="text-[14px] text-[#999]">50 USD / year (Save 16 %)</h4>
                              </div>
                            </div>
                          </div>
                          <div className="mb-[20px] mt-[50px] block">
                            <button
                              type="button"
                              className="w-full rounded-md bg-black py-[10px] text-[14px] text-[#fff]"
                            >
                              Contact Us
                            </button>
                          </div>
                          <div className="flex flex-col gap-[10px]">
                            <h3 className="text-left text-[13px]">This includes:</h3>
                            <div className="flex flex-col divide-y divide-[#eee]">
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">Quantum-safe E2E Encryption</h6>
                              </div>
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">30 retention days</h6>
                              </div>
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">Unlimited GB of maximum storage</h6>
                              </div>
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">No file size limit</h6>
                              </div>
                              <div className="flex items-center gap-3 py-[10px]">
                                <BiSolidCheckCircle />
                                <h6 className="text-[13px] text-[#222]">Multi-user workspace</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                  <div className="my-5 flex justify-center">
                    <div className="flex w-full flex-col gap-[35px] rounded-md border border-[#eee] p-[15px] md:w-[400px]">
                      <h3 className="text-[16px] text-[#222]">Standard LTD (AppSumo)</h3>
                      <div className="flex flex-col gap-3 text-center">
                        <div className="block">
                          <input
                            type="text"
                            placeholder="Enter AppSumo Code (10-characters)"
                            className="w-full rounded-md border border-[#eee] px-[6px] py-[4px] text-[14px]"
                          />
                        </div>
                        <div className="mb-[20px] mt-[30px] block">
                          <button
                            type="button"
                            className="w-full rounded-md bg-[#e7e7e7] py-[10px] text-[14px] text-[#999]"
                          >
                            Upgrad
                          </button>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                          <h3 className="text-left text-[13px]">This includes:</h3>
                          <div className="flex flex-col divide-y divide-[#eee]">
                            <div className="flex items-center gap-3 py-[10px]">
                              <BiSolidCheckCircle />
                              <h6 className="text-[13px] text-[#222]">Quantum-safe E2E Encryption</h6>
                            </div>
                            <div className="flex items-center gap-3 py-[10px]">
                              <BiSolidCheckCircle />
                              <h6 className="text-[13px] text-[#222]">30 retention days</h6>
                            </div>
                            <div className="flex items-center gap-3 py-[10px]">
                              <BiSolidCheckCircle />
                              <h6 className="text-[13px] text-[#222]">Unlimited GB of maximum storage</h6>
                            </div>
                            <div className="flex items-center gap-3 py-[10px]">
                              <BiSolidCheckCircle />
                              <h6 className="text-[13px] text-[#222]">No file size limit</h6>
                            </div>
                            <div className="flex items-center gap-3 py-[10px]">
                              <BiSolidCheckCircle />
                              <h6 className="text-[13px] text-[#222]">Multi-user workspace</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

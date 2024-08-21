'use client'
import Footer from '../../../components/frontend/footer'
import Header from '../../../components/frontend/header'

export default function Page() {
  return (
    <>
      <Header />
      <section className="block bg-white py-[150px] dark:bg-[#000] md:h-[64vh]">
        <div className="max-w-[1228px] mx-auto px-[15px]">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="col-span-12 md:col-span-5"></div>
            <div className="md:col-span-3"></div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex flex-col gap-[15px] mb-3">
                <h2 className="text-[30px] font-semibold leading-[30px] text-slate-500">Pay LaunchFa.st</h2>
                <h3 className="text-[30px] font-semibold leading-[30px] text-[#000] dark:text-white">$ 100.00 USD</h3>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className="mt-5 grid grid-cols-2 gap-[25px] mb-5">
                  <div className="col-span-1">
                    <h4 className="text-[16px] font-semibold text-[#000] dark:text-white">
                      LaunchFa.st Astro Bilerplate
                    </h4>
                  </div>
                  <div className="col-span-1">
                    <h4 className="text-end text-[16px] font-semibold text-[#000] dark:text-white">$100.99 USD</h4>
                  </div>
                  <div className="col-span-1">
                    <h4 className="text-[16px] font-semibold text-[#000] dark:text-white">Subtotal</h4>
                  </div>
                  <div className="col-span-1">
                    <h4 className="text-end text-[16px] font-semibold text-[#000] dark:text-white">$100.99 USD</h4>
                  </div>
                  <div className="col-span-1">
                    <h4 className="text-[16px] font-semibold text-[#5b5e61] dark:text-[#b1b1b1]">Payment by Code</h4>
                  </div>
                  <div className="col-span-1">
                    <h4 className="text-end text-[16px] font-semibold text-[#000] dark:text-white">-$100.99 USD</h4>
                  </div>
                  <div className="col-span-1  border-t border-slate-300 pt-2">
                    <h4 className="text-[16px] font-semibold text-[#000] dark:text-white">Total</h4>
                  </div>
                  <div className="col-span-1 border-t border-slate-300 pt-2">
                    <h4 className="text-end text-[16px] font-semibold text-[#000] dark:text-white">-$1000.99 USD</h4>
                  </div>
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-[#000] px-[20px] py-[10px] text-white hover:bg-slate-800 dark:bg-white dark:text-[#000] dark:hover:bg-slate-800 dark:hover:text-white text-[16px]"
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

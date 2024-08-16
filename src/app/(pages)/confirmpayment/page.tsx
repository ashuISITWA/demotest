'use client'
import Footer from '../../../components/frontend/footer'
import Header from '../../../components/frontend/header'

export default function Page() {
  return (
    <>
      <Header />
      <section className="block bg-white py-[150px] dark:bg-black md:h-[64vh]">
        <div className="container mx-auto px-[15px]">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="col-span-12 md:col-span-5"></div>
            <div className="md:col-span-3"></div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex flex-col gap-[15px] mb-3">
                <h2 className="text-[30px] font-semibold leading-[30px] text-slate-500">Pay LaunchFa.st</h2>
                <h3 className="text-[30px] font-semibold leading-[30px] text-black dark:text-white">$ 100.00 USD</h3>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className="mt-5 grid grid-cols-2 gap-[25px] mb-5">
                  <div className="col-span-1">
                    <h4 className="text-[16px] font-semibold text-black dark:text-white">
                      LaunchFa.st Astro Bilerplate
                    </h4>
                  </div>
                  <div className="col-span-1">
                    <h4 className="text-end text-[16px] font-semibold text-black dark:text-white">$100.99 USD</h4>
                  </div>
                  <div className="col-span-1">
                    <h4 className="text-[16px] font-semibold text-black dark:text-white">Subtotal</h4>
                  </div>
                  <div className="col-span-1">
                    <h4 className="text-end text-[16px] font-semibold text-black dark:text-white">$100.99 USD</h4>
                  </div>
                  <div className="col-span-1">
                    <h4 className="text-[16px] font-semibold text-slate-400">Payment by Code</h4>
                  </div>
                  <div className="col-span-1">
                    <h4 className="text-end text-[16px] font-semibold text-black dark:text-white">-$100.99 USD</h4>
                  </div>
                  <div className="col-span-1  border-t border-slate-300 pt-2">
                    <h4 className="text-[16px] font-semibold text-black dark:text-white">Total</h4>
                  </div>
                  <div className="col-span-1 border-t border-slate-300 pt-2">
                    <h4 className="text-end text-[16px] font-semibold text-black dark:text-white">-$1000.99 USD</h4>
                  </div>
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-black px-[20px] py-[10px] text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-400"
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

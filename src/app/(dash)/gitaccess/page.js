import { Heading } from '@/components/heading'
import { Input } from '@/components/input'
import { Link } from '@/components/link'
import { IconPointFilled } from '@tabler/icons-react'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
export default function Page() {
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <div className="flex flex-col gap-[40px]">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
              <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
              Back
            </Link>
            <Heading>Git Access</Heading>
            <form action="">
              <div className="flex w-[400px] gap-[15px]">
                <div className="flex-grow">
                  <Input name="productName" placeholder="GitHub username" type="text" />
                </div>
                <div className="flex-shrink-0">
                  <button type="submit" className="rounded-md bg-[#000] px-[30px] py-[6px] text-[16px] text-white">
                    Invite
                  </button>
                </div>
              </div>
            </form>
            <div className="flex flex-col gap-[15px] border-t border-slate-200 pt-[20px]">
              <h3 className="text-[16px] font-medium text-[#000]">Problems getting an invite?</h3>
              <div className="flex gap-1">
                <div className="flex-shrink-0">
                  <IconPointFilled className="text-[#5b5e61] dark:text-[#b1b1b1]" />
                </div>
                <div className="flex-grow">
                  <p className="text-[14px] text-[#000]">
                    Make sure there are no spaces at the beginning or end of your username.
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="flex-shrink-0">
                  <IconPointFilled className="text-[#5b5e61] dark:text-[#b1b1b1]" />
                </div>
                <div className="flex-grow">
                  <p className="text-[14px] text-[#000]">Enter only your GitHub username, not email.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

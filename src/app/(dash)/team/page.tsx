import { Button } from '@/components/button'
import { Divider } from '@/components/divider'
import { Heading } from '@/components/heading'
import type { Metadata } from 'next'
import Image from 'next/image'
import pic1 from '../../../images/logos/cnn.svg'

export const metadata: Metadata = {
  title: 'Team',
}

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-col gap-[5px]">
        <Heading>Team Members</Heading>
        <p data-slot="text" className="text-base/6 text-zinc-500 dark:text-zinc-400 sm:text-sm/6">
          Share this link with your team to give them access to your organization.
        </p>
      </div>
      <Divider className="my-10 mt-6" />

      <div className="mt-3 flex max-w-md items-center gap-3 whitespace-nowrap">
        <form action="">
          <input
            type="text"
            className="rounded-s-md border-b border-s border-t border-slate-200 px-[15px] py-[8px] text-[14px] text-[#000]"
            value="https://example.com/teams/invite/eHGJEj12FHDKSi"
          />
          <button
            type="submit"
            className="rounded-e-md border border-slate-200 px-[15px] py-[8px] text-[14px] text-[#000]"
          >
            Copy link
          </button>
        </form>
      </div>
      <div className="mt-3">
        <button
          type="button"
          className="text-base/6 font-medium text-zinc-950 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300 sm:text-sm/6"
        >
          Reset your invite link
        </button>
      </div>
      <div className="mt-8 divide-y divide-zinc-100 text-zinc-950 dark:divide-white/5 dark:text-white">
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex min-w-0 items-center gap-2">
            <Image src={pic1} alt="image" className="aspect-square w-[24px] rounded-full object-cover" />
            <span className="truncate text-sm/6">leslie.alexander@example.com</span>
          </div>
          <div className="flex min-w-fit justify-end">
            <select name="" id="" className="rounded-md border border-slate-200 px-[8px] py-[4px] text-[15px]">
              <option value="">Admin</option>
              <option value="">Owner</option>
              <option value="">Member</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex min-w-0 items-center gap-2">
            <Image src={pic1} alt="image" className="aspect-square w-[24px] rounded-full object-cover" />
            <span className="truncate text-sm/6">leslie.alexander@example.com</span>
          </div>
          <div className="flex min-w-fit justify-end">
            <select name="" id="" className="rounded-md border border-slate-200 px-[8px] py-[4px] text-[15px]">
              
              <option value="">Member</option>
              \<option value="">Admin</option>
              <option value="">Owner</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex min-w-0 items-center gap-2">
            <Image src={pic1} alt="image" className="aspect-square w-[24px] rounded-full object-cover" />
            <span className="truncate text-sm/6">leslie.alexander@example.com</span>
          </div>
          <div className="flex min-w-fit justify-end">
            <select name="" id="" className="rounded-md border border-slate-200 px-[8px] py-[4px] text-[15px]">
             
              <option value="">Owner</option>
              <option value="">Admin</option>
              <option value="">Member</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex min-w-0 items-center gap-2">
            <Image src={pic1} alt="image" className="aspect-square w-[24px] rounded-full object-cover" />
            <span className="truncate text-sm/6">leslie.alexander@example.com</span>
          </div>
          <div className="flex min-w-fit justify-end">
            <select name="" id="" className="rounded-md border border-slate-200 px-[8px] py-[4px] text-[15px]">
              <option value="">Admin</option>
              <option value="">Owner</option>
              <option value="">Member</option>
            </select>
          </div>
        </div>
      </div>
      <Divider className="my-10" soft />

      <div className="flex justify-end gap-4">
        <Button type="reset" plain>
          Reset
        </Button>
        <Button type="submit">Save changes</Button>
      </div>
    </div>
  )
}

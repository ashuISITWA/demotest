import { Stat } from '@/app/page'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/heading'
import { Link } from '@/components/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getEvent, getEventOrders } from '@/datapur'
import { IconBrandGithub } from '@tabler/icons-react';
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  let event = await getEvent(params.id)

  return {
    title: event?.name,
  }
}

export default async function Event({ params }: { params: { id: string } }) {
  let event = await getEvent(params.id)
  let orders = await getEventOrders(params.id)

  if (!event) {
    notFound()
  }

  return (
    <>
      <div className="max-lg:hidden">
        <Link href="/purchase" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Purchase
        </Link>
      </div>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <div className="w-32 shrink-0">
            <img className="aspect-[3/2] rounded-lg shadow" src={event.imgUrl} alt="" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Heading>{event.name}</Heading>
              <Badge color={event.status === 'Purchase' ? 'lime' : 'zinc'}>{event.status}</Badge>
            </div>
            <div className="mt-2 text-sm/6 text-zinc-500">
              {event.date} at {event.time} <span aria-hidden="true">·</span> {event.location}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="/gitaccess" className="bg-white py-[6px] px-[15px] text-black text-[14px] rounded-md flex gap-2 items-center border border-[#e6e6e6] hover:bg-[#f9f9f9]">
            <IconBrandGithub className='w-[15px]' />Git Access
          </Link>
          <Button>View</Button>
        </div>
      </div>
      {/* <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <Stat title="Total revenue" value={event.totalRevenue} change={event.totalRevenueChange} />
        <Stat title="Tickets sold" value={`${event.ticketsSold}/${event.ticketsAvailable}`} change={event.ticketsSoldChange} />
        <Stat title="Pageviews" value={event.pageViews} change={event.pageViewsChange} />
      </div> */}
      <Subheading className="mt-12">Recent orders</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Order number</TableHeader>
            <TableHeader>Purchase date</TableHeader>
            <TableHeader>Customer</TableHeader>
            <TableHeader className="text-right">Amount</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.length > 0 && (
            <TableRow key={orders[0].id} href={orders[0].url} title={`Order #${orders[0].id}`}>
              <TableCell>{orders[0].id}</TableCell>
              <TableCell className="text-zinc-500">{orders[0].date}</TableCell>
              <TableCell>{orders[0].customer.name}</TableCell>
              <TableCell className="text-right">US{orders[0].amount.usd}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}

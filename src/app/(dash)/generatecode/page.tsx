'use client'
import { useState, useRef } from 'react'
import { Button } from '@/components/button'
import { Checkbox, CheckboxField, CheckboxGroup } from '@/components/checkbox'
import { Dialog, DialogActions, DialogBody, DialogTitle } from '@/components/dialog'
import { Description, Field, Fieldset, Label } from '@/components/fieldset'
import { Heading } from '@/components/heading'
import { Input } from '@/components/input'
import { Link } from '@/components/link'
import { Select } from '@/components/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { Text } from '@/components/text'
import { Textarea } from '@/components/textarea'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import { IconCopy } from '@tabler/icons-react'

export default function Page() {
  let [isOpen, setIsOpen] = useState(false)
  let [isOpen1, setIsOpen1] = useState(false)

  const textRef = useRef(null)

  const handleCopy = () => {
    if (textRef.current) {
      const text = textRef.current.innerText
      navigator.clipboard
        .writeText(text)
        .then(() => {
          //   console.log('Text copied to clipboard')
          // Optionally, provide some feedback to the user
          //   alert('Text copied to clipboard')
        })
        .catch((err) => {
            console.error('Failed to copy text: ', err)
        })
    }
  }
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <div className="flex flex-col gap-[40px]">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400"
            >
              <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
              Back
            </Link>
            <div className="flex items-center justify-between">
              <Heading>Promo Code</Heading>
              <div className="flex items-center gap-[15px]">
                <Button outline onClick={() => setIsOpen1(true)} className="cursor-pointer">
                  Refund
                </Button>
                <Button
                  onClick={() => setIsOpen(true)}
                  className="flex cursor-pointer items-center gap-2 rounded-md border border-[#111] bg-black px-[15px] py-[6px] text-[14px] text-white hover:bg-[#222]"
                >
                  Generate Code
                </Button>
              </div>
            </div>
            <div className="mt-4 block">
              <Table className="">
                <TableHead>
                  <TableRow>
                    <TableHeader>Code</TableHeader>
                    <TableHeader>Product Name</TableHeader>
                    <TableHeader>Status</TableHeader>
                    <TableHeader className="text-right">Created</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={handleCopy}>
                          <IconCopy stroke={2} className="w-[15px]" />
                        </button>
                        <span ref={textRef}>DYOJlHQ9ynb5Kgj'3</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-zinc-500">Product Name1</TableCell>
                    <TableCell>Purchase</TableCell>
                    <TableCell className="text-right">31 July 2024</TableCell>
                  </TableRow>
                  {/* <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={handleCopy}>
                          <IconCopy stroke={2} className="w-[15px]" />
                        </button>
                        <span ref={textRef}>jNBV4pTcaonoYF'3</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-zinc-500">Product Name2</TableCell>
                    <TableCell>Refund</TableCell>
                    <TableCell className="text-right">4 July 2024</TableCell>
                  </TableRow> */}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      {/* pop up */}
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Generate Code</DialogTitle>

        <DialogBody>
          <Field>
            <Label>Product Name</Label>
            <Input name="amount" type="text" placeholder="No of codes" />
          </Field>
        </DialogBody>
        <DialogActions>
          <Button className="cursor-pointer" plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button className="cursor-pointer">Save</Button>
        </DialogActions>
      </Dialog>
      {/* refund code */}

      <Dialog open={isOpen1} onClose={setIsOpen1}>
        <DialogTitle>Refund payment</DialogTitle>
        <Text>The refund will be reflected in the customer’s bank account 2 to 3 business days after processing.</Text>
        <DialogBody>
          <div className="flex flex-col gap-3">
            <Field>
              <Label>Code</Label>
              <Textarea name="" id="" rows="5"></Textarea>
            </Field>
            <Field>
              <Label>Reason</Label>
              <Select name="status">
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="delayed">Delayed</option>
                <option value="canceled">Canceled</option>
              </Select>
            </Field>
            <Fieldset>
              <CheckboxGroup>
                <CheckboxField>
                  <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
                  <Label>Notify customer</Label>
                  <Description>An email notification will be sent to this customer.</Description>
                </CheckboxField>
              </CheckboxGroup>
            </Fieldset>
          </div>
        </DialogBody>
        <DialogActions>
          <Button className="cursor-pointer" plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button className="cursor-pointer">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

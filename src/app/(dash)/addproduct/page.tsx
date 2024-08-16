"use client";
import { useState, useRef, useEffect } from 'react'
import { Field, Label } from '@/components/fieldset';
import { Heading } from '@/components/heading';
import { Link } from '@/components/link'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import { Input } from '@/components/input';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default function Page() {
  const [editorContent, setEditorContent] = useState('');
  const editorRef = useRef(null);

  // useEffect(() => {
  //   if (editorRef.current) {
  //     const quill = new Quill(editorRef.current, {
  //       theme: 'snow',
  //     });

  //     quill.on('text-change', () => {
  //       setEditorContent(quill.root.innerHTML);
  //     });

  //     // Set the initial value
  //     quill.root.innerHTML = editorContent;
  //   }
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle the form submission
  //   // console.log('Form submitted:', { editorContent });
  // };

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <div className="flex flex-col gap-[40px]">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Back
        </Link>
            <Heading>Add Product</Heading>
            <form >
              <div className="flex flex-col gap-[25px] max-w-[800px]">
                <div className="grid grid-cols-12 gap-[15px]">
                  <div className="col-span-12 md:col-span-8">
                    <Field className="flex flex-col gap-[10px]">
                      <Label className="font-medium text-black">Product name</Label>
                      <div className="d-block">
                        <Input name="productName" placeholder="Name of the product" type="text" />
                      </div>
                    </Field>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <Field className="flex flex-col gap-[10px]">
                      <Label className="font-medium text-black">Price</Label>
                      <div className="flex items-center gap-[15px]">
                        <div className="flex-grow">
                          <Input name="price" placeholder="" type="number" />
                        </div>
                        <div className="flex-shrink-0">
                          <h6 className="text-[16px] font-medium text-black">USD</h6>
                        </div>
                      </div>
                    </Field>
                  </div>
                </div>
                <Field className="flex flex-col gap-[10px] max-w-[527px]">
                  <Label className="font-medium text-black">Content</Label>
                  <div className="d-block">
                    <Input name="search" placeholder="Search for a repo" type="text" />
                  </div>
                </Field>
                <div className="block">
                  <div className="relative inline-block overflow-hidden w-[210px]">
                    <h4 className="rounded-md bg-[#e4e4e4] text-[14px] font-medium capitalize text-black py-[10px] px-[15px] text-center w-[210px]">
                      upload file instead
                    </h4>
                    <input type="file" name="fileUpload" id="fileUpload" className="absolute top-0 left-0 opacity-0 cursor-pointer z-[4] py-[10px] w-[210px]" />
                  </div>
                </div>
                <div className="block">
                  <div ref={editorRef} className="ql-container ql-snow" />
                </div>
                <div className="block">
                  <button type="submit" className="text-white text-[16px] py-[8px] px-[30px] rounded-md bg-black">
                    Create Product
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import Footer from '../../../components/frontend/footer'
import Header from '../../../components/frontend/header'
import ImageTextList from '../../../components/frontend/ImageTextList'
import ProductBlock from '../../../components/frontend/ProductBlock'
import p1 from '../../../images/logos/img.jpg'
import image from '../../../images/logos/logo.png'

const Page = () => {
  const imgitems = [
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://reactjs.com/&size=24',
      text: 'React js',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nextjs.org/&size=24',
      text: 'Next js',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://angular.dev/&size=24',
      text: 'Angular js',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nodejs.org/&size=24',
      text: 'Node js',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://expressjs.com/&size=24',
      text: 'express js',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://github.com/&size=24',
      text: 'Github',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.mongodb.com/&size=24',
      text: 'mongoDB',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://vuejs.org/&size=24',
      text: 'vue js',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://code.visualstudio.com/&size=24',
      text: 'visualstudio',
    },

    // Add more items here
  ]

  const items = [
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://reactjs.com/&size=24',
      text: 'React js',
      tag: 'Featured',
      person:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://reactjs.com/&size=24',
      title: 'title heading text',
      des: 'Fugiat culpa eiusmod non minim qui sint ex commodo consectetur minim pariatur commodo incididunt eu.',
      link: '/',
      pername: 'Tony',
      reviews: '5 Reviews',
      price: '79.00',
      totalprice: '100.00',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nextjs.org/&size=24',
      text: 'React js',
      tag: 'Featured',
      person:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nextjs.org/&size=24',
      title: 'title heading text',
      des: 'Fugiat culpa eiusmod non minim qui sint ex commodo consectetur minim pariatur commodo incididunt eu.',
      link: '/',
      pername: 'Tony',
      reviews: '5 Reviews',
      price: '79.00',
      totalprice: '100.00',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com/&size=24',
      text: 'React js',
      tag: 'Featured',
      person:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://google.com/&size=24',
      title: 'title heading text',
      des: 'Fugiat culpa eiusmod non minim qui sint ex commodo consectetur minim pariatur commodo incididunt eu.',
      link: '/',
      pername: 'Tony',
      reviews: '5 Reviews',
      price: '79.00',
      totalprice: '100.00',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://Yahoo.com/&size=24',
      text: 'React js',
      tag: 'Featured',
      person:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://Yahoo.com/&size=24',
      title: 'title heading text',
      des: 'Fugiat culpa eiusmod non minim qui sint ex commodo consectetur minim pariatur commodo incididunt eu.',
      link: '/',
      pername: 'Tony',
      reviews: '5 Reviews',
      price: '79.00',
      totalprice: '100.00',
    }

    // Add more items here
  ]

  return (
    <>
      <Header />

      <section className="block bg-white pt-[26px] pb-[100px] dark:bg-[#000]">
        <div className="mx-auto max-w-[1228px] px-[15px]">
          <Link href="/" className="flex items-center gap-1 text-[14px] text-[#60646c] dark:text-white">
            <FiArrowLeft /> <span>Back</span>{' '}
          </Link>
          <div className="flex flex-col gap-[30px]  -mt-[20px]">
            <div className="mx-auto block w-full md:w-[604px]">
              <div className="flex flex-col gap-[15px]">
                <div>
                  <h5 className="float-start rounded-full bg-[#fff3d0] px-[6px] py-[4px] text-[12px] text-[#000] dark:bg-[#403425] dark:text-[#e2bc5d]">
                    Featured
                  </h5>
                </div>
                <div className="block">
                  <h1 className="text-[32px] font-bold leading-[40px] text-[#000] dark:text-white">
                  Effortless Collaboration: Work seamlessly with your team in
                  </h1>
                </div>
                <div className="block h-[324px] rounded-md overflow-hidden">
                  <Image src={image} alt="image" className="h-full w-full object-cover" />
                </div>
                <div className="flex justify-center gap-3 border-b border-[#ebebef] dark:border-[#222324] py-[20px]">
                  <Link href="/" className="w-full rounded-md border border-[#ededed] bg-[#ededed] px-[30px] py-[6px] text-[14px] text-[#000] hover:bg-[#f9f9f9] text-center">
                    Preview
                  </Link>
                  <Link href="/payments" className="w-full  text-center rounded-lg bg-[#000] px-[30px] py-[6px] text-[13px] text-white dark:bg-slate-900">
                    Buy Now
                  </Link>
                </div>
             
                <div className="flex items-center justify-between pb-[15px]  border-b border-[#ebebef] dark:border-[#222324]">
                  <h3 className="text-[14px] text-[#000] dark:text-white">Price</h3>
                  <h3 className="text-[14px] text-[#000] dark:text-white">
                    $79.99 <span className="font-normal italic line-through">100.99</span>
                  </h3>
                </div>

                <div className="flex items-center justify-between pb-[15px]  border-b border-[#ebebef] dark:border-[#222324]">
                  <h3 className="text-[14px] text-[#000] dark:text-white">Developer</h3>
                  <div className="flex items-center gap-[15px]">
                    <div className="flex-shrink-0">
                      <Image
                        src={p1}
                        alt="image"
                        className="inline-block h-[28px] w-[28px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-[14px] italic leading-[20px] text-[#000] dark:text-white">Rohit</p>
                    </div>
                  </div>
                </div>
             
                <div className="flex flex-col gap-[15px] pb-[15px]">
                  <h3 className="text-[14px] text-[#000] dark:text-white">Tech Stack</h3>
                  <div className="flex flex-wrap items-center gap-[15px]">
                    <ImageTextList imgitems={imgitems} />
                  </div>
                </div>
              
                
                <div className="flex flex-col gap-[15px] border-t border-[#ebebef] dark:border-[#222324] pt-[20px]">
                  <h3 className="text-[14px] text-[#000] dark:text-white">About this</h3>
                  <p className="text-[16px] text-[#000] dark:text-white">
                  Collaboration is key in the modern workspace, and Product Name makes it easier than ever to work with your team. With real-time collaboration features, multiple users can work on the same project simultaneously, ensuring that everyone stays on the same page. You can leave comments, track changes, and manage projects efficiently—all within a single platform. No more juggling between different tools or worrying about version control; everything you need is right at your fingertips.
                  </p>
                  <p className="text-[16px] text-[#000] dark:text-white">
                  Security and accessibility are at the heart of Product Name. Your projects are securely stored in the cloud, allowing you to access them from any device, anytime. Whether you're working from your office, home, or on the go, you can pick up right where you left off. And with our cross-platform compatibility, you can easily switch between your computer, tablet, or smartphone without missing a beat. Your creativity doesn't have to be tied to one location.
                  </p>
                  <p className="text-[16px] text-[#000] dark:text-white">
                  At Product Name, we believe in providing continuous value to our users. That's why we're committed to regular updates, bringing you the latest features and improvements based on your feedback. Our user-friendly interface, combined with customizable templates and tools, ensures that you can create professional-quality work in no time. Plus, with affordable pricing plans and 24/7 customer support, you can be confident that Product Name will meet your needs, no matter where your creative journey takes you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block bg-white py-[100px] dark:bg-[#000]">
        <div className="mx-auto max-w-[1228px] px-[15px]">
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-[20px] font-semibold text-[#000] dark:text-white">Related Products</h3>
            <div className="grid grid-cols-1 gap-[30px] md:grid-cols-4">
              <ProductBlock items={items} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Page

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
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://facebook.com/&size=24',
      text: 'React js',
      tag: 'Featured',
      person:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://facebook.com/&size=24',
      title: 'title heading text',
      des: 'Fugiat culpa eiusmod non minim qui sint ex commodo consectetur minim pariatur commodo incididunt eu.',
      link: '/',
      pername: 'Tony',
      reviews: '5 Reviews',
      price: '79.00',
      totalprice: '100.00',
    },

    // Add more items here
  ]
  return (
    <>
      <Header />

      <section className="block bg-white py-[100px] dark:bg-black">
        <div className="container mx-auto px-[15px]">
          <div className="flex flex-col gap-[30px]">
            <Link href="/" className="flex items-center gap-1 text-[16px] text-black dark:text-white">
              <FiArrowLeft /> <span>Back</span>{' '}
            </Link>

            <div className="mx-auto block w-full md:w-[800px]">
              <div className="flex flex-col gap-[25px]">
                <div>
                  <h5 className="float-start rounded-full bg-slate-300 px-[6px] py-[2px] text-[14px] text-black dark:text-white">
                    Featured
                  </h5>
                </div>
                <div className="block">
                  <h1 className="text-[30px] font-semibold leading-[34px] text-black dark:text-white">
                    Main heading title Consequat consequat ex enim dolore commodo minim .
                  </h1>
                </div>
                <div className="block h-[400px]">
                  <Image src={image} alt="image" className="h-full w-full object-cover" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-[18px] font-semibold text-black dark:text-white">Price</h3>
                  <h3 className="text-[18px] font-semibold text-black dark:text-white">
                    $79.99 <span className="font-normal italic line-through">100.99</span>
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-[18px] font-semibold text-black dark:text-white">Developer</h3>
                  <div className="flex items-center gap-[15px]">
                    <div className="flex-shrink-0">
                      <Image
                        src={p1}
                        alt="image"
                        className="inline-block h-[28px] w-[28px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-[14px] italic leading-[20px] text-black dark:text-white">by Rohit</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <Link href="/" className="rounded-lg bg-black px-[30px] py-[8px] text-white text-[14px]">
                  Preview
                  </Link>
                  <Link href="/confirmpayment" className="rounded-lg bg-black px-[30px] py-[8px] text-white text-[14px]">
                    Buy Now
                  </Link>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <h3 className="text-[18px] font-semibold text-black dark:text-white">Tech Stack</h3>
                  <div className="flex flex-wrap items-center gap-[15px]">
                    <ImageTextList imgitems={imgitems} />
                  </div>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <h3 className="text-[18px] font-semibold text-black dark:text-white">About this</h3>
                  <p className="text-[16px] text-black dark:text-white">
                    Commodo sint Lorem duis qui. Est enim laboris Lorem ad. Laboris quis cillum excepteur sit. Mollit
                    laboris ullamco amet occaecat ut minim cupidatat tempor eiusmod tempor aute id. Laboris nisi sint
                    magna consectetur duis fugiat deserunt occaecat non cupidatat magna amet adipisicing incididunt.
                    Occaecat ad ad dolore ipsum proident adipisicing laborum laborum qui excepteur velit. Amet excepteur
                    elit dolor aute ut proident adipisicing exercitation aute Lorem anim culpa pariatur est. Amet elit
                    sint elit nulla commodo anim cillum reprehenderit anim.
                  </p>
                  <p className="text-[16px] text-black dark:text-white">
                    Dolore incididunt consectetur nulla incididunt id. Laboris proident tempor minim ex et ipsum
                    nostrud. Nisi eu aliquip irure ipsum non voluptate est id proident dolor occaecat. Proident non sit
                    do aliqua culpa reprehenderit. Elit officia ea enim elit exercitation cupidatat Lorem ex laboris
                    laboris dolor exercitation pariatur mollit. Culpa qui quis Lorem dolor irure est eiusmod velit sint
                    ut. Dolore ex aliquip aute exercitation sit reprehenderit ea ea labore amet consectetur tempor.
                    Fugiat elit reprehenderit exercitation proident dolore velit cupidatat. Eiusmod proident culpa qui
                    reprehenderit cupidatat ut. Ad qui veniam fugiat in aliqua deserunt consequat consectetur ad.
                  </p>
                  <p className="text-[16px] text-black dark:text-white">
                    Exercitation qui commodo consequat fugiat occaecat non fugiat nostrud ipsum. Quis ut est deserunt
                    tempor nulla ipsum ad. Dolore ullamco ad consectetur laboris. Est ullamco eu pariatur excepteur
                    reprehenderit nostrud. Do excepteur et dolor commodo veniam nostrud ut sit incididunt commodo.
                    Tempor incididunt reprehenderit officia ut anim cupidatat eu adipisicing laboris mollit aute cillum.
                    Deserunt irure pariatur dolor nostrud dolore aliqua reprehenderit irure cillum voluptate ad culpa
                    qui cillum. Tempor amet proident minim eu irure adipisicing duis eiusmod veniam enim est voluptate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block bg-white py-[100px] dark:bg-black">
        <div className="container mx-auto px-[15px]">
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-[20px] font-semibold text-black dark:text-white">Related Products</h3>
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

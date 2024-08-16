import { IconDeviceImac, IconMoon, IconSun } from '@tabler/icons-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import DropLinks from '../../components/frontend/DropLinks'
import { IconMenu } from '@tabler/icons-react';


const Header = () => {

  // State to track the toggle
  const [isToggled, setIsToggled] = useState(false);

  // Function to toggle the state
  const toggleClass = () => {
    setIsToggled(!isToggled);
  };


  const items = [
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://reactjs.com/&size=24',
      text: 'React js',
      title: 'title heading text',
      link: '/',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nextjs.org/&size=24',
      text: 'Next js',
      title: 'title heading text',
      link: '/',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://angular.dev/&size=24',
      text: 'Angular js',
      title: 'title heading text',
      link: '/',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nodejs.org/&size=24',
      text: 'Node js',
      title: 'title heading text',
      link: '/',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://expressjs.com/&size=24',
      text: 'express js',
      title: 'title heading text',
      link: '/',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://github.com/&size=24',
      text: 'Github',
      title: 'title heading text',
      link: '/',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.mongodb.com/&size=24',
      text: 'mongoDB',
      title: 'title heading text',
      link: '/',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://vuejs.org/&size=24',
      text: 'vue js',
      title: 'title heading text',
      link: '/',
    },
    {
      imageUrl:
        'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://code.visualstudio.com/&size=24',
      text: 'visualstudio',
      title: 'title heading text',
      link: '/',
    },

    // Add more items here
  ]

  const [theme, setTheme] = useState('system')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.add(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    document.documentElement.classList.remove('light', 'dark')

    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      document.documentElement.classList.add(systemTheme)
      localStorage.removeItem('theme')
    } else {
      document.documentElement.classList.add(newTheme)
      localStorage.setItem('theme', newTheme)
    }
  }

  return (
    <>
      <header className="block bg-white py-[10px] dark:bg-black border-b border-slate-200 fixed md:static left-0 right-0 top-0 z-[300] md:border-none">
        <div className="container mx-auto px-[15px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-[80px]">
            <div className="flex-shrink-0 flex justify-between md:justify-start">
              <h2 className="text-slate-500">LOGO HERE</h2>
              <button type="button"  onClick={toggleClass} className='block md:hidden text-black dark:text-white'><IconMenu stroke={2} /></button>
            </div>
            <div className={`flex-grow-1 flex md:w-full md:items-center md:justify-between flex-col md:flex-row gap-[15px] md:gap-0 fixed md:static bg-white dark:bg-black top-[45px] left-0 bottom-0 z-[100]  shadow md:shadow-transparent md:p-0 md:opacity-100 md:translate-x-[0px] ${
              isToggled ? ' w-[340px] p-[15px]  translate-x-[0px] opacity-100 ease-linear transition duration-150' : 'w-0  -translate-x-[100px] opacity-0 '
            }`}
            >
              <div className="group">
                <Link href="/" className="flex items-center text-[14px] gap-2 text-black dark:text-white">
                  {' '}
                  <span>Categories</span> <IoMdArrowDropdown />
                </Link>
                <div className="absolute left-0 right-0 z-[10] hidden bg-white py-[15px] shadow group-hover:block dark:bg-black">
                  <div className="container mx-auto px-[15px]">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-[15px]">
                      <DropLinks items={items} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-[15px] md:gap-[35px]">
                <Link href="/" className="text-[14px] text-black dark:text-white">
                  Home
                </Link>
                <Link href="/" className="text-[14px] text-black dark:text-white">
                  About
                </Link>
                <Link href="/" className="text-[14px] text-black dark:text-white">
                  Products
                </Link>
                <Link href="/" className="text-[14px] text-black dark:text-white">
                  Contact
                </Link>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mt-auto md:mt-0">
                <Link
                  href="/"
                  className="inline-block rounded-lg bg-black px-[30px] py-[10px] text-[14px] text-white hover:bg-[#222] dark:bg-white dark:text-black dark:hover:bg-[#cfcfcf] text-center"
                >
                  Login
                </Link>
                <Link
                  href="/"
                  className="inline-block rounded-lg bg-black px-[30px] py-[10px] text-[14px] text-white hover:bg-[#222] dark:bg-white dark:text-black dark:hover:bg-[#cfcfcf] text-center"
                >
                  Buy Now
                </Link>
                <div className="flex justify-center md:justify-end gap-[10px]">
                  <button
                    className={`p-2 ${theme === 'light' ? 'bg-gray-300' : ''}`}
                    onClick={() => handleThemeChange('light')}
                  >
                    <IconSun stroke={2} className="w-[20px] text-black dark:text-white" />
                  </button>
                  <button
                    className={`p-2 ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}
                    onClick={() => handleThemeChange('dark')}
                  >
                    <IconMoon stroke={2} className="w-[20px] text-black dark:text-white" />
                  </button>
                  <button
                    className={`p-2 ${theme === 'system' ? 'bg-gray-400' : ''}`}
                    onClick={() => handleThemeChange('system')}
                  >
                    <IconDeviceImac stroke={2} className="w-[20px] text-black dark:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

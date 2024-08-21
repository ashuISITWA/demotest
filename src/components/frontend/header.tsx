import { IconDeviceImac, IconMenu, IconMoon, IconSearch, IconSun } from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io'
import DropLinks from '../../components/frontend/DropLinks'
import logo from '../../images/logo.jpg'

const Header = () => {


  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  // State to track the toggle
  const [isToggled, setIsToggled] = useState(false)

  // Function to toggle the state
  const toggleClass = () => {
    setIsToggled(!isToggled)
  }

  // Define state to track the active class
  const [isActive, setIsActive] = useState(false)

  // Toggle the active state when button is clicked
  const toggleClass1 = () => {
    setIsActive(!isActive)
  }

  // Define state to track the active class
  const [isActive2, setIsActive2] = useState(false)

  // Toggle the active state when button is clicked
  const toggleClass2 = () => {
    setIsActive2(!isActive2)
  }

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

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
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
      <header className={`${
        isSticky ? 'fixed  shadow' : 'md:static'
      } transition-all duration-300 left-0 right-0 top-0 z-[300] block border-b border-slate-200 bg-white py-[10px] dark:bg-[#000]  md:border-none`}>
        <div
          className={`absolute left-0 top-[80px] z-[331] w-[330px] bg-white py-[15px] shadow group-hover:block dark:bg-[#000] md:right-0 md:top-[50px] md:w-full ${isActive ? 'block' : 'hidden'}`}
        >
          <div className="mx-auto max-w-[1228px] px-[15px]">
            <div className="grid grid-cols-1 gap-[15px] md:grid-cols-5">
              <DropLinks items={items} />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1228px] px-[15px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="flex flex-shrink-0 justify-between md:justify-start">
              <Link href="/home" className="inline-block w-[100px]">
                <Image src={logo} alt="logo" className="w-full" />
              </Link>

              <button type="button" onClick={toggleClass} className="block text-[#000] dark:text-white md:hidden">
                <IconMenu stroke={2} />
              </button>
            </div>
            <div
              className={`flex-grow-1 fixed bottom-0 left-0 top-[45px] z-[100] flex flex-col gap-[15px] bg-white shadow dark:bg-[#000] md:static md:w-full md:translate-x-[0px] md:flex-row md:items-center md:justify-between md:gap-0 md:p-0 md:opacity-100 md:shadow-transparent ${
                isToggled
                  ? 'w-[340px] translate-x-[0px] p-[15px] opacity-100 transition duration-150 ease-linear'
                  : 'w-0 -translate-x-[100px] opacity-0'
              }`}
            >
              <div className="group">
                <button
                  type="button"
                  onClick={toggleClass1}
                  className="flex items-center font-medium gap-2 text-[14px] text-[#000] dark:text-white"
                >
                  {' '}
                  <span>Categories</span> <IoMdArrowDropdown />
                </button>
              </div>
{/*            
              <div className="mx-auto hidden w-[400px] md:block">
                <form action="">
                  <div className="flex items-center rounded-lg bg-[#F2F2F2]">
                    <div className="flex-grow">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="search something"
                        className="w-full bg-transparent px-[20px] py-[6px] text-[14px] text-[#000] focus-visible:outline-0"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <button type="submit" className="bg-transparent p-[6px] text-[#000]">
                        <IconSearch stroke={1} className="w-[20px]" />
                      </button>
                    </div>
                  </div>
                </form>
              </div> */}

              <div className="mt-auto flex flex-col gap-[10px] md:mt-0 md:flex-row md:items-center">
                {/* drop color light dark */}
                <div className=" relative">
                  <button type="button" onClick={toggleClass2} className='p-[6px] hover:bg-[#ededed] rounded-md group'>
                    <IconDeviceImac stroke={2} className="w-[18px] text-[#000]  dark:hover:text-black dark:text-white group-hover:dark:text-black" />
                  </button>
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-[40px] z-[33] min-w-[100px] rounded-lg border border-slate-200 dark:border-[#1c1c1c] bg-white p-[6px] shadow dark:bg-[#000] ${isActive2 ? 'block' : 'hidden'}`}
                  >
                    <div className="flex flex-col justify-center gap-[2px] md:justify-end">
                      <button
                        className={`flex items-center gap-2 rounded-md p-2 ${theme === 'light' ? 'bg-gray-300' : ''}`}
                        onClick={() => handleThemeChange('light')}
                      >
                        <IconSun stroke={2} className="w-[20px] text-[#000] dark:text-white" />
                        <span className="text-[14px] text-[#000] dark:text-white">Light</span>
                      </button>
                      <button
                        className={`flex items-center gap-2 rounded-md p-2 ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}
                        onClick={() => handleThemeChange('dark')}
                      >
                        <IconMoon stroke={2} className="w-[20px] text-[#000] dark:text-white" />
                        <span className="text-[14px] text-[#000] dark:text-white">Dark</span>
                      </button>
                      <button
                        className={`flex items-center gap-2 rounded-md p-2 ${theme === 'system' ? 'bg-gray-400' : ''}`}
                        onClick={() => handleThemeChange('system')}
                      >
                        <IconDeviceImac stroke={2} className="w-[20px] text-[#000] dark:text-white" />
                        <span className="text-[14px] text-[#000] dark:text-white">System</span>
                      </button>
                    </div>
                  </div>
                </div>
                <Link
                  href="/"
                  className="rounded-md border border-[#ededed] bg-[#ededed] px-[15px] py-[6px] text-[14px] text-[#000] hover:bg-[#ededed] text-center"
                >
                  Sell
                </Link>
                <Link
                  href="/"
                  className="rounded-md bg-[#000] px-[15px] py-[6px] text-[14px] text-white hover:bg-[#f9f9f9] hover:text-black dark:bg-slate-900 dark:hover:text-white text-center"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

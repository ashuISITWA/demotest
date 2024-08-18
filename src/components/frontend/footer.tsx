import { IconDeviceImac, IconMoon, IconSun } from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import logo from '../../images/logo.jpg'




const Footer = () => {
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
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
  
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.classList.add(systemTheme);
      localStorage.removeItem('theme');
    } else {
      document.documentElement.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };
  return (
    <>
      <footer className="block bg-white dark:bg-[#000]  border-t border-slate-200">
        <div className="block py-[50px]">
          <div className="max-w-[1228px] px-[15px] mx-auto">
            <div className="flex flex-col md:flex-row gap-[30px] md:gap-[50px]">
              <div className="flex-shrink-0">
                <div className="flex flex-col gap-[30px]">
                <Link href="/home" className="inline-block w-[100px]">
                <Image src={logo} alt="logo" className="w-full" />
              </Link>
                </div>
              </div>
              <div className="flex-grow-1 w-full">
                <div className="flex flex-col gap-[15px]">
                  <h4 className="text-[16px] font-semibold text-[#000] dark:text-white">Categories</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-[15px]">
                    <div className="flex flex-col gap-[15px]">
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Next.js Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Node.js Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Angular Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Flask Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Svelte Boilerplates
                      </Link>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Next.js Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Node.js Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Angular Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Flask Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Svelte Boilerplates
                      </Link>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Next.js Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Node.js Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Angular Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Flask Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Svelte Boilerplates
                      </Link>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Next.js Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Node.js Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Angular Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Flask Boilerplates
                      </Link>
                      <Link
                        href="/"
                        className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]"
                      >
                        Svelte Boilerplates
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="flex flex-col gap-[15px]">
                  <h4 className="text-[16px] font-semibold text-[#000] dark:text-white">Preferences</h4>
                  <div className="flex gap-[10px]">
                    <button
                      className={`p-2 rounded-md ${theme === 'light' ? 'bg-gray-300' : ''}`}
                      onClick={() => handleThemeChange('light')}
                    >
                      <IconSun stroke={2} className="w-[20px] text-[#000] dark:text-white" />
                    </button>
                    <button
                      className={`p-2 rounded-md ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}
                      onClick={() => handleThemeChange('dark')}
                    >
                      <IconMoon stroke={2} className="w-[20px] text-[#000] dark:text-white" />
                    </button>
                    <button
                      className={`p-2 rounded-md ${theme === 'system' ? 'bg-gray-400' : ''}`}
                      onClick={() => handleThemeChange('system')}
                    >
                      <IconDeviceImac stroke={2} className="w-[20px] text-[#000] dark:text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block border-t border-slate-200 py-[15px]">
          <div className="max-w-[1228px] px-[15px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <p className="text-[14px] text-[#000] dark:text-[#5b5e61]">Copyright &copy; 2024</p>
              </div>
              <div className="flex items-center gap-3">   
                <Link href="/"  className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]">Privacy policy</Link>
                <Link href="/"  className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]">Terms of use </Link>
                <Link href="/"  className="text-[14px] text-slate-500 hover:text-[#000] dark:text-white dark:hover:text-[#5b5e61]">Disclaimer</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer

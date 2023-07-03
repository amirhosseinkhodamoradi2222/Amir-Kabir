import { useState } from "react";
import {Link} from 'react-router-dom'
import { BsMinecartLoaded } from "react-icons/bs";

export default function Navbars() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <>
   <nav className="bg-gray-800 font-light lg:w-full md:w-full sticky z-10 top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white text-xl font-bold text-inherit no-underline">هلدینگ تخصصی برق و کامپیوتر</Link>
          </div>
          {/* Menu Button (Mobile) */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-controls="mobile-menu" aria-expanded={isOpen} onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg className={`block h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              {/* Icon when menu is open. */}
              <svg className={`block h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          {/* Menu Items (Desktop) */}
          <div className="hidden sm:block">
            <div className="flex items-center justify-end">
              <Link to="/store" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm no-underline font-medium">فروشگاه</Link>
              <Link to="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm no-underline font-medium">وبلاگ</Link>
              <Link to="/aboute" className="text-white px-3 py-2 rounded-md text-sm font-medium no-underline">درباره ما</Link>
              <Link to="/cardshop" className="text-white hover:text-white px-3 py-2 rounded-md text-sm no-underline font-medium">
                <BsMinecartLoaded size={20} />  
              </Link>
              <Link to="/contuct" className="text-orange-500 hover:text-white px-3 py-2 rounded-md text-sm no-underline font-medium">درخواست</Link>
              <Link to="/admin" className="text-white bg-oreng hover:text-white px-3 ml-1 rounded-sm text-sm no-underline font-light">ورود</Link>
              <span className="text-white">/</span>
              <Link to="/register" className="text-gray-300 px-1 hover:text-white rounded-md text-sm no-underline font-bold">ثبت نام</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block h-80 ' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3">
          <Link to="/aboute" className="block text-white font-medium py-2 no-underline">صفحه اصلی</Link>
          <Link to="/store" className="block text-gray-300 hover:text-white font-medium py-2 no-underline">فروشگاه</Link>
          <Link to="/blog" className="block text-gray-300 hover:text-white font-medium py-2 no-underline">وبلاگ</Link>
          <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm no-underline font-medium">ورود</Link>
              <Link to="/register" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm no-underline font-medium">ثبت نام</Link>
        </div>
      </div>
    </nav>
    </>
  );
}

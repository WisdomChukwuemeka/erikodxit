"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

const closeMenu = () => {
  setIsOpen(false);
};


useEffect(() => {
  const handleClickOutside = (event) => {
    // Check if click is outside both menu and button
    if (menuRef.current && !menuRef.current.contains(event.target) && 
        !event.target.closest('button[aria-label="Toggle menu"]')) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    // Add a small delay to prevent immediate closing
    setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isOpen]);



  return (
    <>
      <div className="relative bg-white shadow-sm">
        <header>
        <nav className="flex items-center justify-between px-8 py-4 shadow-sm z-40">
          <Link href="/">
                <h1 className="text-xl font-bold text-emerald-600">Erikdox<span className="text-gray-700">IT</span></h1>
          </Link>

        <div className="flex items-center gap-6">
<ul className="hidden md:flex gap-6 text-gray-600">
 <li className="li-hover">
  <Link href="/" className="block">
    Home
  </Link>
</li>

  <li className="li-hover"><Link href={"/#courses"}>Courses</Link></li>
  <li className="li-hover"><Link href="/#about">About</Link></li>
  <li className="li-hover"><Link href="/#contact">Contact Us</Link></li>
</ul>

            

            <div className="hidden md:flex gap-3">
              <button className="px-2 md:px-4 py-1 md:py-2 border border-green-300 rounded text-emerald-500">Log In</button>
              <Link href="/register">
              <button className="cursor-pointer px-2 md:px-4 py-1 md:py-2 bg-emerald-500 text-white rounded">
                Sign up
              </button> 
              </Link>
            </div>
            

<button
  type="button"
  onClick={toggleMenu}
  aria-label="Toggle menu"
  className="md:hidden text-black relative z-40"
>
  <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"} text-2xl`} />
</button>
          </div>

        </nav>
  </header>

        {isOpen && (
          <div 
            ref={menuRef}
            className="absolute text-center top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden z-50"
          >

          <ul className="flex flex-col gap-4 text-gray-600 mb-4">
            <li >
              <a href="/" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="/#courses" onClick={closeMenu}>Courses</a>
            </li>
            <li>
              <a href="/#about" onClick={closeMenu} className="hover:text-emerald-500">
                About
              </a>
            </li>
            <li>
              <a href="/#contact" onClick={closeMenu}>Contact Us</a>
            </li>
          </ul>
            <div className="flex flex-col gap-3 w-full px-8">
              <button className="w-full px-4 py-2 border border-green-300 rounded text-emerald-500">Log In</button>
              <Link href="/register"
              onClick={closeMenu}>
                <button className="w-full px-4 py-2 bg-emerald-500 text-white rounded">Sign up</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
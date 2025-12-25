"use client"
import Link from "next/link"

export const Nav = () => {
  return (
    <header>
      <nav className="flex items-center justify-between px-8 py-4 shadow-sm z-40">
        <Link href="/">
          <h1 className="text-xl font-bold text-emerald-600">
            Erikdox<span className="text-gray-700">IT</span>
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-gray-600">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#courses">Courses</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#contact">Contact Us</Link></li>
          </ul>

          <Link href="/register">
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition">
              Get Started
            </button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

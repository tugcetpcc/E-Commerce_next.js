import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
        <div className="container">
            <div className="flex w-fit gap-12 mx-auto font-medium py-6 text-blackish">
    <Link className="navbar__link relative" href="#">ANASAYFA</Link>
    <Link className="navbar__link relative" href="#">KATEGORİLER</Link>
    <Link className="navbar__link relative" href="#">ERKEK</Link>
    <Link className="navbar__link relative" href="#">KADIN</Link>
    <Link className="navbar__link relative" href="#">TAKI</Link>
    <Link className="navbar__link relative" href="#">PARFÜM</Link>
    <Link className="navbar__link relative" href="#">BLOG</Link>
    <Link className="navbar__link relative" href="#">İNDİRİM</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
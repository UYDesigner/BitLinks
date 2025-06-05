"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathName = usePathname()
    const navLinks = [{
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Shorten",
        path: "/shorten"
    },

    {
        name: "Contact us",
        path: "/contact"
    }]
    const btn = [
        { name: "Try Now", path: "/shorten" },
        // { name: "Github", path: "/github" }
    ]
    return (
        <header className='bg-[#033f47] w-full p-3 '>
            <nav className='flex items-center justify-between max-w-[1500px] mx-auto' >
                <Link href={'/'} ><h1 className='  text-white font-bold text-3xl cursor-pointer'>BitLinks</h1></Link>
                <ul className='hidden md:flex flex-row items-center justify-between  w-[400px] '>
                    {
                        navLinks.map((link, idx) => (
                            <li key={idx} >
                                <Link
                                    href={link.path}
                                    
                                    className={`cursor-pointer hover:text-white hover:font-semibold ${pathName === link.path ? "text-white font-[500]" : "text-gray-300"}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))

                    }
                </ul>
                <div className="btn flex  justify-between ">
                    {
                        btn.map((button, idx) => (
                            <Link href={button.path} key={idx} >
                                <button className='border-yellow-300 border py-1 px-2 rounded-lg cursor-pointer font-[500]  bg-yellow-300 hover:bg-amber-400 hover:border-yellow-400'>
                                    {button.name}
                                </button>
                            </Link>
                        ))
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar
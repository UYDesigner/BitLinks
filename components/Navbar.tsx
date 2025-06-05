"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";


const Navbar = () => {
    const pathName = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Shorten", path: "/shorten" },
        { name: "Contact us", path: "/contact" },
    ];

    const btn = [{ name: "Try Now", path: "/shorten" }];

    return (
        <header className="bg-[#033f47] w-full p-3 shadow-md">
            <nav className="flex items-center justify-between max-w-[1500px] mx-auto">
                {/* Logo */}
                <div className="flex">
                    <Link href={"/"} className="flex items-center" >
                        <div className="logo">
                            <Image
                                alt="logo"
                                src="/bitIcon.png"
                                width={50}
                                height={50}
                                
                            />
                        </div>
                        <h1 className="text-white font-bold text-3xl cursor-pointer">BitLinks</h1>
                    </Link>
                </div>
                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <li key={idx}>
                            <Link
                                href={link.path}
                                className={`cursor-pointer hover:text-white hover:font-semibold ${pathName === link.path ? "text-white font-semibold" : "text-gray-300"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Button */}
                <div className="hidden md:flex gap-2">
                    {btn.map((button, idx) => (
                        <Link href={button.path} key={idx}>
                            <button className="border-yellow-300 border py-1 px-4 rounded-lg font-medium bg-yellow-300 hover:bg-amber-400 hover:border-yellow-400">
                                {button.name}
                            </button>
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger Icon */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-[#033f47]">Menu</h2>
                    <button onClick={() => setSidebarOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <ul className="space-y-4">
                    {navLinks.map((link, idx) => (
                        <li key={idx}>
                            <Link
                                href={link.path}
                                onClick={() => setSidebarOpen(false)}
                                className={`block text-lg font-medium ${pathName === link.path ? "text-[#033f47]" : "text-gray-600"
                                    } hover:text-[#033f47]`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-6">
                    {btn.map((button, idx) => (
                        <Link href={button.path} key={idx}>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="w-full py-2 px-4 bg-yellow-300 text-[#033f47] font-semibold rounded-lg hover:bg-amber-400"
                            >
                                {button.name}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Backdrop when sidebar is open */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-30 z-40"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </header>
    );
};

export default Navbar;

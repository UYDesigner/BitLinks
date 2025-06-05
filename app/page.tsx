"use client"
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const btn = [
    { name: "Try Now", path: "/shorten" },
    // { name: "Github", path: "/github" },
  ];

  return (
    <main className="w-full bg-[#f9fafb]">
      <section className="grid grid-cols-1 sm:grid-cols-2 max-w-[1500px] mx-auto min-h-[90vh] px-4 py-10 sm:py-0">
        {/* Left Section */}
        <div className="flex flex-col order-2 sm:order-1 justify-center gap-6">
          <h4 className="font-bold text-[30px] sm:text-[34px] text-[#033f47] leading-tight">
            The best URL shortener in the market
          </h4>
          <p className="text-base sm:text-lg text-gray-700">
            We are the most straightforward and reliable URL shortener in the world. We understand the needs of users and provide seamless performance without any hassle.
          </p>
          <div className="text-[#06444d] font-semibold text-[21px] sm:text-[21px] h-[40px] sm:h-[50px] animate-pulse">
            <span className="">
              <Typewriter
                words={["Privacy Focused", "URL Shortener", "Fast & Easy", "Link Optimizer", "BitLinks Tool"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>

          <div className="flex flex-wrap gap-3 font-[500]">
            {btn.map((button, idx) => (
              <Link href={button.path} key={idx}>
                <button className="border-yellow-300 border py-2 px-8 rounded-lg cursor-pointer bg-yellow-300 hover:bg-amber-400 transition">
                  {button.name}
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="order-1 sm:order-2 flex justify-center items-center">
          <div className="relative w-[80%] h-[250px] sm:h-[80%] sm:max-h-[500px]">
            <Image
              alt="hero"
              src="/heroimg.webp"
              fill
              className="object-contain mix-blend-darken"
              priority

            />
          </div>
        </div>
      </section>
    </main>
  );
}

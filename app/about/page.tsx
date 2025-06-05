import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4">
      <section className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-md space-y-6">
        <h1 className="text-4xl font-bold text-[#033f47] text-center">
          About BitLinks
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          BitLinks is a fast, reliable, and user-friendly URL shortener that helps you
          transform long, messy links into clean and shareable ones. Whether your&rsquo;e a
          developer, a marketer, or just someone who wants simple links, BitLinks makes it easy.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our goal is to provide a seamless experience with minimal clutter and maximum speed.
          No ads, no distractions — just short links that work.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Built with modern technologies like <strong>Next.js</strong>, <strong>Tailwind CSS</strong>,
          and <strong>Mongodb</strong>, BitLinks is a tool you can trust.
        </p>

        <div className="text-center pt-4">
          <span className="text-sm text-gray-500">
            &copy; 2025 BitLinks - *Urvashi Yadav*. All rights reserved.
          </span>
        </div>
      </section>
    </main>
  );
}

export default page
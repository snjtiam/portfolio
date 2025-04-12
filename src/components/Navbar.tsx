"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real implementation, we would toggle the theme here
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#111111] backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-medium text-white hover:opacity-80 transition-opacity">
          SS.
        </Link>

        <div className="flex items-center space-x-5">
          <Link href="#skills" className="text-lg font-light text-white hover:text-[#33D2FF] transition-colors">
            Skills
          </Link>
          <Link href="#experience" className="text-lg font-light text-white hover:text-[#33D2FF] transition-colors">
            Experience
          </Link>
          <Link href="#projects" className="text-lg font-light text-white hover:text-[#33D2FF] transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-lg font-light text-white hover:text-[#33D2FF] transition-colors">
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full bg-transparent hover:bg-gray-800/40 transition-colors"
            aria-label="Toggle dark mode"
          >
            <Image src="/sun-icon.svg" alt="Sun icon" width={24} height={24} className="opacity-90" />
          </button>
        </div>
      </div>
    </nav>
  );
}

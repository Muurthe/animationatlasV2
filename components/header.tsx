"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Filter = "all" | "website" | "mobile";

export default function Header() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  return (
    <header className="h-10 w-full bg-[#050505] flex items-center px-10">
      {/* Logo */}
      <Link href="/" className="mr-12 flex items-center">
        <Image
          src="/logo.svg"
          alt="OWOW logo"
          width={60}
          height={20}
          className="h-5 w-auto"
          priority
        />
      </Link>

      {/* Navigation */}
      <nav className="flex items-center bg-[#1c1c1c] rounded-md p-1 h-7">
        <button
          onClick={() => setActiveFilter("all")}
          className={`h-5 px-5 rounded text-[10px] font-bold uppercase tracking-widest transition-colors ${
            activeFilter === "all"
              ? "bg-white text-black"
              : "text-white hover:bg-zinc-800"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setActiveFilter("website")}
          className={`h-5 px-5 rounded text-[10px] font-bold uppercase tracking-widest transition-colors ${
            activeFilter === "website"
              ? "bg-white text-black"
              : "text-white hover:bg-zinc-800"
          }`}
        >
          Website
        </button>

        <button
          onClick={() => setActiveFilter("mobile")}
          className={`h-5 px-5 rounded text-[10px] font-bold uppercase tracking-widest transition-colors ${
            activeFilter === "mobile"
              ? "bg-white text-black"
              : "text-white hover:bg-zinc-800"
          }`}
        >
          Mobile
        </button>
      </nav>

      {/* Search */}
      <div className="ml-auto w-80 h-7 bg-[#1c1c1c] rounded-md flex items-center px-3">
        <svg
          className="w-3 h-3 text-zinc-500 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none text-white placeholder:text-zinc-600 text-xs"
        />
      </div>
    </header>
  );
}
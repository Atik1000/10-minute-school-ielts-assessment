"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPhone, FaMagnifyingGlass, FaTriangleExclamation } from "react-icons/fa6";

export default function Navbar() {
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("currentLang") || "en";
    }
    return "en";
  });

  const handleLanguageChange = (prev: string) => {
    const nextLang = prev === "en" ? "bn" : "en";
    setCurrentLang(nextLang);
    localStorage.setItem("currentLang", nextLang);
    window.location.reload();
  };

  const menuItemStyle = "cursor-pointer hover:text-[#1CAB55]";

  return (
    <div className="w-full mx-auto bg-white py-3  fixed top-0 left-0 right-0 z-999">
      <div className="flex items-center justify-between gap-4 w-[1440px] px-18 mx-auto">
        <Link href="#">
          <Image
            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
            alt="Logo"
            className="h-7"
          />
        </Link>

        <div className="relative">
          <FaMagnifyingGlass className="absolute top-2 left-3 text-gray-600" size={20} />
          <input
            placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
            className={`h-10 w-[358px] rounded-full pl-12 border border-[#dbe1eb] text-sm`}
          />
        </div>
        <ul className="flex items-center gap-4">
          <li className={menuItemStyle}>Class 6-12</li>
          <li className={menuItemStyle}>Skill</li>
          <li className={menuItemStyle}>Admission</li>
          <li className={menuItemStyle}>Online Batch</li>
          <li className={menuItemStyle}>English Centre</li>
          <li className={menuItemStyle}>More</li>
        </ul>

        <button
          onClick={() => handleLanguageChange(currentLang)}
          className="flex items-center gap-1 border border-[#bec2ca] cursor-pointer px-2 py-1 rounded-md capitalize"
        >
          <FaTriangleExclamation className="hidden md:block text-gray-500" size={14} />
          {currentLang === "en" ? "বাং" : "En"}
        </button>

        <div className="flex items-center gap-1 cursor-pointer">
          <FaPhone className="text-[#1CAB55] h-[14px] w-[14px]" />
          <p className="text-[#1CAB55] text-sm">16910</p>
        </div>

        <button className="bg-[#1CAB55] py-1 px-6 text-white rounded-md cursor-pointer">
          লগ-ইন
        </button>
      </div>
    </div>
  );
}

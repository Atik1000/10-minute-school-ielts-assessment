"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPhone, FaMagnifyingGlass, FaTriangleExclamation } from "react-icons/fa6";
import { getCurrentLanguage, setLanguage, getTranslation, type Language } from "../../utils/i18n";

export default function Navbar() {
  const [currentLang, setCurrentLang] = useState<Language>(getCurrentLanguage);
  const t = getTranslation(currentLang);

  const handleLanguageChange = () => {
    const nextLang: Language = currentLang === "en" ? "bn" : "en";
    setCurrentLang(nextLang);
    setLanguage(nextLang);
  };

  const menuItemStyle = "cursor-pointer hover:text-[#1CAB55]";

  return (
    <div className="w-full mx-auto bg-white py-3  fixed top-0 left-0 right-0 z-999">
      <div className="flex items-center justify-between gap-4 w-[1440px] px-18 mx-auto">
        <Link href="#">
          <Image
            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
            alt="Logo"
            width={120}
            height={28}
            className="h-7"
          />
        </Link>

        <div className="relative">
          {/* <FaMagnifyingGlass className="absolute top-2 left-3 text-gray-600" size={20} /> */}
          <input
            placeholder={t.navbar.searchPlaceholder}
            className={`h-10 w-[358px] rounded-full pl-12 border border-[#dbe1eb] text-sm`}
          />
        </div>
        <ul className="flex items-center gap-4">
          <li className={menuItemStyle}>{t.navbar.menuItems.class612}</li>
          <li className={menuItemStyle}>{t.navbar.menuItems.skill}</li>
          <li className={menuItemStyle}>{t.navbar.menuItems.admission}</li>
          <li className={menuItemStyle}>{t.navbar.menuItems.onlineBatch}</li>
          <li className={menuItemStyle}>{t.navbar.menuItems.englishCentre}</li>
          <li className={menuItemStyle}>{t.navbar.menuItems.more}</li>
        </ul>

        <button
          onClick={handleLanguageChange}
          className="flex items-center gap-1 border border-[#bec2ca] cursor-pointer px-2 py-1 rounded-md capitalize"
        >
          <FaTriangleExclamation className="hidden md:block text-gray-500" size={14} />
          {t.navbar.languageToggle}
        </button>

        <div className="flex items-center gap-1 cursor-pointer">
          <FaPhone className="text-[#1CAB55] h-[14px] w-[14px]" />
          <p className="text-[#1CAB55] text-sm">{t.navbar.phoneNumber}</p>
        </div>

        <button className="bg-[#1CAB55] py-1 px-6 text-white rounded-md cursor-pointer">
          {t.navbar.loginButton}
        </button>
      </div>
    </div>
  );
}

"use client";
import { FaPhone } from "react-icons/fa";

export default function CourseContact() {
  return (
    <div className="flex items-center justify-between my-3">
      <p className="text-[#A3A3A3] text-sm">কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
      <div className="flex items-center gap-1 cursor-pointer">
        <FaPhone className="text-[#1CAB55] h-[14px] w-[14px] rotate-90" />
        <p className="text-[#1CAB55] text-sm underline">ফোন করুন (16910)</p>
      </div>
    </div>
  );
}

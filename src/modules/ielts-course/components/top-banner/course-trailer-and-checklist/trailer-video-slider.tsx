"use client";
import { useState } from "react";
import { CourseData } from "@/modules/ielts-course/types/ielts-course-data-types";
import Image from "next/image";
import ReactPlayer from "react-player";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export default function TrailerVideoSlider({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaList = courseData?.media || [];
  const totalSlides = mediaList.length;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  if (totalSlides === 0) return null;

  const media = mediaList[currentIndex];

  return (
    <div className="relative w-[400px]">
      <button
        onClick={goToPrev}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        aria-label="Previous"
      >
        <FaCircleChevronLeft className="text-white text-2xl" />
      </button>
      <div className="w-[400px] h-[220px]">
        {media.resource_type === "video" ? (
          <ReactPlayer
            src={`https://www.youtube.com/watch?v=${media?.resource_value}`}
            controls
            width={400}
            height={220}
          />
        ) : (
          <div className="w-[400px] h-[220px] overflow-hidden">
            <Image
              src={media?.resource_value}
              alt=""
              width={400}
              height={220}
            />
          </div>
        )}
      </div>
      <button
        onClick={goToNext}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        aria-label="Next"
      >
        <FaCircleChevronRight className="text-white text-2xl" />
      </button>

      {/* thumbnails */}
      <div className="flex justify-center gap-1 mt-2 overflow-x-auto no-scrollbar">
        {mediaList.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`border-2 rounded ${
              idx === currentIndex ? "border-[#1CAB55]" : "border-transparent"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div className="w-[55px] h-[30px] overflow-hidden cursor-pointer">
              <Image
                src={
                  item.resource_type === "video"
                    ? item.thumbnail_url
                    : item.resource_value
                }
                alt=""
                width={55}
                height={30}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

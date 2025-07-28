"use client";
import { CourseData } from "../../types/ielts-course-data-types";
import CourseTrailerAndChecklist from "./course-trailer-and-checklist";
import Description from "./description";
import Title from "./title";
import CourseContact from "./course-trailer-and-checklist/course-contact";
import { useEffect, useRef, useState } from "react";

export default function TopBanner({
  courseData,
  onObserveChange,
}: {
  courseData: CourseData | undefined;
  onObserveChange?: (isVisible: boolean) => void;
}) {
  const observeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observeRef.current || !onObserveChange) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        onObserveChange(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(observeRef.current);

    return () => observer.disconnect();
  }, [observeRef.current, onObserveChange]);

  return (
    <div
      style={{
        backgroundImage: `url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="mt-14"
    >
      <div className=" relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px] w-[1200px] mx-auto px-4">
        <div className="flex flex-col justify-center gap-2 max-w-[700px]">
          <Title courseData={courseData} />
          <Description courseData={courseData} />
        </div>
        <div
          ref={observeRef}
          className="max-w-[450px]  absolute right-2 md:top-[50px] md:absolute"
        >
          <CourseTrailerAndChecklist courseData={courseData} />
          <CourseContact />
        </div>
      </div>
    </div>
  );
}

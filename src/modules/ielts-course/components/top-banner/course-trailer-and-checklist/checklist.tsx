"use client";
import { CourseData } from "@/modules/ielts-course/types/ielts-course-data-types";
import Image from "next/image";

export default function Checklist({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  return (
    <div className="pt-2">
      <h4 className="font-semibold text-xl">এই কোর্সে যা থাকছে</h4>
      <div className="pt-3 space-y-3">
        {courseData?.checklist?.map((item, i) => {
          return (
            <div key={i} className="flex items-center gap-3 ">
              <Image
                src={item?.icon}
                alt="Checklist Icon"
                width={20}
                height={20}
              />
              <p className="text-base font-normal">{item?.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

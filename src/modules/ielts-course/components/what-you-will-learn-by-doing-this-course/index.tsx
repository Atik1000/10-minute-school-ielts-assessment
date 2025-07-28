"use client";
import { MdCheck } from "react-icons/md";
import { CourseData, Pointer } from "../../types/ielts-course-data-types";

// Type guard to check if a value is an Instructor
function isPointers(value: any): value is Pointer {
  return (
    value && typeof value === "object" && "icon" in value && "text" in value
  );
}

export default function WhatYouWillLearnByDoingThisCourse({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  const pointers = courseData?.sections?.find(
    (data) => data.type === "pointers"
  );

  return (
    <div className="py-4">
      <h2 className="text-xl text-black font-semibold pb-4">
        {pointers?.name}
      </h2>
      <ul className="space-y-4 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 border border-[#dbe1eb] rounded-md p-6">
        {pointers?.values?.map((item, index) =>
          isPointers(item) ? (
            <li key={index} className="flex items-start gap-2 mb-2">
              <MdCheck className="text-[#6294F8] h-5 w-5" />

              <h3 className=" text-[#111827] flex-1">{item.text}</h3>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

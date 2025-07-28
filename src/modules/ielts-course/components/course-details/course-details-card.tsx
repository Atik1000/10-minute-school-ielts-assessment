"use client";
import { useState } from "react";
import { About, Section } from "../../types/ielts-course-data-types";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { wrapListItems } from "../../utils/helpers/helper-functions";

// Type guard for About section
function isCourseDetails(value: any): value is About {
  return (
    value &&
    typeof value === "object" &&
    "title" in value &&
    "description" in value
  );
}

export default function CourseDetailsCard({
  courseDetails,
}: {
  courseDetails: Section | undefined;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="p-6 border border-gray-300 rounded-md space-y-4">
      {courseDetails?.values.map((course, index) =>
        isCourseDetails(course) ? (
          <div
            key={index}
            className={`${
              index < courseDetails?.values.length - 1 &&
              "border-b border-dotted border-[#b2b7c0]"
            } pb-4`}
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left font-bold text-[#111827] flex justify-between items-center cursor-pointer"
            >
              <span dangerouslySetInnerHTML={{ __html: course.title }} />
              <span className="text-gray-400">
                {activeIndex === index ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </span>
            </button>

            {activeIndex === index && (
              <div
                className="mt-3 text-[#374151]"
                dangerouslySetInnerHTML={{
                  __html: wrapListItems(course.description),
                }}
              />
            )}
          </div>
        ) : null
      )}
    </div>
  );
}

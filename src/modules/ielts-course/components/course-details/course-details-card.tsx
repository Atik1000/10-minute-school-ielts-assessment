"use client";
import { useState } from "react";
import { About, Section } from "../../types/ielts-course-data-types";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { wrapListItems } from "../../utils/helpers/helper-functions";

// Type guard for About section
const isCourseDetails = (value: unknown): value is About => {
  return (
    Boolean(value) &&
    typeof value === "object" &&
    value !== null &&
    "title" in value &&
    "description" in value
  );
};

interface CourseDetailsCardProps {
  courseDetails: Section | undefined;
}

interface AccordionItemProps {
  course: About;
  index: number;
  isActive: boolean;
  isLast: boolean;
  onToggle: (index: number) => void;
}

const AccordionItem = ({ course, index, isActive, isLast, onToggle }: AccordionItemProps) => (
  <div
    className={`${
      !isLast && "border-b border-dotted border-[#b2b7c0]"
    } pb-4`}
  >
    <button
      onClick={() => onToggle(index)}
      className="w-full text-left font-bold text-[#111827] flex justify-between items-center cursor-pointer hover:text-[#1f2937] transition-colors"
      aria-expanded={isActive}
      aria-controls={`course-content-${index}`}
    >
      <span dangerouslySetInnerHTML={{ __html: course.title }} />
      <span className="text-gray-400 transition-transform duration-200">
        {isActive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </span>
    </button>

    {isActive && (
      <div
        id={`course-content-${index}`}
        className="mt-3 text-[#374151] animate-in fade-in duration-200"
        dangerouslySetInnerHTML={{
          __html: wrapListItems(course.description),
        }}
      />
    )}
  </div>
);

export default function CourseDetailsCard({ courseDetails }: CourseDetailsCardProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  if (!courseDetails?.values?.length) {
    return (
      <div className="p-6 border border-gray-300 rounded-md text-center text-gray-500">
        No course details available
      </div>
    );
  }

  const validCourses = courseDetails.values.filter(isCourseDetails);

  return (
    <div className="p-6 border border-gray-300 rounded-md space-y-4">
      {validCourses.map((course, index) => (
        <AccordionItem
          key={`course-${index}`}
          course={course}
          index={index}
          isActive={activeIndex === index}
          isLast={index === validCourses.length - 1}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

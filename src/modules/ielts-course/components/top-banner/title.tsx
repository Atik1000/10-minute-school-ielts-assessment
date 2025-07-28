"use client";
import { CourseData } from "../../types/ielts-course-data-types";

export default function Title({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  return (
    <h1 className="text-white text-4xl font-semibold">{courseData?.title}</h1>
  );
}

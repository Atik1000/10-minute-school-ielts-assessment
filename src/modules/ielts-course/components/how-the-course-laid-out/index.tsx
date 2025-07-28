"use client";
import { CourseData } from "../../types/ielts-course-data-types";
import CourseLaidCard from "./course-laid-card";

export default function HowTheCourseLaidOut({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  const features = courseData?.sections?.find(
    (data) => data.type === "features"
  );
  return (
    <div className="py-4">
      <h2 className="text-xl text-black font-semibold pb-4">
        {features?.name}
      </h2>
      <CourseLaidCard features={features} />
    </div>
  );
}

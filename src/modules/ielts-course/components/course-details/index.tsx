"use client";
import { CourseData } from "../../types/ielts-course-data-types";
import CourseDetailsCard from "./course-details-card";

export default function CourseDetails({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  const courseDetails = courseData?.sections?.find(
    (data) => data.type === "about"
  );
  return (
    <div className="my-4">
      <h2 className="text-2xl text-black font-semibold pb-4">
        {courseDetails?.name}
      </h2>
      <CourseDetailsCard courseDetails={courseDetails} />
    </div>
  );
}

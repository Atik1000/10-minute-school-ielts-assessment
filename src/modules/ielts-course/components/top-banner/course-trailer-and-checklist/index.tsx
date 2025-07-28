import { CourseData } from "@/modules/ielts-course/types/ielts-course-data-types";
import TrailerVideoSlider from "./trailer-video-slider";
import ChecklistAndCTA from "./checklist-and-cta";

export default function CourseTrailerAndChecklist({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  return (
    <div className="space-y-3 bg-white p-1 border border-gray-300">
      <TrailerVideoSlider courseData={courseData} />
      <ChecklistAndCTA courseData={courseData} />
    </div>
  );
}

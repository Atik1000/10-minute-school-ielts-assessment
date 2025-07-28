"use client";
import { MdCheck } from "react-icons/md";
import {
  CourseData,
  FeatureExplanation,
} from "../../types/ielts-course-data-types";
import Image from "next/image";

// Type guard to check if a value is an Instructor
function isCourseFeature(value: any): value is FeatureExplanation {
  return (
    value &&
    typeof value === "object" &&
    "checklist" in value &&
    "file_url" in value &&
    "title" in value
  );
}

export default function CourseExclusiveFeature({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  const courseFeatures = courseData?.sections?.find(
    (data) => data.type === "feature_explanations"
  );
  return (
    <div className="py-4">
      <h2 className="text-xl text-[#111827] font-semibold pb-4">
        {courseFeatures?.name}
      </h2>
      <div className="border border-[#dbe1eb] rounded-md p-6 space-y-4">
        {courseFeatures?.values?.map(
          (feature, index) =>
            isCourseFeature(feature) && (
              <div key={index} className="space-y-2">
                <p className="text-[#111827] ">{feature?.title}</p>
                <div className=" flex items-start justify-between gap-2">
                  <ul>
                    {feature?.checklist?.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 mb-2">
                        <MdCheck className="text-[#6294F8] h-5 w-5" />

                        <h3 className=" text-[#4B5563] flex-1">{item}</h3>
                      </li>
                    ))}
                  </ul>
                  <Image
                    src={feature.file_url}
                    alt={feature.title}
                    width={250}
                    height={200}
                  />
                </div>
                {index < courseFeatures.values.length - 1 && (
                  <hr className="my-5 border-t border-[#dbe1eb]" />
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}

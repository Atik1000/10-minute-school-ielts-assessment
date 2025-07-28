"use client";
import { MdCheck } from "react-icons/md";
import {
  CourseData,
  FeatureExplanation,
} from "../../types/ielts-course-data-types";
import Image from "next/image";

// Improved type guard with better type checking
function isFeatureExplanation(value: unknown): value is FeatureExplanation {
  return (
    value !== null &&
    typeof value === "object" &&
    "checklist" in value &&
    "file_url" in value &&
    "title" in value &&
    Array.isArray((value as FeatureExplanation).checklist) &&
    typeof (value as FeatureExplanation).file_url === "string" &&
    typeof (value as FeatureExplanation).title === "string"
  );
}

// Extracted component for individual feature items
function FeatureItem({ 
  item, 
  index 
}: { 
  item: string; 
  index: number; 
}) {
  return (
    <li className="flex items-start gap-2 mb-2">
      <MdCheck className="text-[#6294F8] h-5 w-5 flex-shrink-0" />
      <h3 className="text-[#4B5563] flex-1">{item}</h3>
    </li>
  );
}

// Extracted component for individual feature
function FeatureCard({ 
  feature, 
  index, 
  isLast 
}: { 
  feature: FeatureExplanation; 
  index: number; 
  isLast: boolean; 
}) {
  return (
    <div className="space-y-2">
      <p className="text-[#111827] font-medium">{feature.title}</p>
      <div className="flex items-start justify-between gap-4">
        <ul className="flex-1">
          {feature.checklist.map((item, itemIndex) => (
            <FeatureItem key={itemIndex} item={item} index={itemIndex} />
          ))}
        </ul>
        <div className="flex-shrink-0">
          <Image
            src={feature.file_url}
            alt={feature.title}
            width={250}
            height={200}
            className="rounded-md"
          />
        </div>
      </div>
      {!isLast && <hr className="my-5 border-t border-[#dbe1eb]" />}
    </div>
  );
}

export default function CourseExclusiveFeature({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  // Early return if no course data
  if (!courseData) {
    return null;
  }

  const courseFeatures = courseData.sections?.find(
    (data) => data.type === "feature_explanations"
  );

  // Early return if no features found
  if (!courseFeatures?.values?.length) {
    return null;
  }

  const validFeatures = courseFeatures.values.filter(isFeatureExplanation);

  // Early return if no valid features
  if (!validFeatures.length) {
    return null;
  }

  return (
    <section className="py-4">
      <h2 className="text-xl text-[#111827] font-semibold pb-4">
        {courseFeatures.name}
      </h2>
      <div className="border border-[#dbe1eb] rounded-md p-6 space-y-4">
        {validFeatures.map((feature, index) => (
          <FeatureCard
            key={`${feature.title}-${index}`}
            feature={feature}
            index={index}
            isLast={index === validFeatures.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

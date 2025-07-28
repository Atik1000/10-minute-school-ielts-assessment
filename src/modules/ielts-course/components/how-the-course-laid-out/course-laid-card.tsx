"use client";
import { Feature, Section } from "../../types/ielts-course-data-types";

// Type guard to check if a value is an Instructor
function isFeature(value: any): value is Feature {
  return (
    value &&
    typeof value === "object" &&
    "icon" in value &&
    "title" in value &&
    "subtitle" in value
  );
}

export default function CourseLaidCard({
  features,
}: {
  features: Section | undefined;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-md  bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
      {features?.values?.map((feature, index) =>
        isFeature(feature) ? (
          <div key={index} className="flex items-start gap-4 rounded-md ">
            <img src={feature.icon} alt={feature.title} className="h-9 w-9" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-[#9CA3AF]">{feature.subtitle}</p>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

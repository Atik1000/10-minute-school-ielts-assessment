"use client";
import { Feature, Section } from "../../types/ielts-course-data-types";

// Type guard to check if a value is a Feature
function isFeature(value: any): value is Feature {
  return (
    value &&
    typeof value === "object" &&
    "icon" in value &&
    "title" in value &&
    "subtitle" in value &&
    "id" in value
  );
}

// Individual feature item component
function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div className="flex items-start gap-4 rounded-md">
      <img 
        src={feature.icon} 
        alt={feature.title} 
        className="h-9 w-9 flex-shrink-0" 
      />
      <div className="space-y-2 min-w-0">
        <h3 className="text-lg font-semibold text-white">
          {feature.title}
        </h3>
        <p className="text-sm text-[#9CA3AF]">
          {feature.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function CourseFeaturesCard({
  features,
}: {
  features: Section | undefined;
}) {
  // Early return if no features provided
  if (!features?.values?.length) {
    return (
      <div className="grid grid-cols-1 gap-4 rounded-md bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
        <p className="text-[#9CA3AF] col-span-full text-center">
          No features available
        </p>
      </div>
    );
  }

  const validFeatures = features.values.filter(isFeature);

  return (
    <div className="grid grid-cols-1 gap-4 rounded-md bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
      {validFeatures.map((feature, index) => (
        <FeatureItem key={feature.id || index} feature={feature} />
      ))}
    </div>
  );
}

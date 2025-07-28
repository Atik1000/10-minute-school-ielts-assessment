"use client";
import { CourseData, Section } from "../../types/ielts-course-data-types";
import CourseLaidCard from "./course-laid-card";

// Type guard to check if a section is a features section
function isFeaturesSection(section: Section): boolean {
  return section.type === "features";
}

// Utility function to find features section
function findFeaturesSection(sections: Section[] | undefined): Section | undefined {
  return sections?.find(isFeaturesSection);
}

export default function HowTheCourseLaidOut({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  const featuresSection = findFeaturesSection(courseData?.sections);

  // Early return if no features section found
  if (!featuresSection) {
    return null;
  }

  return (
    <section className="py-4">
      <h2 className="text-xl text-black font-semibold pb-4">
        {featuresSection.name}
      </h2>
      <CourseLaidCard features={featuresSection} />
    </section>
  );
}

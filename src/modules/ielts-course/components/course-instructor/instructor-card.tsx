"use client";
import Image from "next/image";
import { Instructor, Section } from "../../types/ielts-course-data-types";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

// Type guard to check if a value is an Instructor
function isInstructor(value: any): value is Instructor {
  return (
    value &&
    typeof value === "object" &&
    "name" in value &&
    "image" in value &&
    "description" in value
  );
}

export default function InstructorCard({
  instructors,
}: {
  instructors: Section | undefined;
}) {
  return (
    <div className="p-5 border border-gray-300">
      {instructors?.values?.map((instructor, index) =>
        isInstructor(instructor) ? (
          <div key={index} className="flex items-center gap-4">
            <Image
              src={instructor.image}
              alt={instructor.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h4 className="text-lg text-[#111827] hover:text-[#1CAB55] flex items-center !cursor-pointer">
                <Link href="#">{instructor.name}</Link> <MdChevronRight />
              </h4>
              <div
                className="text-[#111827] text-sm"
                dangerouslySetInnerHTML={{ __html: instructor.description }}
              />
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

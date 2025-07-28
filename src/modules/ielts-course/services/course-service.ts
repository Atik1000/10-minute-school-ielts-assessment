import { IELTSCourseApiResponse } from "../types/ielts-course-data-types";

export async function fetchCourseData(): Promise<IELTSCourseApiResponse | null> {
  try {
    const selectedLang = localStorage.getItem("currentLang");
    const res = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${selectedLang}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Failed to fetch course data");
    return await res.json();
  } catch (err) {
    console.error("fetchCourseData error:", err);
    return null;
  }
}

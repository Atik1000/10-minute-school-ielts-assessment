import { useEffect, useState } from "react";
import { fetchCourseData } from "../services/course-service";
import { IELTSCourseApiResponse } from "../types/ielts-course-data-types";

export default function useIELTSCourse() {
  const [courseData, setCourseData] = useState<IELTSCourseApiResponse | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await fetchCourseData();
      setCourseData(data);
      setLoading(false);
    }

    loadData();
  }, []);

  return { courseData, loading };
}

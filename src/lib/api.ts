import { ProductData, ApiResponse, Language } from '@/types';

const API_BASE_URL = 'https://api.10minuteschool.com/discovery-service/api/v1/products';
const DEFAULT_HEADERS = {
  'X-TENMS-SOURCE-PLATFORM': 'web',
  'Content-Type': 'application/json',
};

// Cache for storing API responses
const cache = new Map<string, { data: ProductData; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

// Mock data for fallback
const MOCK_COURSE_DATA: ProductData = {
  slug: 'ielts-course',
  id: 1,
  title: 'Complete IELTS Preparation Course',
  description: 'Master the IELTS exam with our comprehensive course designed by expert instructors. Get your target band score with structured learning, practice tests, and personalized feedback.',
  media: [
    {
      id: 1,
      type: 'video',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      youtube_id: 'dQw4w9WgXcQ',
      title: 'IELTS Course Preview',
      description: 'Introduction to our comprehensive IELTS preparation course'
    }
  ],
  checklist: [
    {
      id: 1,
      title: 'Complete Reading Module',
      description: 'Master reading strategies and comprehension techniques',
      icon: '📖'
    },
    {
      id: 2,
      title: 'Excel in Writing Tasks',
      description: 'Learn to write coherent essays and reports',
      icon: '✍️'
    },
    {
      id: 3,
      title: 'Improve Listening Skills',
      description: 'Enhance listening comprehension for various accents',
      icon: '🎧'
    },
    {
      id: 4,
      title: 'Perfect Speaking Skills',
      description: 'Develop fluency and confidence in speaking',
      icon: '🗣️'
    }
  ],
  seo: {
    title: 'IELTS Course - 10 Minute School',
    description: 'Master IELTS with our comprehensive course designed by experts.',
    keywords: ['IELTS', 'English', 'Language Test', 'Study Abroad']
  },
  cta_text: {
    primary: 'Ready to Master IELTS?',
    secondary: 'Join thousands of successful students who have achieved their target band scores.',
    button_text: 'Enroll Now',
    price: 1000,
    currency: 'BDT'
  },
  sections: [
    {
      id: 1,
      type: 'instructor',
      name: 'Expert Instructors',
      content: [
        {
          id: 1,
          title: 'Munzereen Shahid',
          description: 'IELTS Expert with 10+ years of experience',
          image_url: 'https://cdn.10minuteschool.com/instructor1.jpg'
        }
      ]
    },
    {
      id: 2,
      type: 'features',
      name: 'Course Features',
      content: [
        {
          id: 1,
          title: 'Comprehensive Content',
          description: 'Complete coverage of all IELTS modules',
          points: ['All 4 modules covered', 'Structured learning path', 'Expert strategies']
        }
      ]
    },
    {
      id: 3,
      type: 'pointers',
      name: 'What You Will Learn',
      content: [
        {
          id: 1,
          title: 'Master IELTS Reading',
          description: 'Develop advanced reading strategies',
          points: ['Skimming and scanning techniques', 'Understanding complex texts', 'Time management']
        }
      ]
    },
    {
      id: 4,
      type: 'about',
      name: 'Course Details',
      content: [
        {
          id: 1,
          title: 'Course Duration',
          description: 'Lifetime access to all course materials',
          points: ['100+ hours of content', 'Lifetime access', 'Self-paced learning']
        }
      ]
    },
    {
      id: 5,
      type: 'exclusive',
      name: 'Exclusive Features',
      content: [
        {
          id: 1,
          title: 'Personalized Learning Path',
          description: 'AI-powered adaptive learning system',
          points: ['Custom study plans', 'Progress tracking', 'Weakness identification']
        }
      ]
    }
  ]
};

// Custom error class for API errors
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Fetch wrapper with timeout and error handling
async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout = 10000
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new ApiError('Request timeout', 408);
    }
    throw error;
  }
}

// Get cached data if available and not expired
function getCachedData(key: string): ProductData | null {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
}

// Set data in cache
function setCachedData(key: string, data: ProductData): void {
  cache.set(key, { data, timestamp: Date.now() });
}

// Fetch IELTS course data
export async function fetchIELTSCourseData(
  slug: string = 'ielts-course',
  lang: Language = 'en'
): Promise<ProductData> {
  const cacheKey = `${slug}-${lang}`;
  
  // Check cache first
  const cachedData = getCachedData(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const url = `${API_BASE_URL}/${slug}?lang=${lang}`;
  
  try {
    const response = await fetchWithTimeout(url, {
      method: 'GET',
      headers: DEFAULT_HEADERS,
    });

    if (!response.ok) {
      console.warn(`API request failed with status ${response.status}, using mock data`);
      return MOCK_COURSE_DATA;
    }

    const data = await response.json();
    
    // Debug: Log the actual response structure
    console.log('API Response:', JSON.stringify(data, null, 2));

    // Handle different response structures
    let courseData: ProductData;
    
    if (data.success === false) {
      console.warn('API returned success: false, using mock data');
      return MOCK_COURSE_DATA;
    }
    
    // Check if data is directly in the response or nested
    if (data.data) {
      courseData = data.data;
    } else if (data.id && data.title) {
      // Response might be the course data directly
      courseData = data as ProductData;
    } else {
      console.warn('Invalid response structure, using mock data');
      return MOCK_COURSE_DATA;
    }

    if (!courseData) {
      console.warn('No data received from API, using mock data');
      return MOCK_COURSE_DATA;
    }

    // Validate the course data structure
    if (!validateCourseData(courseData)) {
      console.warn('Invalid course data structure, using mock data');
      return MOCK_COURSE_DATA;
    }

    // Cache the successful response
    setCachedData(cacheKey, courseData);

    return courseData;
  } catch (error) {
    console.warn('API request failed, using mock data:', error);
    return MOCK_COURSE_DATA;
  }
}

// Fetch multiple courses (for future use)
export async function fetchCourses(lang: Language = 'en'): Promise<ProductData[]> {
  const url = `${API_BASE_URL}?lang=${lang}`;
  
  try {
    const response = await fetchWithTimeout(url, {
      method: 'GET',
      headers: DEFAULT_HEADERS,
    });

    if (!response.ok) {
      throw new ApiError(
        `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();

    if (!data.success) {
      throw new ApiError(
        data.error || 'API request failed',
        response.status,
        data.message
      );
    }

    return data.data || [];
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    if (error instanceof TypeError) {
      throw new ApiError('Network error - please check your connection', 0);
    }
    
    throw new ApiError(
      error instanceof Error ? error.message : 'Unknown error occurred',
      500
    );
  }
}

// Clear cache (useful for testing or manual cache invalidation)
export function clearCache(): void {
  cache.clear();
}

// Get cache statistics (useful for debugging)
export function getCacheStats(): { size: number; entries: string[] } {
  return {
    size: cache.size,
    entries: Array.from(cache.keys()),
  };
}

// Validate course data structure
export function validateCourseData(data: any): data is ProductData {
  return (
    data &&
    typeof data.slug === 'string' &&
    typeof data.id === 'number' &&
    typeof data.title === 'string' &&
    typeof data.description === 'string' &&
    Array.isArray(data.media) &&
    Array.isArray(data.checklist) &&
    data.seo &&
    data.cta_text &&
    Array.isArray(data.sections)
  );
}

// Extract YouTube video ID from URL
export function extractYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

// Format price with currency
export function formatPrice(price: number, currency: string = 'BDT'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  }).format(price);
}

// Generate meta tags for SEO
export function generateMetaTags(data: ProductData, lang: Language) {
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords.join(', '),
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      images: data.seo.og_image ? [data.seo.og_image] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seo.title,
      description: data.seo.description,
      images: data.seo.og_image ? [data.seo.og_image] : [],
    },
  };
} 
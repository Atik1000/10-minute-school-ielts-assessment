// Site configuration constants
export const SITE_CONFIG = {
  name: "IELTS Course by Munzereen Shahid",
  description: "Master IELTS with the best preparation course by Munzereen Shahid. Comprehensive study materials, expert guidance, and proven strategies for IELTS success in 2025.",
  url: "https://ielts-course.com", // Replace with your actual domain
  ogImage: "/og-image.jpg",
  creator: "Munzereen Shahid",
  keywords: ["IELTS", "IELTS preparation", "Munzereen Shahid", "IELTS course", "English test", "IELTS 2025"],
  themeColor: "#1CAB55",
};

// Navigation configuration
export const NAV_CONFIG = {
  maxWidth: "1440px",
  padding: "px-18",
};

// Font configuration
export const FONT_CONFIG = {
  display: "swap" as const,
  preload: true,
  subsets: ["latin"] as ("cyrillic" | "latin" | "latin-ext")[],
}; 
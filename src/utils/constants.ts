// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://api.10minuteschool.com/discovery-service/api/v1/products',
  DEFAULT_HEADERS: {
    'X-TENMS-SOURCE-PLATFORM': 'web',
    'Content-Type': 'application/json',
  },
  TIMEOUT: 10000, // 10 seconds
  CACHE_DURATION: 60 * 60 * 1000, // 1 hour
} as const;

// Default course configuration
export const COURSE_CONFIG = {
  DEFAULT_SLUG: 'ielts-course',
  DEFAULT_PRICE: 1000,
  DEFAULT_CURRENCY: 'BDT',
  REVALIDATION_TIME: 3600, // 1 hour in seconds
} as const;

// Supported languages
export const SUPPORTED_LANGUAGES = {
  EN: 'en',
  BN: 'bn',
} as const;

// Route configuration
export const ROUTES = {
  HOME: '/',
  PRODUCT: '/product',
  COURSE: '/ielts-course',
} as const;

// UI Configuration
export const UI_CONFIG = {
  ANIMATION_DURATION: 300,
  HOVER_DELAY: 150,
  TRANSITION_DURATION: 200,
} as const;

// Social media links
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/10minuteschool',
  YOUTUBE: 'https://youtube.com/10minuteschool',
  LINKEDIN: 'https://linkedin.com/company/10minuteschool',
  TWITTER: 'https://twitter.com/10minuteschool',
} as const;

// Contact information
export const CONTACT_INFO = {
  EMAIL: 'support@10minuteschool.com',
  PHONE: '+880 1300-000000',
  ADDRESS: 'Dhaka, Bangladesh',
} as const;

// SEO defaults
export const SEO_DEFAULTS = {
  SITE_NAME: '10 Minute School',
  SITE_URL: 'https://10minuteschool.com',
  DEFAULT_TITLE: 'IELTS Course - 10 Minute School',
  DEFAULT_DESCRIPTION: 'Master IELTS with our comprehensive course designed by experts. Get your target band score with structured learning and practice.',
} as const;

// YouTube configuration
export const YOUTUBE_CONFIG = {
  PLAYER_OPTIONS: {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      controls: 1,
      disablekb: 0,
      enablejsapi: 1,
      iv_load_policy: 3,
      cc_load_policy: 0,
      fs: 1,
      hl: 'en',
      origin: typeof window !== 'undefined' ? window.location.origin : '',
    },
  },
} as const;

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error - please check your connection',
  API_ERROR: 'Failed to load course data',
  NOT_FOUND: 'Course not found',
  TIMEOUT: 'Request timeout - please try again',
  UNKNOWN_ERROR: 'An unexpected error occurred',
  INVALID_DATA: 'Invalid data received from server',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  COURSE_LOADED: 'Course loaded successfully',
  CACHE_CLEARED: 'Cache cleared successfully',
} as const;

// Loading states
export const LOADING_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

// Component variants
export const COMPONENT_VARIANTS = {
  BUTTON: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    OUTLINE: 'outline',
    GHOST: 'ghost',
  },
  CARD: {
    DEFAULT: 'default',
    GLASS: 'glass',
    GRADIENT: 'gradient',
  },
  BADGE: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
  },
} as const;

// Animation variants
export const ANIMATION_VARIANTS = {
  FADE_IN: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  SLIDE_UP: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  SCALE_IN: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
} as const; 
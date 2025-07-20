module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Academic Blue
        primary: "#1e3a8a", // blue-800
        "primary-light": "#3b82f6", // blue-500
        
        // Accent Colors
        accent: "#f97316", // orange-500
        
        // Background Colors
        background: "#ffffff", // white
        surface: "#f8fafc", // slate-50
        
        // Text Colors
        "text-primary": "#1f2937", // gray-800
        "text-secondary": "#6b7280", // gray-500
        
        // Status Colors
        success: "#10b981", // emerald-500
        warning: "#f59e0b", // amber-500
        error: "#ef4444", // red-500
        
        // Border Colors
        "border-default": "#e5e7eb", // gray-200
        "border-focus": "#f97316", // orange-500
      },
      fontFamily: {
        // Headlines and CTAs
        inter: ['Inter', 'sans-serif'],
        // Body text
        'open-sans': ['Open Sans', 'sans-serif'],
        // Academic quotes and accents
        crimson: ['Crimson Text', 'serif'],
        // Default sans fallback
        sans: ['Open Sans', 'Inter', 'sans-serif'],
      },
      fontWeight: {
        // Inter weights
        'inter-semibold': '600',
        'inter-bold': '700',
        'inter-extrabold': '800',
        // Open Sans weights
        'open-normal': '400',
        'open-medium': '500',
        'open-semibold': '600',
        // Crimson Text weights
        'crimson-normal': '400',
        'crimson-semibold': '600',
      },
      boxShadow: {
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'cta-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'testimonial': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
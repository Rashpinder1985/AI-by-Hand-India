module.exports = {
  content: ["./*.html", "./*.js"], // root-level files only
  theme: {
    extend: {
      colors: {
        // Primary Colors - Academic Blue
        primary: "#1e3a8a",
        "primary-light": "#3b82f6",

        // Accent Colors
        accent: "#f97316",

        // Background Colors
        background: "#ffffff",
        surface: "#f8fafc",

        // Text Colors
        "text-primary": "#1f2937",
        "text-secondary": "#6b7280",

        // Status Colors
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",

        // Border Colors
        "border-default": "#e5e7eb",
        "border-focus": "#f97316",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
        sans: ['Open Sans', 'Inter', 'sans-serif'],
      },
      fontWeight: {
        'inter-semibold': '600',
        'inter-bold': '700',
        'inter-extrabold': '800',
        'open-normal': '400',
        'open-medium': '500',
        'open-semibold': '600',
        'crimson-normal': '400',
        'crimson-semibold': '600',
      },
      boxShadow: {
        cta: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'cta-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        testimonial: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        200: '200ms',
        300: '300ms',
      },
      transitionTimingFunction: {
        smooth: 'ease-in-out',
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
}

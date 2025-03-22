export const theme = {
  colors: {
    // Background colors
    background: {
      primary: '#0f172a', // Dark blue background
      secondary: '#1e293b', // Slightly lighter blue for cards
      hover: '#334155', // Hover state for cards
      accent: '#3b82f6', // Blue accent color
    },
    // Text colors
    text: {
      primary: '#f8fafc', // White text
      secondary: '#94a3b8', // Gray text
      accent: '#60a5fa', // Light blue text
      muted: '#64748b', // Muted text
    },
    // Status colors
    status: {
      success: '#22c55e', // Green for completed tasks
      pending: '#eab308', // Yellow for pending tasks
      error: '#ef4444', // Red for errors
    },
    // Tag colors
    tag: {
      background: '#1e293b', // Dark background for tags
      hover: '#334155', // Hover state for tags
      text: '#f8fafc', // White text for tags
    },
    // Progress bar colors
    progress: {
      background: '#1e293b', // Dark background
      fill: '#3b82f6', // Blue fill
    },
    // Border colors
    border: {
      light: '#334155', // Light border
      dark: '#1e293b', // Dark border
    }
  },
  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  // Border radius
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    full: '9999px',
  },
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
  // Transitions
  transitions: {
    default: 'all 0.2s ease-in-out',
    slow: 'all 0.3s ease-in-out',
  }
} 
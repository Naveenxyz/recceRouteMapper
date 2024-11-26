// src/theme.ts

export const lightTheme = {
  colors: {
    // Primary and Secondary Colors
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-black',

    // Status Colors
    error: 'bg-red-100 border border-red-400 text-red-700',
    success: 'bg-green-100 border border-green-400 text-green-700',

    // Backgrounds
    backgroundGradient: 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100',
    glass: 'backdrop-blur-md bg-white/80 border border-gray-200 rounded-xl',

    // Text Colors
    textPrimary: 'text-gray-800',
    textSecondary: 'text-gray-600',

    // Badges and Overlays
    badge: 'px-3 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-500 text-sm',
    overlay: 'fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4',

    // Modal Styles
    modal: 'relative bg-white rounded-lg overflow-hidden',

    // Table Styles
    table: 'w-full',
    tableHeader: 'border-b border-gray-300',
    tableRow: 'border-b border-gray-200 hover:bg-gray-100',
  },
  buttons: {
    // Button Variants
    upload: 'flex items-center gap-2 px-6 py-3 rounded-lg',
    toggle: 'flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400',
    navigation:
      'p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white/90 hover:bg-black/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all',
    enlarge:
      'p-2 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-800 transition-all duration-200 ease-in-out',
    // Icon Sizes
    icon: 'w-4 h-4',
  },
  layout: {
    // Layout Containers
    container:
      'min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 text-gray-800 py-8 px-4',
    header: 'text-center space-y-4',
    nav: 'flex space-x-4',

    // Glass Panes and Content Areas
    glassPane: 'backdrop-blur-md bg-white/80 border border-gray-200 rounded-xl p-4',
    contentPane: 'backdrop-blur-md bg-white/80 border border-gray-200 rounded-xl p-8',

    // Table and Badge
    table: 'w-full',
    tableHeader: 'border-b border-gray-300',
    tableRow: 'border-b border-gray-200 hover:bg-gray-100',
    badge: 'px-3 py-1 rounded-full bg-blue-100 border border-blue-300',
  },
  text: {
    // Text Styles
    heading1:
      'text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500',
    heading2: 'text-2xl font-semibold text-gray-800 flex items-center gap-3',
    heading3: 'text-xl font-semibold text-gray-800',
    paragraph: 'text-lg text-gray-600',
    small: 'text-sm text-gray-600',

    // Modal Close Button
    modalClose:
      'absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white/100 transition-all',
  },
  animations: {
    // Animation Variants
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    spinner: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
    },
    modalScale: {
      initial: { scale: 0.8 },
      animate: { scale: 1 },
      exit: { scale: 0.8 },
      transition: { duration: 0.3 },
    },
    imageFade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
    },
  },
};

export const darkTheme = {
  colors: {
    // Primary and Secondary Colors
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',

    // Status Colors
    error: 'bg-red-200 border border-red-500 text-red-800',
    success: 'bg-green-200 border border-green-500 text-green-800',

    // Backgrounds
    backgroundGradient:
      'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800',
    glass: 'backdrop-blur-md bg-gray-900/80 border border-gray-700 rounded-xl',

    // Text Colors
    textPrimary: 'text-gray-100',
    textSecondary: 'text-gray-400',

    // Badges and Overlays
    badge: 'px-3 py-1 rounded-full bg-indigo-700 border border-indigo-600 text-indigo-300 text-sm',
    overlay: 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4',

    // Modal Styles
    modal: 'relative bg-gray-800 rounded-lg overflow-hidden',

    // Table Styles
    table: 'w-full',
    tableHeader: 'border-b border-gray-600',
    tableRow: 'border-b border-gray-700 hover:bg-gray-700',
  },
  buttons: {
    // Button Variants
    upload: 'flex items-center gap-2 px-6 py-3 rounded-lg',
    toggle: 'flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700',
    navigation:
      'p-2 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/10 text-gray-100 hover:bg-gray-800/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all',
    enlarge:
      'p-2 rounded-full bg-gray-600 hover:bg-gray-700 text-gray-100 transition-all duration-200 ease-in-out',
    // Icon Sizes
    icon: 'w-4 h-4',
  },
  layout: {
    // Layout Containers
    container:
      'min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-gray-100 py-8 px-4',
    header: 'text-center space-y-4',
    nav: 'flex space-x-4',

    // Glass Panes and Content Areas
    glassPane: 'backdrop-blur-md bg-gray-900/80 border border-gray-700 rounded-xl p-4',
    contentPane: 'backdrop-blur-md bg-gray-900/80 border border-gray-700 rounded-xl p-8',

    // Table and Badge
    table: 'w-full',
    tableHeader: 'border-b border-gray-600',
    tableRow: 'border-b border-gray-700 hover:bg-gray-700',
    badge: 'px-3 py-1 rounded-full bg-indigo-700 border border-indigo-600',
  },
  text: {
    // Text Styles
    heading1:
      'text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500',
    heading2: 'text-2xl font-semibold text-gray-100 flex items-center gap-3',
    heading3: 'text-xl font-semibold text-gray-100',
    paragraph: 'text-lg text-gray-400',
    small: 'text-sm text-gray-400',

    // Modal Close Button
    modalClose:
      'absolute top-2 right-2 p-2 rounded-full bg-gray-700/80 hover:bg-gray-700 transition-all',
  },
  animations: {
    // Animation Variants
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    spinner: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
    },
    modalScale: {
      initial: { scale: 0.8 },
      animate: { scale: 1 },
      exit: { scale: 0.8 },
      transition: { duration: 0.3 },
    },
    imageFade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
    },
  },
};
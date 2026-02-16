/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                sage: {
                    DEFAULT: '#9caa8e',
                    light: '#e8ede4',
                    pale: '#f0f4ed',
                    dark: '#7a8c6c',
                    deep: '#5f7050',
                },
                sand: {
                    DEFAULT: '#f5f0e8',
                    light: '#faf8f4',
                    warm: '#ede6da',
                    dark: '#ddd4c4',
                },
                terra: {
                    DEFAULT: '#c9907a',
                    light: '#f2ddd4',
                    pale: '#f7ebe5',
                    dark: '#b07460',
                    deep: '#9c6350',
                },
                rose: {
                    DEFAULT: '#d4a0a0',
                    light: '#f0dede',
                },
                bark: {
                    DEFAULT: '#5c4f43',
                    light: '#7d6e60',
                    muted: '#a89a8c',
                    soft: '#c4b5a5',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 2px 20px rgba(92, 79, 67, 0.06)',
                'soft-md': '0 4px 30px rgba(92, 79, 67, 0.08)',
                'soft-lg': '0 8px 40px rgba(92, 79, 67, 0.10)',
                'soft-xl': '0 12px 50px rgba(92, 79, 67, 0.12)',
                'sage-glow': '0 4px 30px rgba(156, 170, 142, 0.15)',
                'terra-glow': '0 4px 30px rgba(201, 144, 122, 0.20)',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 4px 30px rgba(201, 144, 122, 0.15)' },
                    '50%': { boxShadow: '0 8px 50px rgba(201, 144, 122, 0.30)' },
                },
            },
        },
    },
    plugins: [],
}

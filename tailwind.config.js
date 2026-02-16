/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blush: {
                    DEFAULT: '#f4a0b5',
                    light: '#fce4ec',
                    dark: '#e0758a',
                    deep: '#d4607a',
                },
                lavender: {
                    DEFAULT: '#c9b1ff',
                    light: '#ede7ff',
                    dark: '#a78bfa',
                },
                mint: {
                    DEFAULT: '#a8e6cf',
                    light: '#e0f7ef',
                    dark: '#6dc9a0',
                },
                peach: {
                    DEFAULT: '#ffd5c2',
                    light: '#fff0e8',
                    dark: '#f0a882',
                },
                cream: {
                    DEFAULT: '#fffaf5',
                    dark: '#f5ede4',
                    warm: '#fef6ee',
                },
                soft: {
                    DEFAULT: '#6b5b73',
                    light: '#9a8da3',
                    muted: '#b0a3b8',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
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
                    '0%, 100%': { boxShadow: '0 0 20px rgba(244, 160, 181, 0.25)' },
                    '50%': { boxShadow: '0 0 40px rgba(244, 160, 181, 0.45)' },
                },
            },
        },
    },
    plugins: [],
}

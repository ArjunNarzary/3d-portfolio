/** @type {import('tailwindcss').Config} */
import Colors from './src/Colors';

export default {
    content: ['./src/**/*.{ts,tsx,js,jsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: { ...Colors },
            boxShadow: {
                card: '0px 35px 120px -15px #211e35',
            },
            screens: {
                xs: '450px',
            },
            backgroundImage: {
                'hero-pattern': "url('/src/assets/herobg.png')",
            },
        },
    },
    plugins: [],
};

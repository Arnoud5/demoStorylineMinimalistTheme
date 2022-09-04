/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                creattionDemo: ["CreattionDemo", "Noto Serif Display"],
                magesta: ["Magesta"],
                madeCanvas: ["MadeCanvas"],
            },
            screens: {
                xxs: "330px",
                xs: "400px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
        },
    },
    plugins: [],
};

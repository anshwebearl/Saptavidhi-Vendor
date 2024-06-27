/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.jsx"],
    theme: {
        extend: {
            screens: {
                xs: "475px",
                ...defaultTheme.screens,
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                satisfy: ["Satisfy", "sans-serif"],
            },
        },
    },
    plugins: [],
};

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
    plugins: [
        function ({ addBase, config }) {
            addBase({
                ".custom-scrollbar": {
                    /* Firefox */
                    scrollbarColor: "#CF166F #fff",
                    scrollbarWidth: "thin",
                    /* Chrome, Edge, and Safari */
                    "&::-webkit-scrollbar": {
                        width: "4px",
                        height: "8px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#CF166F",
                        borderRadius: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#fff",
                    },
                    "&::-webkit-scrollbar-button": {
                        display: "none",
                    },
                },
            });
        },
    ],
};

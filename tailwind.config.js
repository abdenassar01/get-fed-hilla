export default {
    content: ["./frontend/index.html", "./frontend/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                nova: ["Nova Script", "cursive"],
                circular: ["'Circular Std'", "sans serif"],
                circularBook: ["'Circular Std Book'", "sans serif"]
            },
            backgroundImage: {
                "hero-section": "url('/background.svg')",
            },
        },
        colors: {
            main: "#FF385C",
            background: "#F3F4F6;",
            secondary: "#548574",
            tertiary: "#77DDFF",
            lightGreen: "#74FFC8",
            grey: "#D9D9D9",
            black: "#1A1A1A",
            white: "#FFFFFF",
            mainText: "#0A2A43",
            primarydark: "#01575A",
            primarylight: "#DFF1F0",
            cardText: "#707070",
            error: "#B00020",
        },

        fontSize: {
            xxs: "0.833vw", // 12px
            xs: "0.972vw", // 14px
            sm: "1.111vw", // 16px
            base: "1.25vw", // 18px
            xl: "1.042vw", // 20px
            xbase: "1.528vw", // 22px
            xxl: "1.667vw", // 24px
            "2xl": "2.5vw", // 36px
            "3xl": "2.778vw", // 40px
            "4xl": "3.333vw", // 48px
            "mb-xs": "2.824vw", // 12px
            "mb-xxs": "3.59vw", // 14px
            "mb-xbase": "3.765vw", // 16px
            "mb-base": "4.235vw", // 18px
            "mb-xl": "4.854vw", // 20px
            "mb-2xl": "6.588vw", // 28px
            "mb-3xl": "9.412vw", // 40px
        },
        screens: {
            "3xl": "2560px",
            "2xl": "1444px",
            xl: "1300px",
            lg: { min: "1200px", max: "1444px" },
            md: { min: "767px", max: "1200px" },
            sm: { min: "320px", max: "767px" },
        },
        container: {
            center: true,
            screens: {
                "3xl": "2300px",
                "2xl": "1700px",
                xl: "1216px",
                lg: "900px",
                md: "650px",
                sm: "350px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography")
    ],
};
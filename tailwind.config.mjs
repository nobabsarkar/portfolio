/* eslint-disable import/no-anonymous-default-export */
export default {
  // content: [
  //   "./pages/**/*.{js, ts, jsx, tsx, mdx}",
  //   "./components/**/*.{js, ts, jsx, tsx,mdx}",
  //   "./app/**/*.{js, ts, jsx, tsx, mdx}",
  // ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@heroui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a0041",
        darkTheme: "#11001F",
      },
      fontFamily: {
        geistSans: ["Outfit", "sans-serif"],
        geistMono: ["Ovo", "serif"],
      },
    },
  },
  plugins: [],
};

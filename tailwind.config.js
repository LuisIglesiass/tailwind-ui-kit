export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
	  extend: {
		colors: {
		  primary: "#4f46e5",
		  secondary: "#e0e7ff",
		},
		fontFamily: { sans: ["Inter", "sans-serif"] },
		spacing: { 128: "32rem" },
	  },
	},
	plugins: [],
  };
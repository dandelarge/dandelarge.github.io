function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-family-sans)", "sans-serif"],
      serif: ["var(--font-family-serif)", "serif"],
      logo: ["var(--font-family-logo)", "monospace"],
    },
    extend: {
      textColor: {
        theme: {
          accent: withOpacity("--text-color-accent"),
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        theme: {
          highlight: withOpacity("--bg-color-highlight"),
          accent: withOpacity("--bg-color-accent"),
        },
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "4.5rem",
              fontWeight: "600",
              lineHeight: "1",
            },
            h2: {
              fontSize: "2.5rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

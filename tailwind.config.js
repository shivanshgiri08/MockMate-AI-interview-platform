/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "hsl(230, 25%, 18%)",
          foreground: "hsl(0, 0%, 98%)"
        },
        secondary: {
          DEFAULT: "hsl(40, 12%, 92%)",
          foreground: "hsl(230, 25%, 18%)"
        },
        muted: {
          DEFAULT: "hsl(40, 12%, 92%)",
          foreground: "hsl(220, 8%, 40%)"
        },
        accent: {
          DEFAULT: "hsl(230, 10%, 94%)",
          foreground: "hsl(230, 25%, 18%)"
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 98%)"
        },
        border: "hsl(230, 10%, 90%)",
        input: "hsl(230, 10%, 88%)",
        ring: "hsl(230, 10%, 18%)",
        chart: {
          1: "hsl(12, 76%, 61%)",
          2: "hsl(173, 58%, 39%)",
          3: "hsl(197, 37%, 24%)",
          4: "hsl(43, 74%, 66%)",
          5: "hsl(27, 87%, 67%)"
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

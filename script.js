tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-high": "#ece8d9",
        "surface-container-highest": "#e6e3d3",
        "secondary-fixed": "#95f8a7",
        "tertiary-fixed-dim": "#ffb693",
        "surface-variant": "#e6e3d3",
        "surface-container-lowest": "#ffffff",
        "secondary-container": "#92f5a4",
        "outline-variant": "#d8c3ad",
        "inverse-primary": "#ffb95f",
        "on-error-container": "#93000a",
        "primary-fixed-dim": "#ffb95f",
        "outline": "#867461",
        "on-secondary-container": "#007233",
        "on-secondary-fixed-variant": "#005323",
        "primary": "#855300",
        "error": "#ba1a1a",
        "on-primary-container": "#613b00",
        "inverse-on-surface": "#f5f1e1",
        "surface": "#fdf9e9",
        "surface-container-low": "#f8f4e4",
        "on-primary": "#ffffff",
        "primary-container": "#f59e0b",
        "secondary": "#006d30",
        "inverse-surface": "#323126",
        "background": "#fdf9e9",
        "tertiary-container": "#f79a6c",
        "secondary-fixed-dim": "#79db8d",
        "on-secondary-fixed": "#00210a",
        "on-surface": "#1c1c13",
        "surface-container": "#f2eede",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#72300a",
        "primary-fixed": "#ffddb8",
        "tertiary-fixed": "#ffdbcc",
        "tertiary": "#944a23",
        "on-surface-variant": "#534434",
        "on-primary-fixed": "#2a1700",
        "surface-bright": "#fdf9e9",
        "on-tertiary-fixed": "#351000",
        "on-secondary": "#ffffff",
        "on-error": "#ffffff",
        "on-background": "#1c1c13",
        "on-primary-fixed-variant": "#653e00",
        "surface-dim": "#dedacb",
        "surface-tint": "#855300",
        "error-container": "#ffdad6",
        "on-tertiary-fixed-variant": "#76330d"
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },

      spacing: {
        "margin-mobile": "16px",
        gutter: "24px",
        "margin-desktop": "40px",
        unit: "8px",
        "container-max": "1200px"
      },

      fontFamily: {
        "body-lg": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "headline-md": ["Literata"],
        "headline-xl": ["Literata"],
        "headline-lg": ["Literata"],
        caption: ["Plus Jakarta Sans"],
        "label-md": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Literata"]
      },

      fontSize: {
        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400"
          }
        ],

        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400"
          }
        ],

        "headline-md": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600"
          }
        ],

        "headline-xl": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.02em",
            fontWeight: "700"
          }
        ],

        "headline-lg": [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "600"
          }
        ],

        caption: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500"
          }
        ],

        "label-md": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.01em",
            fontWeight: "600"
          }
        ],

        "headline-lg-mobile": [
          "28px",
          {
            lineHeight: "36px",
            fontWeight: "600"
          }
        ]
      }
    }
  }
};
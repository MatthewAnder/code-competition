import { extendTheme } from "@chakra-ui/react";
import { Montserrat, PT_Sans } from "next/font/google";

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const bodyFont = PT_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        color: "text.main",
      },
    },
  },
  styles: {
    global: {
      "html, body": {
        background: "background.700",
      },
      p: {
        color: "text.main",
      },
    },
  },

  fonts: {
    heading: headingFont.style.fontFamily,
    body: bodyFont.style.fontFamily,
  },

  colors: {
    text: {
      main: "#edf2f4",
    },
    background: {
      main: "#2b2d42",
      100: "#ced0df",
      200: "#9da0bf",
      300: "#6d71a0",
      400: "#4a4d72",
      500: "#2b2d42",
      600: "#222334",
      700: "#191b27",
      800: "#11121a",
      900: "#08090d",
    },
    primary: {
      100: "#fcd3d8",
      200: "#f8a8b1",
      300: "#f57c8a",
      400: "#f25063",
      500: "#ef233c",
      600: "#cd0f26",
      700: "#9a0c1c",
      800: "#660813",
      900: "#330409",
    },
    secondary: {
      main: "#d90429",
      100: "#fec6cf",
      200: "#fd8da0",
      300: "#fc5470",
      400: "#fa1b40",
      500: "#d90429",
      600: "#ac0420",
      700: "#810318",
      800: "#560210",
      900: "#2b0108",
    },
    accent: {
      main: "#8d99ae",
      100: "#e8ebef",
      200: "#d2d6df",
      300: "#bbc2cf",
      400: "#a4aebf",
      500: "#8d99ae",
      600: "#697994",
      700: "#4f5b6f",
      800: "#343c4a",
      900: "#1a1e25",
    },
  },
});

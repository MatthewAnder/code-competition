"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Montserrat, PT_Sans } from "next/font/google";

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const bodyFont = PT_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "cornsilk.main",
      },
      p: {
        color: "text.main",
      },
      h1: {
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
      main: "#2b2d42",
    },
    tea_green: {
      main: "#ccd5ae",
      100: "#2d331a",
      200: "#5b6635",
      300: "#88994f",
      400: "#acbb7b",
      500: "#ccd5ae",
      600: "#d6debe",
      700: "#e1e6cf",
      800: "#ebeedf",
      900: "#f5f7ef",
    },
    beige: {
      main: "#e9edc9",
      100: "#3d4216",
      200: "#79842c",
      300: "#b3c146",
      400: "#ced788",
      500: "#e9edc9",
      600: "#edf1d4",
      700: "#f2f4df",
      800: "#f6f8ea",
      900: "#fbfbf4",
    },
    cornsilk: {
      main: "#fefae0",
      100: "#5d5103",
      200: "#baa206",
      300: "#f8dc27",
      400: "#fbeb84",
      500: "#fefae0",
      600: "#fefbe7",
      700: "#fefced",
      800: "#fffdf3",
      900: "#fffef9",
    },
    papaya_whip: {
      main: "#faedcd",
      100: "#533e08",
      200: "#a57b10",
      300: "#eab227",
      400: "#f2d079",
      500: "#faedcd",
      600: "#fbf1d6",
      700: "#fcf4e0",
      800: "#fdf8eb",
      900: "#fefbf5",
    },
    buff: {
      main: "#d4a373",
      100: "#32210f",
      200: "#64411f",
      300: "#96622e",
      400: "#c58341",
      500: "#d4a373",
      600: "#dcb68f",
      700: "#e5c8ab",
      800: "#eedac7",
      900: "#f6ede3",
    },
  },
});

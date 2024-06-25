"use client";

import { ChakraProvider } from "@chakra-ui/react";

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

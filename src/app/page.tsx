"use client";

import { SubmitButton } from "@/components";
import { Box } from "@chakra-ui/react";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <Box>
      <SubmitButton action={() => signIn()}>Sign In</SubmitButton>
      <SubmitButton action={() => signOut()}>Sign Out</SubmitButton>
    </Box>
  );
}

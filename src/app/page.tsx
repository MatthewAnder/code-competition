"use client";

import { Box, Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <Box>
      <form onSubmit={async () => signIn()}>
        <Button type="submit">sign ina</Button>
      </form>
    </Box>
  );
}

import { Box, Button, Center, Heading, VStack } from "@chakra-ui/react";
import { signOut } from "auth";

const Logout = () => {
  const handleLogout = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };
  return (
    <VStack>
      <Heading>Are you sure you want to sign out?</Heading>
      <form action={handleLogout}>
        <Button type="submit">Sign Out</Button>
      </form>
    </VStack>
  );
};

export default Logout;

import { redirect } from "next/navigation";
import { validateRequest } from "@/auth";
import { Heading } from "@chakra-ui/react";

const Home = async () => {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }
  return (
    <>
      <Heading>Hi, {user.id}</Heading>
    </>
  );
};

export default Home;

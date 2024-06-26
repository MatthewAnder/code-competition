import { Heading, Link, Stack } from "@chakra-ui/react";

const Login = () => {
  return (
    <Stack textAlign={"center"}>
      <Heading fontSize={"7xl"}>Sign in</Heading>
      <Link href="/login/github" color={"text.main"}>
        Sign in with GitHub
      </Link>
    </Stack>
  );
};

export default Login;

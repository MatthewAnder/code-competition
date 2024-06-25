import { Heading, Link } from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      <Heading>Sign in</Heading>
      <Link href="/login/github">Sign in with GitHub</Link>
    </>
  );
};

export default Login;

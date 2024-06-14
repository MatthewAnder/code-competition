import { providerMap, signIn } from "@/auth";
import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface Form {
  name: string;
}

const Login = () => {
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors, isSubmitting },
  // } = useForm<Form>();

  return (
    <>
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.name}
          onSubmit={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button type="submit">Sign in with {provider.name}</Button>
        </form>
      ))}
    </>
  );
};

export default Login;

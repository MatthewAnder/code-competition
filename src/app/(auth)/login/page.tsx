import { providerMap, signIn } from "auth";
import { AuthError } from "next-auth";
import { Button } from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      {Object.values(providerMap).map((provider) => (
        <form
          action={async () => {
            "use server";
            try {
              await signIn(provider.id, { redirectTo: "/" });
            } catch (error) {
              if (error instanceof AuthError) {
                // return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
              }

              // Otherwise if a redirects happens NextJS can handle it
              // so you can just re-thrown the error and let NextJS handle it.
              // Docs:
              // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
              throw error;
            }
          }}
        >
          <Button type="submit" color={"pink"}>
            Sign in with {provider.name}
          </Button>
        </form>
      ))}
    </>
  );
};

export default Login;

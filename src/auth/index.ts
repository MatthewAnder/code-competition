import { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { Provider } from "next-auth/providers/index";

const providers: Provider[] = [
  Google,
  Github({
    clientId: ``,
    clientSecret: ``,
  }),
];

const authOptions = {
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
  providers,
} satisfies NextAuthConfig;

export const providerMap = providers.map((provider: Provider) => {
  return { id: `${provider.options?.id}`, name: provider.name };
});

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions);

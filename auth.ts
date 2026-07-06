import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      authorization: { params: { prompt: "select_account" } },
    }),
  ],
  session: { strategy: "database" },
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      session.user.language = user.language;
      session.user.firstName = user.firstName;
      (session.user as { birthDate: string | null }).birthDate = user.birthDate
        ? user.birthDate.toISOString()
        : null;
      return session;
    },
  },
});

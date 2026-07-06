import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      language: string;
      firstName: string | null;
      birthDate: string | null;
    } & DefaultSession["user"];
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    language: string;
    firstName: string | null;
    birthDate: Date | null;
  }
}

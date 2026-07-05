import { auth, signIn, signOut } from "@/auth";

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    return (
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="authBar"
      >
        <span>{session.user.name ?? session.user.email}</span>
        <button type="submit">Se déconnecter</button>
      </form>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
      className="authBar"
    >
      <button type="submit">Se connecter avec Google</button>
    </form>
  );
}

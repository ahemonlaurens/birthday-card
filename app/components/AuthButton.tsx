import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="authBar">
        <span>{session.user.firstName ?? session.user.name ?? session.user.email}</span>
        <Link href="/profil">Profil</Link>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Se déconnecter</button>
        </form>
      </div>
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

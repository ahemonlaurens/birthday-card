import { auth } from "@/auth";
import { LANGS, type Lang } from "@/lib/i18n";
import AuthButton from "@/app/components/AuthButton";
import BirthdayCard from "@/app/BirthdayCard";

export default async function Home() {
  const session = await auth();
  const sessionLang = session?.user?.language;
  const initialLang: Lang = LANGS.includes(sessionLang as Lang)
    ? (sessionLang as Lang)
    : "fr";

  return (
    <div className="pg">
      <div className="pg_cont">
        <div className="topBar">
          <AuthButton />
        </div>
        <BirthdayCard initialLang={initialLang} isLoggedIn={!!session?.user} />
      </div>
    </div>
  );
}

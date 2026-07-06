import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { updateProfile } from "@/app/actions/profile";

export default async function ProfilPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  const birthDateValue = session.user.birthDate
    ? session.user.birthDate.slice(0, 10)
    : "";

  return (
    <div className="pg">
      <div className="pg_cont">
        <table className="m_tbl" role="presentation">
          <tbody>
            <tr>
              <td className="eu_h">Mon profil</td>
            </tr>
            <tr>
              <td className="eu_co">
                <hr />
                <form action={updateProfile} className="profilForm">
                  <label htmlFor="firstName">Prénom</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    defaultValue={session.user.firstName ?? ""}
                  />

                  <label htmlFor="lastName">Nom</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    defaultValue={session.user.lastName ?? ""}
                  />

                  <label htmlFor="birthDate">Date de naissance</label>
                  <input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    defaultValue={birthDateValue}
                  />

                  <button type="submit" className="btn profilBtn">
                    Valider
                  </button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

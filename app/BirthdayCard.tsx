"use client";

import { Fragment, useState } from "react";
import { LANGS, MESSAGES, type Lang } from "@/lib/i18n";
import { updateLanguage } from "@/app/actions/language";

export default function BirthdayCard({
  initialLang,
  isLoggedIn,
}: {
  initialLang: Lang;
  isLoggedIn: boolean;
}) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const msg = MESSAGES[lang];

  function selectLang(l: Lang) {
    setLang(l);
    if (isLoggedIn) {
      updateLanguage(l);
    }
  }

  return (
    <table className="m_tbl" role="presentation">
      <tbody>
        <tr>
          <td>
            <div className="langSelector">
              {LANGS.map((l, i) => (
                <Fragment key={l}>
                  <button
                    type="button"
                    className={l === lang ? "active" : ""}
                    onClick={() => selectLang(l)}
                  >
                    {l.toUpperCase()}
                  </button>
                  {i < LANGS.length - 1 && <span className="sprt" />}
                </Fragment>
              ))}
            </div>
          </td>
        </tr>
        <tr>
          <td className="eu_h">
            <span className="a_i" role="img" aria-label="cadeau">
              🎂
            </span>
            <div>{msg.title}</div>
          </td>
        </tr>
        <tr>
          <td className="eu_co">
            <hr />
            <p style={{ marginTop: 20 }}>{msg.body}</p>
            <button type="button" className="btn">
              🎉
            </button>
          </td>
        </tr>
        <tr>
          <td className="eu_co fo">{msg.footer}</td>
        </tr>
      </tbody>
    </table>
  );
}

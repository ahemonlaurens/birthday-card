"use client";

import { Fragment, useState } from "react";

type Lang = "fr" | "en" | "de";

const MESSAGES: Record<Lang, { title: string; body: string; footer: string }> = {
  fr: {
    title: "Bon anniversaire",
    body: "Nous te souhaitons une merveilleuse journée entourée de ceux que tu aimes !",
    footer: "Avec toute notre affection.",
  },
  en: {
    title: "Happy birthday",
    body: "We wish you a wonderful day surrounded by the people you love!",
    footer: "With all our affection.",
  },
  de: {
    title: "Alles Gute zum Geburtstag",
    body: "Wir wünschen dir einen wunderschönen Tag im Kreise deiner Liebsten!",
    footer: "Mit herzlichen Grüßen.",
  },
};

const LANGS: Lang[] = ["fr", "en", "de"];

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const msg = MESSAGES[lang];

  return (
    <div className="pg">
      <div className="pg_cont">
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
                        onClick={() => setLang(l)}
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
      </div>
    </div>
  );
}

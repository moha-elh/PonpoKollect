"use client";
import { useEffect, useState } from "react";

type Msg = { me: boolean; text: string };
const script: Msg[] = [
  { me: true, text: "Hi Ponpo! I’d like to order: Spell Ruler “25th Anniversary” Booster Box (1 800 MAD)." },
  { me: false, text: "Available! Which city, and where should I send it?" },
  { me: true, text: "Casablanca, Maarif. Near the tram stop works." },
  { me: false, text: "Perfect. It ships with Cathedis, you pay when it arrives." },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Example DM that plays once: the buyer's lines are typed into the input and sent, Ponpoko's replies just arrive. */
export default function ChatDemo() {
  const [shown, setShown] = useState(0);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(script.length); return; }
    let alive = true;
    (async () => {
      await sleep(900);
      for (let i = 0; i < script.length && alive; i++) {
        const m = script[i];
        if (m.me) {
          const step = Math.max(14, Math.min(32, 1600 / m.text.length));
          for (let c = 1; c <= m.text.length && alive; c++) { setDraft(m.text.slice(0, c)); await sleep(step); }
          await sleep(350);
          setDraft("");
        } else {
          await sleep(900);
        }
        if (alive) setShown(i + 1);
        await sleep(600);
      }
    })();
    return () => { alive = false; };
  }, []);

  const shownDraft = draft.length > 40 ? "…" + draft.slice(-40) : draft;

  return (
    <figure className="chat">
      <figcaption className="chat-top">
        <img src="/assets/ponpoko-pfp.webp" alt="" />
        <span><b>ponpokollect</b><span className="s12 muted">Example conversation</span></span>
      </figcaption>
      {/* All bubbles are laid out from the start (hidden until sent) so the card never changes size. */}
      {script.map((m, i) => (
        <p key={i} className={`msg ${m.me ? "me" : "her"}${i < shown ? "" : " wait"}`}>{m.text}</p>
      ))}
      <div className="chat-in" aria-hidden="true">
        <span className={draft ? "txt on" : "txt"}>{draft ? shownDraft : "Message…"}{draft && <i className="caret" />}</span>
        <span className={draft ? "send on" : "send"}>Send</span>
      </div>
    </figure>
  );
}

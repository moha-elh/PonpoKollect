"use client";
import { useEffect, useState, type CSSProperties } from "react";

type Msg = { me: boolean; text: string };
const script: Msg[] = [
  { me: true, text: "Hi Ponpo! I’d like to order: Spell Ruler “25th Anniversary” Booster Box (1 800 MAD)." },
  { me: false, text: "Available! Which city, and where should I send it?" },
  { me: true, text: "Casablanca, Maarif. Near the tram stop works." },
  { me: false, text: "Perfect. It ships with Cathedis, you pay when it arrives." },
  { me: true, text: "Merci! 🙏" },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Looping example DM: the visitor's lines are typed into the input and sent, Ponpoko "types" before each reply. */
export default function ChatDemo() {
  const [shown, setShown] = useState(0);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(script.length); return; }
    let alive = true;
    const run = async () => {
      await sleep(900);
      while (alive) {
        for (let i = 0; i < script.length && alive; i++) {
          const m = script[i];
          if (m.me) {
            const step = Math.max(14, Math.min(32, 1600 / m.text.length));
            for (let c = 1; c <= m.text.length && alive; c++) { setDraft(m.text.slice(0, c)); await sleep(step); }
            await sleep(350);
            setDraft("");
          } else {
            await sleep(500);
            setTyping(true);
            await sleep(1300 + m.text.length * 12);
            setTyping(false);
          }
          if (alive) setShown(i + 1);
          await sleep(700);
        }
        await sleep(4500);
        setFade(true);
        await sleep(500);
        setShown(0);
        setFade(false);
        await sleep(600);
      }
    };
    run();
    return () => { alive = false; };
  }, []);


  const seen = shown > 0 && script[shown - 1].me && (typing || shown === script.length);

  return (
    <figure className="chat fade-in" style={{ "--d": ".2s" } as CSSProperties} aria-label="Example conversation with Ponpoko">
      <figcaption className="chat-top">
        <span className="av"><img src="/assets/ponpoko-pfp.webp" alt="" /><i className="dot" /></span>
        <span><b>ponpokollect</b><span className={typing ? "s12 st on" : "s12 st"}>{typing ? "typing…" : "Active now"}</span></span>
        <span className="s12 muted ex">Example</span>
      </figcaption>

      <div className={fade ? "msgs out" : "msgs"}>
        {script.slice(0, shown).map((m, i) => (
          <p key={i} className={m.me ? "msg me" : "msg her"}>{m.text}</p>
        ))}
        {seen && <span className="seen s12 muted">Seen</span>}
        {typing && <p className="msg her dots"><i /><i /><i /></p>}
      </div>

      <div className="chat-in" aria-hidden="true">
        <span className={draft ? "txt on" : "txt"}>{draft ? (draft.length > 40 ? "…" + draft.slice(-40) : draft) : "Message…"}{draft && <i className="caret" />}</span>
        <span className={draft ? "send on" : "send"}>Send</span>
      </div>
    </figure>
  );
}

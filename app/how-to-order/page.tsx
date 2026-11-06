import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import css from "@/styles/how";
import { Burst, DmLink } from "@/components/ui";
import type { IconName } from "@/components/icons";
import Builder from "./Builder";

export const metadata: Metadata = { title: "How to order", description: "One DM, a quick confirmation, and you pay in cash when the parcel reaches you. Delivered across Morocco in 2–3 days." };

const d = (s: string) => ({ "--d": s }) as CSSProperties;

const steps: [IconName, string, string, string][] = [
  ["chat", "#FEC604", "Send a DM", "Tap Order on Instagram on any product. Ponpoko’s DMs open with your message already copied. Paste it and send."],
  ["shield", "#E7C9DF", "Confirm", "Ponpoko checks stock and confirms the price, the delivery cost and where to deliver: a city, district, house or another place you agree on."],
  ["truck", "#F08448", "Pay at the door", "Your order ships with Cathedis and arrives in 2 to 3 days to priority destinations. You pay in cash when it reaches you."],
];

export default function HowToOrder() {
  return (
    <main>
      <style>{css}</style>

      <section className="hw-hero">
        <div className="wrap hw-hero-in">
          <div className="hw-copy">
            <span className="tag plum fade-in" style={{ alignSelf: "flex-start" }}>No account, no card</span>
            <h1 className="h1 fade-in" style={d(".08s")}>Order in one DM.</h1>
            <p className="lede fade-in" style={d(".16s")}>Send Ponpoko a message, confirm the details together, and pay in cash when the parcel reaches you anywhere in Morocco.</p>
            <div className="fade-in" style={{ ...d(".24s"), display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-ink" href="#builder">Write my message</a>
              <Link className="btn btn-line" href="/faq/">Read the FAQ</Link>
            </div>
          </div>

          <figure className="chat fade-in" style={d(".2s")}>
            <figcaption className="chat-top">
              <img src="/assets/ponpoko-pfp.webp" alt="" />
              <span><b>ponpokollect</b><span className="s12 muted">Example conversation</span></span>
            </figcaption>
            <p className="msg me">Hi Ponpo! I’d like to order: Spell Ruler “25th Anniversary” Booster Box (1 800 MAD).</p>
            <p className="msg her">Available! Which city, and where should I send it?</p>
            <p className="msg me">Casablanca, Maarif. Near the tram stop works.</p>
            <p className="msg her">Perfect. It ships with Cathedis, you pay when it arrives.</p>
          </figure>
        </div>
      </section>

      <section className="wrap hw-steps" aria-labelledby="steps-h">
        <h2 className="h2" id="steps-h">Three steps, start to finish</h2>
        <ol className="tl reveal">
          {steps.map(([icon, color, title, body], i) => (
            <li key={title}>
              <Burst icon={icon} color={color} />
              <span className="num">0{i + 1}</span>
              <span className="h3">{title}</span>
              <span className="s14 muted">{body}</span>
            </li>
          ))}
        </ol>
      </section>

      <Builder />

      <section className="wrap hw-end">
        <div>
          <h2 className="h2">Still have a question?</h2>
          <p className="lede">Payment, delivery and returns are covered in the FAQ. Anything else, just ask.</p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link className="btn btn-ink" href="/faq/">Read the FAQ</Link>
          <DmLink className="btn btn-line" msg="Hi Ponpo! I have a question: ">Ask Ponpoko</DmLink>
        </div>
      </section>
    </main>
  );
}

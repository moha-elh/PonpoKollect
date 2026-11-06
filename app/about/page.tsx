import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import css from "@/styles/about";
import { products, IG } from "@/lib/products";
import { Burst, DmLink } from "@/components/ui";
import type { IconName } from "@/components/icons";

export const metadata: Metadata = { title: "Meet Ponpoko", description: "The raccoon behind Ponpo Kollect: a Moroccan Yu-Gi-Oh! collector who fills the vault from her own travels." };

const d = (s: string) => ({ "--d": s }) as CSSProperties;
const ext = { target: "_blank", rel: "noopener" };

const shots = [
  { img: "/assets/ig_amsterdam.webp", alt: "Ponpoko holding a dragon card in Amsterdam", cap: "A pull in Amsterdam", cls: "shot tall" },
  { img: "/assets/ig_exodia.webp", alt: "A graded Exodia the Forbidden One", cap: "Graded Exodia", cls: "shot" },
  { img: "/assets/ig_sardines.webp", alt: "A card inside a Sardines en chocolat tin", cap: "Snack meets card", cls: "shot" },
  { img: "/assets/ig_trap.webp", alt: "Hands opening a card with the raccoon persona below", cap: "Desk pulls", cls: "shot tall" },
];
const steps: [IconName, string, string, string][] = [
  ["airplane", "#E7C9DF", "She travels", "Whenever Ponpoko travels, she brings back different products for the shop."],
  ["shield", "#FEC604", "Customs cleared", "Everything goes through customs clearance before it’s listed."],
  ["chat", "#F08448", "You ask for it", "Hunting something? Ask in the DMs and it might be in her next suitcase."],
];

export default function About() {
  return (
    <main>
      <style>{css}</style>
      <section className="hero">
        <div className="wrap hero-in">
          <div className="hero-copy">
            <span className="tag plum fade-in" style={{ alignSelf: "flex-start", position: "relative" }}>Who’s the raccoon?<Burst icon="star" color="#F08448" className="bst-d" /></span>
            <h1 className="bigname fade-in" style={d(".08s")}>Meet Ponpoko.</h1>
            <p className="lede fade-in" style={d(".16s")}>A Moroccan Yu-Gi-Oh! enthusiast who shares her passion for the game and the anime, as a raccoon. She runs @ponpokollect, a verified Instagram with 13.1K followers, and fills this shop from her own travels.</p>
            <div className="lines fade-in" style={d(".24s")}><span className="tag">Collecting</span><span className="tag">Snacking</span><span className="tag">Maghrebia</span><span className="tag">Verified creator</span></div>
            <div className="fade-in" style={{ ...d(".32s"), display: "flex", gap: 12, flexWrap: "wrap", alignSelf: "flex-start", position: "relative" }}>
              <a className="btn btn-ink" href={IG} {...ext}>Follow @ponpokollect</a>
              <Link className="btn btn-line" href="/shop/">Shop the vault</Link>
              <img className="stk-d" src="/assets/ponpoko-sticker.webp" alt="" />
            </div>
          </div>
          <div className="hero-art fade-in" style={d(".1s")}>
            <div className="arch"><img src="/assets/ponpoko-pfp.webp" alt="Ponpoko’s raccoon avatar: orange hair, goggles, raccoon ears and a fur collar" /></div>
            <img className="stk" src="/assets/ponpoko-sticker.webp" alt="Ponpoko sticker holding a heart" />
            <Burst icon="star" color="#F08448" className="bst" />
          </div>
        </div>
      </section>

      <section className="wrap statement reveal">
        <span className="tag" style={{ justifySelf: "start" }}>Ponpoko’s Vault</span>
        <p>Not a wholesale distributor. <br/>
        Every product was <em>handpicked by Ponpoko abroad</em> and went through customs clearance, in the hope of bringing Yu-Gi-Oh! a little closer to the community.</p>
      </section>

      <section className="wrap" aria-labelledby="feed-h">
        <div className="shead"><h2 className="h2" id="feed-h">From the feed</h2><a className="ulink" href={IG} {...ext}>See all on Instagram</a></div>
        <div className="collage reveal">
          {shots.map((s) => (
            <a key={s.img} className={s.cls} href={IG} {...ext}><img src={s.img} alt={s.alt} loading="lazy" /><span className="cap">{s.cap}</span></a>
          ))}
          <a className="shot" style={{ gridColumn: "span 2" }} href={IG} {...ext}>
            <img src="/assets/ig_giveaway.webp" alt="Giveaway prizes for 10K followers" style={{ objectPosition: "50% 40%" }} loading="lazy" /><span className="cap">The 10K followers giveaway</span>
          </a>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="how-h">
        <div className="shead"><h2 className="h2" id="how-h">How the vault gets filled</h2></div>
        <ol className="steps reveal">
          {steps.map(([icon, color, title, body], i) => (
            <li key={title}><Burst icon={icon} color={color} /><div><span className="n">0{i + 1}</span><span className="h3">{title}</span><span className="s14 muted">{body}</span></div></li>
          ))}
        </ol>
      </section>

      <section className="nums" aria-label="In numbers">
        <div className="wrap nums-grid reveal">
          <div><b>13.1K</b><span>Instagram followers</span></div>
          <div><b>10K</b><span>Followers giveaway thrown</span></div>
          <div><b>{products.length}</b><span>Products in the vault</span></div>
          <div><b>1–3</b><span>Days to deliver, pay on arrival</span></div>
        </div>
      </section>

      <section className="wrap">
        <div className="cta reveal">
          <img src="/assets/ponpoko-sticker.webp" alt="Ponpoko sticker holding a heart" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}><h2 className="h2">Hunting a card?</h2><p className="lede" style={{ color: "#3B2A22" }}>Tell Ponpoko what you’re looking for. It might be in her next suitcase.</p></div>
          <DmLink className="btn btn-ink" msg="Hi Ponpo! I’m looking for: ">Message Ponpoko</DmLink>
        </div>
      </section>
    </main>
  );
}

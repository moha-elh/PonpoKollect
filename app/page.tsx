import Link from "next/link";
import type { CSSProperties } from "react";
import css from "@/styles/home";
import { products, getProduct, instagramPosts, fmt, rarityTag, IG } from "@/lib/products";
import { ProductGrid } from "@/components/ProductCard";
import { Burst, DmLink } from "@/components/ui";
import Carousel from "@/components/Carousel";

const byId = (id: string) => getProduct(id)!;
const count = (cat: string) => products.filter((p) => p.category === cat).length;

// Floating products in the hero. Positions q0–q5 live in styles/home.ts.
const heroProps = [
  { id: "lob25", pos: "q0", r: 5, d: 0.25, cut: true },
  { id: "majestic", pos: "q1", r: -12, d: 0.4 },
  { id: "bls", pos: "q2", r: 10, d: 0.55 },
  { id: "beud", pos: "q3", r: 22, d: 0.7 },
];
const fresh = ["lob25", "majestic", "shaddoll", "ioc25", "bane", "bewd", "ps25", "inf"].map(byId);
const singles = products.filter((p) => p.card);
const tiles = [
  { cat: "boxes", label: "Booster boxes", img: "/assets/lob25.webp" },
  { cat: "singles", label: "Rare singles", img: "/assets/majestic.webp" },
  { cat: "decks", label: "Decks", img: "/assets/bewd.webp" },
  { cat: "boosters", label: "Boosters", img: "/assets/inf.webp" },
];
// PLACEHOLDER reviews (invented quotes): replace with real buyer messages before launch.
const reviews = [
  { text: "“L’box wslatni f 2 iyam, mbakiya mzyan. Merci Ponpo!”", img: "/assets/review-1.jpg", item: "Booster box · Casablanca" },
  { text: "“L’carta kima f tsswira bdebt. Ghadi n3awd nchri.”", img: "/assets/review-2.jpg", item: "Rare single · Tanger" },
];
const v = (o: Record<string, string | number>) => o as CSSProperties;

export default function Home() {
  return (
    <main>
      <style>{css}</style>

      <section className="hero" aria-label="Welcome">
        <div className="hero-media">
          <img className="hero-img fade-in" src="/assets/hero.webp" alt="Ponpoko, the raccoon behind Ponpo Kollect" fetchPriority="high" />
          {heroProps.map((h, i) => {
            const p = byId(h.id);
            return (
              <span key={h.id} className={`hp deal ${h.pos}`} style={v({ "--r": h.r + "deg", "--d": h.d + "s" })}>
                <span className="bob" style={v({ "--bd": i * 0.7 + "s" })}>
                  {h.cut
                    ? <span className="holo m-lob"><img src={p.image} alt={p.name} /></span>
                    : <span className="foil"><img src={p.image} alt={p.name} /></span>}
                </span>
              </span>
            );
          })}
        </div>
        <div className="hero-copy">
          <h1 className="h1 fade-in" style={v({ "--d": ".08s" })}><span className="hl">Rare cards,</span><br /><span className="hl">sealed boxes,</span><br />handpicked abroad.</h1>
          <p className="lede fade-in" style={v({ "--d": ".16s" })}>Every product is picked by Ponpoko on her travels and cleared through customs, to bring Yu-Gi-Oh! a little closer to the community in Morocco.</p>
          <div className="fade-in" style={v({ "--d": ".24s", display: "flex", gap: 12, flexWrap: "wrap" })}>
            <Link className="btn btn-ink" href="/shop/">Shop the vault</Link>
            <DmLink className="btn btn-line" msg="Hi Ponpo! I’d like to order: ">Order on Instagram</DmLink>
          </div>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="cat-h">
        <div className="shead"><h2 className="h2" id="cat-h">Shop the vault</h2><Link className="ulink" href="/shop/">Shop all</Link></div>
        <div className="cats reveal">
          {tiles.map((t) => (
            <Link key={t.cat} className="cat" href={`/shop/?cat=${t.cat}`}>
              <span className="im"><img src={t.img} alt="" /></span>
              <span className="lb"><b>{t.label}</b><span className="mono s12">{count(t.cat)}</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="new-h" style={{ paddingTop: 0 }}>
        <div className="shead"><h2 className="h2" id="new-h">New in the vault</h2><Link className="ulink" href="/shop/">View all {products.length}</Link></div>
        <ProductGrid items={fresh} />
      </section>

      <section className="why" aria-label="Why order from Ponpo">
        <div className="wrap why-grid reveal">
          <div className="why-item"><Burst icon="money" color="#FEC604" /><div><span className="h3">Pay on delivery</span><span className="s14 muted">Cash when the parcel reaches you. Nothing to pay up front, no card needed.</span></div></div>
          <div className="why-item"><Burst icon="truck" color="#F08448" /><div><span className="h3">1–3 day delivery</span><span className="s14 muted">Shipped with Cathedis to the place you agree on. Free on orders over 1 500 MAD.</span></div></div>
          <div className="why-item"><Burst icon="airplane" color="#E7C9DF" /><div><span className="h3">Handpicked abroad</span><span className="s14 muted">Not a wholesaler. Ponpoko brings every product back from her own trips.</span></div></div>
          <div className="why-item"><Burst icon="shield" color="#FFFFFF" /><div><span className="h3">Customs cleared</span><span className="s14 muted">Every product has gone through customs clearance before it’s sold.</span></div></div>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="reel-h">
        <div className="shead">
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}><h2 className="h2" id="reel-h">Watch the pulls</h2><p className="lede">Unboxings, graded slabs and travel finds, straight from @ponpokollect.</p></div>
          <a className="btn btn-line btn-sm" href={IG} target="_blank" rel="noopener">Follow on Instagram</a>
        </div>
        <Carousel posts={instagramPosts} />
      </section>

      <section className="wrap sec" aria-labelledby="sing-h" style={{ paddingTop: 0 }}>
        <div className="shead"><h2 className="h2" id="sing-h">Rare singles</h2><Link className="ulink" href="/shop/?cat=singles">All singles</Link></div>
        <div className="row">
          {singles.map((p) => (
            <Link key={p.id} className="single reveal" href={`/products/${p.id}/`}>
              <span className="foil"><img src={p.image} alt={p.name} loading="lazy" /></span>
              <span className="tag" style={{ alignSelf: "flex-start" }}>{rarityTag(p)}</span>
              <span className="s14 clamp2" title={p.name}>{p.name}</span>
              <span className="price">{fmt(p.price)}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="fb-h" style={{ paddingTop: 0 }}>
        <div className="shead">
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}><h2 className="h2" id="fb-h">Straight from the DMs</h2><p className="lede">What buyers say after their parcel arrives.</p></div>
        </div>
        <div className="fb reveal">
          <a className="fb-card real" href="https://www.instagram.com/stories/highlights/17881132455395042/" target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            <span className="tag" style={{ alignSelf: "flex-start", background: "#F08448" }}>Shared in his story</span>
            <span className="s20" style={{ color: "#F3EEE9" }}>“I’m about to cry welah”</span>
            <span className="who"><img className="av" src="/assets/toto-pfp.webp" alt="" /><span style={{ display: "flex", flexDirection: "column" }}><span className="s14 med">ElGrandeToto</span><span className="mono s12 muted">See the story highlight</span></span></span>
          </a>
          {reviews.map((r) => (
            <figure key={r.text} className="fb-card" style={{ margin: 0 }}>
                            <blockquote className="s20" style={{ margin: 0 }}>{r.text}</blockquote>
              <figcaption className="who"><img className="av" src={r.img} alt="" /><span style={{ display: "flex", flexDirection: "column" }}><span className="s14 med">Buyer</span><span className="mono s12 muted">{r.item}</span></span></figcaption>
            </figure>
          ))}
          <div className="fb-cta">
            <span className="h3" style={{ maxWidth: "12em" }}>Got your order? Tell Ponpoko how it went.</span>
            <DmLink className="btn btn-ink btn-sm" style={{ alignSelf: "flex-start", position: "relative", zIndex: 1 }} msg="Hi Ponpo! Feedback on my order: ">Send feedback</DmLink>
            <img src="/assets/ponpoko-sticker.webp" alt="" />
          </div>
        </div>
      </section>

      <section className="meet" aria-labelledby="about-h">
        <div className="wrap meet-in">
          <img className="stk" src="/assets/ponpoko-sticker.webp" alt="Ponpoko sticker holding a heart" />
          <div className="copy reveal">
            <span className="tag plum" style={{ alignSelf: "flex-start" }}>Who’s the raccoon?</span>
            <h2 className="h2" id="about-h">The raccoon behind the vault.</h2>
            <p className="lede" style={{ color: "#3B2A22" }}>A Moroccan Yu-Gi-Oh! enthusiast sharing her passion for the game and the anime. Whenever Ponpoko travels, she brings back new products. Ask for your favourites in the DMs.</p>
            <ul className="mstats">
              <li><b>13.1K</b><span className="mono s12">followers</span></li>
              <li><b>10K</b><span className="mono s12">giveaway thrown</span></li>
              <li><b>{products.length}</b><span className="mono s12">products in stock</span></li>
            </ul>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btn-ink" href="/about/">Meet Ponpoko</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

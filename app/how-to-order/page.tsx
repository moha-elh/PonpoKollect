import type { Metadata } from "next";
import type { CSSProperties } from "react";
import css from "@/styles/how";
import { POLICY } from "@/lib/products";
import Builder from "./Builder";

export const metadata: Metadata = { title: "How to order", description: "One DM, a quick confirmation, and you pay in cash when the parcel reaches you. Delivered across Morocco in 2–3 days." };

export default function HowToOrder() {
  return (
    <main className="wrap">
      <style>{css}</style>
      <section className="head">
        <h1 className="h1 fade-in">How to order</h1>
        <p className="lede fade-in" style={{ "--d": ".08s" } as CSSProperties}>One DM, a quick confirmation, and you pay in cash when the parcel reaches you. No account, no card.</p>
      </section>

      <ol className="steps reveal" aria-label="Three steps">
        <li>
          <span className="n">01</span>
          <span className="h3">DM</span>
          <span className="s14 muted">Tap Order on Instagram on any product. Ponpoko’s DMs open and your message is already copied. Paste it and send.</span>
          <p className="bubble">Hi Ponpo! I’d like to order: Spell Ruler “25th Anniversary” Booster Box (1 800 MAD).</p>
        </li>
        <li>
          <span className="n">02</span>
          <span className="h3">Confirm</span>
          <span className="s14 muted">Ponpoko checks stock and confirms the price and your delivery address: city, district, house or another place you agree on.</span>
        </li>
        <li>
          <span className="n">03</span>
          <span className="h3">Shipped across Morocco</span>
          <span className="s14 muted">Your order ships with Cathedis, in 2 to 3 days to priority destinations. You pay on delivery.</span>
        </li>
      </ol>

      <Builder />

      <section className="faq" id="faq" aria-labelledby="faq-h" style={{ scrollMarginTop: 120 }}>
        <h2 className="h2" id="faq-h">Questions</h2>
        <div>
          <details open><summary>How do I pay?</summary><p>Cash on delivery. You place the order, and pay when the product reaches the place you agreed on.</p></details>
          <details><summary>How long does delivery take?</summary><p>Orders ship with Cathedis, which delivers within 2 to 3 days to priority destinations.</p></details>
          <details><summary>Where does the stock come from?</summary><p>Ponpoko handpicks every product abroad. Everything has gone through customs clearance before it’s sold.</p></details>
          <details><summary>Can you find a card that isn’t listed?</summary><p>Ask in the DMs. Ponpoko brings back different products whenever she travels.</p></details>
          <details><summary>Returns?</summary><p>See the <a href={POLICY + "return-policy"} target="_blank" rel="noopener">return policy</a>.</p></details>
        </div>
      </section>
    </main>
  );
}

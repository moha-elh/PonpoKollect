import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import css from "@/styles/faq";
import { POLICY } from "@/lib/products";
import { DmLink } from "@/components/ui";

export const metadata: Metadata = { title: "FAQ", description: "Ordering, payment, delivery and returns at Ponpo Kollect: pay in cash on delivery, shipped across Morocco in 1–3 days, free over 1 500 MAD." };

const ext = { target: "_blank", rel: "noopener" };

const groups: { id: string; title: string; items: [string, ReactNode][] }[] = [
  { id: "ordering", title: "Ordering", items: [
    ["How do I order?", <>Send Ponpoko a DM on Instagram. Every Order on Instagram button copies a ready message for you, so you only paste and send. The <Link href="/how-to-order/">how to order</Link> page walks through it.</>],
    ["Do I need an account or a card?", "No. There’s no account to create and no card to enter. Everything happens in the DM."],
    ["Can I order more than one product?", <>Yes. List everything in one message, or use <Link href="/how-to-order/#builder">Write my message</Link> to pick a product and quantity.</>],
    ["Is everything on the site in stock?", "Ponpoko checks stock and confirms it in the DM before anything ships."],
  ] },
  { id: "payment", title: "Payment", items: [
    ["How do I pay?", "Cash on delivery. You pay when the product reaches the place you agreed on."],
    ["Do I pay anything up front?", "No. Nothing is paid before the parcel reaches you."],
    ["How much is delivery?", "Between 25 and 45 MAD, depending on your region. Ponpoko confirms the exact cost in the DM along with the price."],
    ["Is delivery ever free?", "Yes. Delivery is free on orders above 1 500 MAD."],
    ["I want to order a large quantity. Is there a discount?", "Orders above 1 500 MAD ship for free. For anything bigger, ask Ponpoko in the DMs."],
  ] },
  { id: "delivery", title: "Delivery", items: [
    ["Who delivers my order?", "Orders ship with Cathedis."],
    ["How long does delivery take?", "Usually 1 to 3 days with Cathedis, depending on where you are."],
    ["Where can you deliver?", "Across Morocco: to your city, district, house or another place you agree on with Ponpoko."],
  ] },
  { id: "products", title: "Products", items: [
    ["Where does the stock come from?", "Ponpoko handpicks every product abroad, on her own travels. It isn’t bought from a wholesaler."],
    ["Has everything cleared customs?", "Yes. Every product goes through customs clearance before it’s sold."],
    ["Can you find a card that isn’t listed?", "Ask in the DMs. Ponpoko brings back different products whenever she travels, and it might end up in her next suitcase."],
  ] },
  { id: "returns", title: "Returns", items: [
    ["Can I return an order?", <>See the <a href={POLICY + "return-policy"} {...ext}>return policy</a> for what can be returned and how.</>],
  ] },
];

export default function Faq() {
  return (
    <main className="wrap">
      <style>{css}</style>

      <section className="fq-head">
        <div className="fq-copy">
          <h1 className="h1 fade-in">Questions, answered.</h1>
          <p className="lede fade-in" style={{ "--d": ".08s" } as CSSProperties}>Ordering, payment, delivery and returns. If your question isn’t here, Ponpoko answers in the DMs.</p>
        </div>
        <img className="fq-stk fade-in" style={{ "--d": ".16s" } as CSSProperties} src="/assets/ponpoko-sticker.webp" alt="" />
      </section>

      <div className="fq-body">
        <nav className="fq-nav" aria-label="FAQ topics">
          {groups.map((g) => <a key={g.id} href={`#${g.id}`}>{g.title}<span>{g.items.length}</span></a>)}
        </nav>

        <div className="fq-groups">
          {groups.map((g) => (
            <section key={g.id} id={g.id} className="fq-group" aria-labelledby={`${g.id}-h`}>
              <h2 className="h3" id={`${g.id}-h`}>{g.title}</h2>
              <div>
                {g.items.map(([q, a]) => (
                  <details key={q}>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="fq-ask">
        <img src="/assets/ponpoko-pfp.webp" alt="" />
        <div>
          <h2 className="h2">Didn’t find your answer?</h2>
          <p className="lede">Send Ponpoko a message. She replies in the DMs.</p>
        </div>
        <DmLink className="btn btn-ink" msg="Hi Ponpo! I have a question: ">Ask Ponpoko</DmLink>
      </section>
    </main>
  );
}

"use client";
import { useState } from "react";
import { products, fmt, orderMsg } from "@/lib/products";
import { DmLink } from "@/components/ui";

export default function Builder() {
  const [i, setI] = useState(0);
  const [qty, setQty] = useState(1);
  const p = products[i];
  const message = orderMsg(p, qty);

  return (
    <section className="builder" aria-labelledby="b-h">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <h2 className="h2" id="b-h">Write my message</h2>
        <p className="lede">Pick a product and quantity. We copy the message and open Ponpoko’s DMs.</p>
        <div className="field">
          <label htmlFor="pick">Product</label>
          <select id="pick" className="select" value={i} onChange={(e) => setI(Number(e.target.value))}>
            {products.map((o, n) => <option key={o.id} value={n}>{o.name} — {fmt(o.price)}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="qty">Quantity</label>
          <select id="qty" className="select" value={qty} onChange={(e) => setQty(Number(e.target.value))}>
            {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>
      <div className="preview reveal">
        <span className="tag" style={{ alignSelf: "flex-start" }}>Your message</span>
        <q>{message}</q>
        <span className="s12 muted">Total {fmt(p.price * qty)} · paid in cash on delivery. Delivery cost is confirmed in the DM.</span>
        <DmLink className="btn btn-ink" style={{ alignSelf: "flex-start" }} msg={message}>Copy and open Instagram</DmLink>
      </div>
    </section>
  );
}

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
    <section className="builder" id="builder" aria-labelledby="b-h">
      <div className="wrap builder-in">
        <div className="b-form">
          <h2 className="h2" id="b-h">Write my message</h2>
          <p className="lede">Pick a product and a quantity. We copy the message for you and open Ponpoko’s DMs.</p>
          <div className="field">
            <label htmlFor="pick">Product</label>
            <select id="pick" className="select" value={i} onChange={(e) => setI(Number(e.target.value))}>
              {products.map((o, n) => <option key={o.id} value={n}>{o.name} · {fmt(o.price)}</option>)}
            </select>
          </div>
          <div className="field">
            <span className="lbl" id="qty-l">Quantity</span>
            <div className="qty" role="group" aria-labelledby="qty-l">
              <button type="button" aria-label="One less" disabled={qty <= 1} onClick={() => setQty(qty - 1)}>−</button>
              <output aria-live="polite">{qty}</output>
              <button type="button" aria-label="One more" disabled={qty >= 5} onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>
        </div>
        <div className="b-out reveal">
          <div className="b-prod">
            <img src={p.image} alt="" />
            <span><span className="s14 clamp2" title={p.name}>{p.name}</span><span className="price">{fmt(p.price * qty)}</span></span>
          </div>
          <p className="msg me big">{message}</p>
          <span className="s12 b-note">Paid in cash on delivery. Delivery cost is confirmed in the DM.</span>
          <DmLink className="btn btn-yel" style={{ alignSelf: "flex-start" }} msg={message}>Copy and open Instagram</DmLink>
        </div>
      </div>
    </section>
  );
}

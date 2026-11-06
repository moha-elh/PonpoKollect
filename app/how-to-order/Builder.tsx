"use client";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { products, fmt, orderMsg } from "@/lib/products";
import { DmLink } from "@/components/ui";

/** Product picker: a listbox with thumbnails, plus a large preview of the hovered/focused product. */
function Picker({ value, onChange }: { value: number; onChange: (i: number) => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(value);
  const root = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const p = products[value];
  const a = products[active];

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("pointerdown", close);
    list.current?.children[active]?.scrollIntoView({ block: "nearest" });
    return () => document.removeEventListener("pointerdown", close);
  }, [open, active]);

  const toggle = () => { setActive(value); setOpen(!open); };
  const pick = (i: number) => { onChange(i); setOpen(false); };
  const onKey = (e: KeyboardEvent) => {
    const n = products.length;
    if (!open && ["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) { e.preventDefault(); toggle(); return; }
    if (!open) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((active + 1) % n); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((active - 1 + n) % n); }
    else if (e.key === "Home") { e.preventDefault(); setActive(0); }
    else if (e.key === "End") { e.preventDefault(); setActive(n - 1); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(active); }
    else if (e.key === "Escape" || e.key === "Tab") setOpen(false);
  };

  return (
    <div className="pick" ref={root}>
      <button type="button" id="pick" className="pick-btn" aria-haspopup="listbox" aria-expanded={open} aria-labelledby="pick-l pick"
        aria-activedescendant={open ? `opt-${active}` : undefined} onClick={toggle} onKeyDown={onKey}>
        <img src={p.image} alt="" />
        <span className="pick-name">{p.name}</span>
      </button>
      {open && (
        <div className="pick-pop">
          <ul ref={list} role="listbox" aria-labelledby="pick-l">
            {products.map((o, i) => (
              <li key={o.id} id={`opt-${i}`} role="option" aria-selected={i === value}
                className={i === active ? "on" : undefined} onPointerEnter={() => setActive(i)} onClick={() => pick(i)}>
                <img src={o.image} alt="" loading="lazy" />
                <span className="pick-name">{o.name}</span>
                <span className="pick-price">{fmt(o.price)}</span>
              </li>
            ))}
          </ul>
          <div className="pick-peek" aria-hidden="true">
            <img key={a.id} src={a.image} alt="" />
            <span className="s14 clamp2">{a.name}</span>
            <span className="price">{fmt(a.price)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

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
            <span className="lbl" id="pick-l">Product</span>
            <Picker value={i} onChange={setI} />
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

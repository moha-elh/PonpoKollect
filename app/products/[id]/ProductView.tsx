"use client";
import { useState } from "react";
import { type Product, catLabel, fmt, pct, orderMsg, pageCopy, POLICY } from "@/lib/products";
import { DmLink } from "@/components/ui";

const tabs = [{ id: "details", label: "Details" }, { id: "condition", label: "Condition" }, { id: "shipping", label: "Shipping" }];

export default function ProductView({ p }: { p: Product }) {
  const c = pageCopy(p);
  const [view, setView] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("details");

  // Thumbs: full photo + two close-up crops (or the real 2nd photo).
  const crops = p.image2
    ? [{ label: "Photo 1", src: p.image, t: "scale(1)", o: "50% 50%" }, { label: "Photo 2", src: p.image2, t: "scale(1)", o: "50% 50%" }, { label: "Close-up", src: p.image, t: "scale(1.8)", o: "50% 30%" }]
    : [{ label: "Full product", src: p.image, t: "scale(1)", o: "50% 50%" }, { label: "Close-up, top", src: p.image, t: "scale(1.8)", o: "50% 15%" }, { label: "Close-up, bottom", src: p.image, t: "scale(1.8)", o: "50% 85%" }];

  const at = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return { x: Math.round(((e.clientX - r.left) / r.width) * 100), y: Math.round(((e.clientY - r.top) / r.height) * 100) };
  };

  return (
    <>
      <section className="pdp">
        <div className="gallery">
          <div className="thumbs" role="group" aria-label="Product photos">
            {crops.map((v, i) => (
              <button key={v.label} className={i === view ? "thumb on" : "thumb"} type="button" aria-label={v.label} aria-pressed={i === view} onClick={() => { setView(i); setZoom(false); }}>
                <img src={v.src} alt="" style={v.t === "scale(1)" ? undefined : { transform: v.t, transformOrigin: v.o }} />
              </button>
            ))}
          </div>
          <button
            className={zoom ? "main zoomed" : "main"} type="button"
            aria-label={zoom ? "Zoom out of the photo" : "Zoom into the photo"} aria-pressed={zoom}
            onClick={(e) => { if (e.clientX) setOrigin(at(e)); setZoom(!zoom); }}
            onMouseMove={(e) => zoom && setOrigin(at(e))}
            onMouseLeave={() => setZoom(false)}
          >
            {crops.map((v, i) => {
              const on = i === view;
              return (
                <div key={v.label} className="view" aria-hidden={!on} style={{
                  opacity: on ? 1 : 0, pointerEvents: "none",
                  transform: v.t + (zoom && on ? " scale(2.2)" : ""),
                  transformOrigin: zoom && on ? `${origin.x}% ${origin.y}%` : v.o,
                }}>
                  {p.card
                    ? <div className="foil-wrap"><span className="foil"><img src={v.src} alt={p.name} /></span></div>
                    : <img src={v.src} alt={p.name} />}
                </div>
              );
            })}
            <span className="zhint" aria-hidden="true">{zoom ? "Click to zoom out" : "Click to zoom"}</span>
          </button>
        </div>

        <div className="info">
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <span className="tag">{catLabel(p.category)}</span>
            {p.was && <span className="tag sale">{pct(p)}</span>}
          </div>
          <h1 className="h2 clamp2" title={p.name}>{p.name}</h1>
          <div className="bigprice"><span className={p.was ? "sale" : ""}>{fmt(p.price)}</span>{p.was && <s>{fmt(p.was)}</s>}</div>
          <p className="muted" style={{ margin: 0 }}>{c.blurb}</p>
          <hr className="hr" />
          <dl className="specs">
            <div><dt>Condition</dt><dd>{c.condition}</dd></div>
            <div><dt>Rarity</dt><dd>{p.rarity}</dd></div>
            <div><dt>Set / print</dt><dd className="clamp2">{p.set}</dd></div>
            <div><dt>Language</dt><dd>{p.language}</dd></div>
          </dl>
          <span className="s14 med" id="qty-l">Quantity</span>
          <div className="buy" style={{ marginTop: -12 }}>
            <div className="qty" role="group" aria-labelledby="qty-l">
              <button type="button" aria-label="Decrease quantity" onClick={() => setQty(Math.max(qty - 1, 1))}>−</button>
              <output aria-live="polite">{qty}</output>
              <button type="button" aria-label="Increase quantity" onClick={() => setQty(Math.min(qty + 1, 10))}>+</button>
            </div>
            <DmLink className="btn btn-ink buybtn" msg={orderMsg(p, qty)}><span>Order on Instagram</span><span className="bt" aria-live="polite">{fmt(p.price * qty)}</span></DmLink>
          </div>
          <p className="s12 muted" style={{ margin: "-8px 0 0" }}>
            {qty > 1 ? `${qty} × ${fmt(p.price)} · paid in cash on delivery` : "Paid in cash on delivery · your order message is copied for the DM"}
          </p>
          <ul className="assure">
            <li><b>Pay on delivery</b>Cash when it arrives</li>
            <li><b>2–3 days</b>Shipped with Cathedis</li>
            <li><b>Customs cleared</b>Handpicked abroad</li>
          </ul>
        </div>
      </section>

      <section className="lower" aria-label="Product information">
        <div>
          <div className="tablist" role="tablist">
            {tabs.map((t) => (
              <button key={t.id} className={t.id === tab ? "tab on" : "tab"} role="tab" type="button" aria-selected={t.id === tab} onClick={() => setTab(t.id)}>{t.label}</button>
            ))}
          </div>
          {tab === "details" && (
            <div className="panel" role="tabpanel"><p>{c.description}</p><ul>{c.points.map((pt) => <li key={pt}>{pt}</li>)}</ul></div>
          )}
          {tab === "condition" && (
            <div className="panel" role="tabpanel"><p>{c.condNote}</p><p className="muted">Want close-up photos before ordering? Ask in the DMs and Ponpoko will send them.</p></div>
          )}
          {tab === "shipping" && (
            <div className="panel" role="tabpanel">
              <p>After you confirm your order, it ships with Cathedis to the address you agree on: city, district, house or another location. Delivery takes 2 to 3 days to priority destinations.</p>
              <ul>
                <li>Pay in cash when the parcel reaches you.</li>
                <li>Delivery cost is confirmed in the DM before shipping.</li>
                <li>Returns follow the <a href={POLICY + "return-policy"} target="_blank" rel="noopener">return policy</a>.</li>
              </ul>
            </div>
          )}
        </div>
        <aside className="note reveal">
          <span className="tag plum">Ask Ponpoko</span>
          <p className="h3" style={{ margin: 0 }}>Looking for something that isn’t here?</p>
          <p className="s14 muted" style={{ margin: 0 }}>She brings back new products from every trip. Tell her what you’re hunting.</p>
          <DmLink className="btn btn-line btn-sm" msg="Hi Ponpo! I’m looking for: ">Ask in DM</DmLink>
        </aside>
      </section>
    </>
  );
}

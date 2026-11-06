import Link from "next/link";
import { type Product, fmt, pct, orderMsg } from "@/lib/products";
import { DmLink } from "./ui";

// Client is still choosing: "hv-a" = black strip slides up in the photo, "hv-b" = outline button under each card.
export const CARD_STYLE: "hv-a" | "hv-b" = "hv-a";

export function ProductGrid({ items, reveal = true, showSub = true, style }: { items: Product[]; reveal?: boolean; showSub?: boolean; style?: React.CSSProperties }) {
  return (
    <div className={`grid ${CARD_STYLE}`} style={style}>
      {items.map((p) => <ProductCard key={p.id} p={p} reveal={reveal} showSub={showSub} />)}
    </div>
  );
}

export function ProductCard({ p, reveal, showSub }: { p: Product; reveal: boolean; showSub: boolean }) {
  const href = `/products/${p.id}/`;
  return (
    <div className={`kcard${reveal ? " reveal" : ""}${p.image2 ? " alt" : ""}`}>
      <div className="kimg">
        <Link className="kfill" href={href} aria-label={p.name}>
          {p.card ? (
            <span className="va"><span className="foil-wrap"><span className="foil"><img src={p.image} alt={p.name} /></span></span></span>
          ) : (
            <span className="va"><img src={p.image} alt={p.name} /></span>
          )}
          {p.image2 && <span className="vb"><img src={p.image2} alt="" /></span>}
        </Link>
        <span className="badges">{p.was && <span className="tag sale">{pct(p)}</span>}</span>
        <DmLink className="qa" msg={orderMsg(p)}><span>Quick order</span><span className="mono">via DM</span></DmLink>
      </div>
      <div className="kmeta">
        <Link className="nm trunc" href={href} title={p.name}>{p.name}</Link>
        {showSub && <span className="sub trunc">{p.sub}</span>}
        <span className="price">
          <span className={p.was ? "now sale" : "now"}>{fmt(p.price)}</span>
          {p.was && <s>{fmt(p.was)}</s>}
        </span>
      </div>
      <DmLink className="qb" msg={orderMsg(p)}>Order on Instagram</DmLink>
    </div>
  );
}

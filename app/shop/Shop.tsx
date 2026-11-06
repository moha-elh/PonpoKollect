"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products, categories } from "@/lib/products";
import { ProductGrid } from "@/components/ProductCard";
import { DmLink } from "@/components/ui";

const cats = [{ id: "all", label: "All" }, ...categories];
const empties: Record<string, { t: string; b: string; m: string }> = {
  accessories: { t: "Accessories are restocking", b: "Sleeves, deck boxes and playmats come back after Ponpoko’s next trip. Tell her what you need and she’ll look for it.", m: "Hi Ponpo! I’m looking for accessories: " },
  collector: { t: "No collector boxes right now", b: "Collector boxes sell out fast. Ask in the DMs and Ponpoko will tell you what she’s bringing back next.", m: "Hi Ponpo! Are any collector boxes coming? " },
};

export function ShopWithParams() {
  const cat = useSearchParams().get("cat");
  return <Shop cat={cats.some((c) => c.id === cat) ? cat! : "all"} />;
}

export default function Shop({ cat }: { cat: string }) {
  const router = useRouter();
  const [sort, setSort] = useState("featured");
  const pick = (id: string) => router.replace(id === "all" ? "/shop/" : `/shop/?cat=${id}`, { scroll: false });

  let items = products.filter((p) => cat === "all" || p.category === cat);
  if (sort === "low") items = [...items].sort((a, b) => a.price - b.price);
  if (sort === "high") items = [...items].sort((a, b) => b.price - a.price);
  const e = empties[cat] ?? { t: "Nothing here yet", b: "This shelf is empty for now. Ask Ponpoko what’s coming next.", m: "Hi Ponpo! What’s coming next? " };
  const label = cats.find((c) => c.id === cat)!.label;

  return (
    <main className="wrap">
      <div className="head">
        <h1 className="h1 fade-in">{cat === "all" ? "Shop all" : label}</h1>
        <p className="lede fade-in" style={{ "--d": ".08s" } as React.CSSProperties}>Handpicked abroad and customs cleared. Pay on delivery anywhere in Morocco.</p>
      </div>

      <div className="bar">
        <div className="filters" role="group" aria-label="Filter by category">
          {cats.map((c) => (
            <button key={c.id} className={cat === c.id ? "chip on" : "chip"} type="button" aria-pressed={cat === c.id} onClick={() => pick(c.id)}>
              {c.label} <span className="ct">{c.id === "all" ? products.length : products.filter((p) => p.category === c.id).length}</span>
            </button>
          ))}
        </div>
        <label className="sort"><span className="muted">Sort</span>
          <select value={sort} onChange={(ev) => setSort(ev.target.value)}>
            <option value="featured">Featured</option>
            <option value="low">Price, low to high</option>
            <option value="high">Price, high to low</option>
          </select>
        </label>
      </div>

      {items.length > 0 ? (
        <ProductGrid key={cat + sort} items={items} style={{ paddingBottom: 96 }} />
      ) : (
        <section className="empty" aria-live="polite">
          <img src="/assets/ponpoko-sticker.webp" alt="Ponpoko sticker holding a heart" />
          <h2 className="h2">{e.t}</h2>
          <p className="lede">{e.b}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <DmLink className="btn btn-ink" msg={e.m}>Ask Ponpoko</DmLink>
            <button className="btn btn-line" type="button" onClick={() => pick("all")}>Shop everything</button>
          </div>
        </section>
      )}
    </main>
  );
}

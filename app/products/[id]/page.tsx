import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import css from "@/styles/product";
import { products, getProduct, catLabel, fmt, pageCopy } from "@/lib/products";
import { ProductGrid } from "@/components/ProductCard";
import ProductView from "./ProductView";

type Props = { params: Promise<{ id: string }> };

export const generateStaticParams = () => products.map((p) => ({ id: p.id }));
export const dynamicParams = false;

// Per-product title + preview image, so links shared in Instagram DMs show the actual product.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).id)!;
  const description = `${fmt(p.price)} · ${pageCopy(p).blurb}`;
  return { title: p.name, description, openGraph: { title: p.name, description, images: [p.image] } };
}

export default async function ProductPage({ params }: Props) {
  const p = getProduct((await params).id);
  if (!p) notFound();
  const others = products.filter((o) => o.id !== p.id && (o.category === p.category || o.category === "singles" || o.category === "boxes")).slice(0, 4);

  return (
    <main className="wrap">
      <style>{css}</style>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/shop/">Shop</Link><span aria-hidden="true">/</span>
        <Link href={`/shop/?cat=${p.category}`}>{catLabel(p.category)}</Link><span aria-hidden="true">/</span>
        <span className="trunc">{p.name}</span>
      </nav>

      <ProductView key={p.id} p={p} />

      <section style={{ paddingBottom: 96 }} aria-labelledby="also-h">
        <div className="shead"><h2 className="h2" id="also-h">You may also like</h2><Link className="ulink" href="/shop/">View all</Link></div>
        <ProductGrid items={others} reveal={false} showSub={false} />
      </section>
    </main>
  );
}

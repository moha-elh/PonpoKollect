import data from "@/data/products.json";

export type Product = {
  id: string; name: string; category: string; price: number; was?: number;
  image: string; image2?: string; card?: boolean; featured?: boolean;
  condition: string; rarity: string; set: string; language: string;
  description: string; points?: string[]; sub: string;
  blurb?: string; condNote?: string; note?: string; sourceUrl?: string;
};

export const IG = "https://www.instagram.com/ponpokollect/";
export const DM = "https://ig.me/m/ponpokollect";
export const POLICY = "https://ponpokollect.ma/pages/";

export const categories = data.categories as { id: string; label: string; empty?: boolean }[];
export const products = data.products as Product[];
export const instagramPosts = data.instagramPosts;

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const catLabel = (id: string) => categories.find((c) => c.id === id)?.label ?? "Shop";

// "2450" -> "2 450 MAD"
export const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " MAD";
export const pct = (p: Product) => (p.was ? "−" + Math.round((1 - p.price / p.was) * 100) + "%" : "");
export const orderMsg = (p: Product, qty = 1) =>
  `Hi Ponpo! I’d like to order: ${qty > 1 ? qty + " × " : ""}${p.name} (${fmt(p.price * qty)}).`;

// Short tag for the rare-singles grid
export const rarityTag = (p: Product) => (p.rarity === "Not listed" ? p.sub : p.rarity);

// Product-page copy. Boxes and singles follow one pattern; others carry their own text in products.json.
export function pageCopy(p: Product) {
  const setName = p.set.split(" · ")[0];
  if (p.category === "boxes") {
    return {
      blurb: `An unlimited reprint of ${setName}, stamped with the Yu-Gi-Oh! 25th Anniversary logo. A full display box, still sealed.`,
      condition: "Factory sealed",
      condNote: "Factory sealed in its original shrink-wrap.",
      description: p.description, points: p.points ?? [],
    };
  }
  if (p.card) {
    return {
      blurb: `A single from Ponpoko’s binder. ${p.rarity !== "Not listed" ? p.rarity + ", " : ""}${p.set}.`,
      condition: "Ask for photos",
      condNote: "Card condition is not listed. Ponpoko sends close-up photos of the front, back and corners on request before you order.",
      description: `${p.name} — ${p.set}.`,
      points: [`Rarity: ${p.rarity}`, `Language: ${p.language}`, "Handpicked abroad and customs cleared"],
    };
  }
  return {
    blurb: p.blurb ?? p.description, condition: p.condition,
    condNote: p.condNote ?? "", description: p.description, points: p.points ?? [],
  };
}

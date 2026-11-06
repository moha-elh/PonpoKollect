import { Suspense } from "react";
import type { Metadata } from "next";
import css from "@/styles/shop";
import Shop, { ShopWithParams } from "./Shop";

export const metadata: Metadata = { title: "Shop all", description: "Rare Yu-Gi-Oh! singles, sealed booster boxes, decks and boosters. Pay on delivery across Morocco." };

export default function ShopPage() {
  return (
    <>
      <style>{css}</style>
      {/* The category lives in ?cat=, read on the client; the static fallback is the full list. */}
      <Suspense fallback={<Shop cat="all" />}><ShopWithParams /></Suspense>
    </>
  );
}

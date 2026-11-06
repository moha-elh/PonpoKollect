import Link from "next/link";
import { IG, POLICY } from "@/lib/products";

const ext = { target: "_blank", rel: "noopener" };

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", maxWidth: 340 }}>
            <span className="flogo"><img src="/assets/logo.webp" alt="Ponpo Kollect" /></span>
            <p className="s14" style={{ margin: 0, color: "#BEB2AB" }}>Products from Ponpoko’s Vault. Pay on delivery, anywhere in Morocco.</p>
          </div>
          <div><h3>Shop</h3><ul>
            <li><Link href="/shop/?cat=boxes">Booster boxes</Link></li>
            <li><Link href="/shop/?cat=singles">Rare singles</Link></li>
            <li><Link href="/shop/?cat=decks">Decks</Link></li>
            <li><Link href="/shop/?cat=boosters">Boosters</Link></li>
          </ul></div>
          <div><h3>Help</h3><ul>
            <li><Link href="/how-to-order/">How to order</Link></li>
            <li><a href={POLICY + "shipping-delivery"} {...ext}>Shipping &amp; delivery</a></li>
            <li><a href={POLICY + "return-policy"} {...ext}>Return policy</a></li>
            <li><Link href="/faq/">FAQ</Link></li>
          </ul></div>
          <div><h3>Ponpo</h3><ul>
            <li><Link href="/about/">About</Link></li>
            <li><a href={IG} {...ext}>Instagram</a></li>
            <li><a href={POLICY + "terms-and-conditions"} {...ext}>Terms</a></li>
            <li><Link href="/privacy/">Privacy</Link></li>
          </ul></div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} Ponpo Kollect</span>
          <span>Ponpo Kollect is an independent shop and is not affiliated with, endorsed or sponsored by Konami or Yu-Gi-Oh!.</span>
        </div>
      </div>
    </footer>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DmLink } from "./ui";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop/", label: "Shop" },
  { href: "/how-to-order/", label: "How to order" },
  { href: "/faq/", label: "FAQ" },
  { href: "/about/", label: "About" },
];

export default function Header() {
  const path = usePathname().replace(/\/?$/, "/");
  const on = (href: string) => (href === path ? " on" : "");
  return (
    <>
      <div className="announce">Pay on delivery · Free delivery over 1 500 MAD · 1–3 days across Morocco</div>
      <header className="hdr">
        <div className="wrap hdr-in">
          <nav className="left" aria-label="Main">
            {links.map((l) => <Link key={l.href} className={"nl" + on(l.href)} href={l.href}>{l.label}</Link>)}
          </nav>
          <Link className="logo" href="/" aria-label="Ponpo Kollect home"><img src="/assets/logo.webp" alt="Ponpo Kollect" /></Link>
          <div className="right">
            <DmLink className="btn btn-ink btn-sm" msg="Hi Ponpo! I’d like to order: ">Order on Instagram</DmLink>
          </div>
        </div>
        <nav className="subnav" aria-label="Main (mobile)">
          {links.map((l) => <Link key={l.href} className={on(l.href).trim()} href={l.href}>{l.label}</Link>)}
        </nav>
      </header>
    </>
  );
}

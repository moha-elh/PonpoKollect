import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import css from "@/styles/legal";
import { IG, POLICY } from "@/lib/products";
import { DmLink } from "@/components/ui";

export const metadata: Metadata = { title: "Privacy policy", description: "What Ponpo Kollect collects when you order, why, who it’s shared with, and your rights under Moroccan law 09-08." };

const UPDATED = "6 November 2026";
const ext = { target: "_blank", rel: "noopener" };

const short = [
  "No account, no card and no forms on this site.",
  "No analytics, ad trackers or cookies.",
  "We only ask for what’s needed to deliver your order, in the Instagram DM.",
  "We never sell your data.",
];

const sections: { id: string; title: string; body: ReactNode }[] = [
  { id: "who", title: "Who we are", body: <>
    <p>Ponpo Kollect is a Yu-Gi-Oh! shop run by Ponpoko (<a href={IG} {...ext}>@ponpokollect</a> on Instagram) from Morocco. In this policy, “we” means Ponpo Kollect and “you” means anyone who visits the site or orders from us.</p>
  </> },
  { id: "site", title: "Browsing this site", body: <>
    <p>You can browse the whole site without giving us any personal information. There’s no sign-up, no login and no contact form.</p>
    <ul>
      <li><b>No cookies or trackers.</b> The site doesn’t set cookies and doesn’t use analytics or advertising tools.</li>
      <li><b>Fonts.</b> Text fonts load from Google Fonts. Your browser connects to Google’s servers to fetch them, which shares your IP address with Google. See <a href="https://policies.google.com/privacy" {...ext}>Google’s privacy policy</a>.</li>
      <li><b>Hosting.</b> The server that hosts the site may keep standard technical logs (IP address, browser type, pages requested) for security and to keep the site running.</li>
      <li><b>Order buttons.</b> When you tap an order button, your order message is copied to your device’s clipboard. It stays on your device; nothing is sent to us until you paste it in Instagram yourself.</li>
    </ul>
  </> },
  { id: "orders", title: "What we collect when you order", body: <>
    <p>Orders happen in Instagram direct messages. To confirm and deliver your order we ask for:</p>
    <ul>
      <li>your name,</li>
      <li>your phone number,</li>
      <li>the delivery place you choose: city, district, address or another place you agree on,</li>
      <li>the products you order and their price.</li>
    </ul>
    <p>We don’t ask for card or bank details: you pay in cash on delivery. Please don’t send them in the DMs.</p>
  </> },
  { id: "use", title: "How we use it", body: <>
    <p>We use this information only to:</p>
    <ul>
      <li>confirm stock, price and delivery with you,</li>
      <li>hand your parcel to the delivery company and follow it until it arrives,</li>
      <li>handle any question or return about your order.</li>
    </ul>
    <p>We don’t send newsletters or marketing messages, and we don’t use your information for anything unrelated to your order.</p>
  </> },
  { id: "share", title: "Who we share it with", body: <>
    <ul>
      <li><b>Cathedis</b>, our delivery company, receives your name, phone number and delivery place so it can bring you the parcel and collect the cash payment.</li>
      <li><b>Instagram (Meta)</b> handles the DM conversation itself. Messages you send there are covered by <a href="https://privacycenter.instagram.com/policy" {...ext}>Instagram’s privacy policy</a>.</li>
      <li><b>Authorities</b>, only if the law requires it.</li>
    </ul>
    <p>We never sell or rent your personal information to anyone.</p>
  </> },
  { id: "keep", title: "How long we keep it", body: <>
    <p>We keep order details for as long as needed to deliver your order and handle any return, and after that only as long as the law requires us to keep sales records. Your DM history stays in Instagram; you can delete your side of the conversation at any time.</p>
  </> },
  { id: "rights", title: "Your rights", body: <>
    <p>Under Moroccan law 09-08 on the protection of personal data, you can at any time ask us to:</p>
    <ul>
      <li>tell you what personal information we hold about you,</li>
      <li>correct it if it’s wrong or incomplete,</li>
      <li>delete it, or stop using it, unless we still need it for an order in progress or the law requires us to keep it.</li>
    </ul>
    <p>Send the request in an Instagram DM and we’ll answer there. If you’re not satisfied with our answer, you can contact the CNDP, Morocco’s data protection authority, at <a href="https://www.cndp.ma" {...ext}>cndp.ma</a>.</p>
  </> },
  { id: "security", title: "Security", body: <>
    <p>We only keep what’s needed, we don’t collect payment details, and we only share delivery information with the delivery company. No method of storing or sending information is completely secure, but we take reasonable care to protect what you give us.</p>
  </> },
  { id: "changes", title: "Changes to this policy", body: <>
    <p>If the way we handle information changes, we’ll update this page and the date at the top. See also our <a href={POLICY + "terms-and-conditions"} {...ext}>terms</a> and <a href={POLICY + "return-policy"} {...ext}>return policy</a>.</p>
  </> },
];

export default function Privacy() {
  return (
    <main className="wrap">
      <style>{css}</style>

      <header className="lg-head">
        <span className="tag fade-in" style={{ alignSelf: "flex-start" }}>Last updated {UPDATED}</span>
        <h1 className="h1 fade-in">Privacy policy</h1>
        <p className="lede fade-in">What we collect when you order, why we need it, who sees it and how to ask us to change or delete it.</p>
      </header>

      <section className="lg-short reveal" aria-labelledby="short-h">
        <h2 className="h3" id="short-h">The short version</h2>
        <ul>{short.map((s) => <li key={s}>{s}</li>)}</ul>
      </section>

      <div className="lg-body">
        <nav className="lg-toc" aria-label="On this page">
          <span className="s14 muted">On this page</span>
          <ol>{sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}</ol>
        </nav>
        <div className="lg-text">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
              <h2 className="h3" id={`${s.id}-h`}><span className="n">{String(i + 1).padStart(2, "0")}</span>{s.title}</h2>
              {s.body}
            </section>
          ))}
        </div>
      </div>

      <section className="lg-ask">
        <div>
          <h2 className="h2">Questions about your data?</h2>
          <p className="lede">Ask Ponpoko in the DMs, or read the <Link href="/faq/">FAQ</Link>.</p>
        </div>
        <DmLink className="btn btn-ink" msg="Hi Ponpo! A question about my personal data: ">Message Ponpoko</DmLink>
      </section>
    </main>
  );
}

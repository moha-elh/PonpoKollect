# Ponpo Kollect — website handoff

Brief for rebuilding the Ponpo Kollect shop in a real codebase (Claude Code session). Everything a developer needs is in this folder.

**Starter prompt for Claude Code**

> Read HANDOFF.md, then rebuild this site in **[your stack, e.g. Next.js + Tailwind / Astro / plain HTML]**. Use `design-source/*.dc.html` as the visual and behavioural spec, `css/site.css` for the design tokens and shared components, `products.json` for all data and `assets/` for images. Match the design exactly. Mobile first.

---

## 1. What this is

Ponpo Kollect (@ponpokollect) is a verified Moroccan Instagram creator (13.1K followers) selling Yu-Gi-Oh! sealed product and rare singles. Her raccoon persona, **Ponpoko**, is the brand. Her current store is https://ponpokollect.ma (YouCan). All products, prices and copy here come from that site.

Orders happen **in Instagram DMs**: every "Order" button opens `https://ig.me/m/ponpokollect` *and* copies a prefilled message to the clipboard:

```
Hi Ponpo! I’d like to order: {product name} ({price} MAD).
Hi Ponpo! I’d like to order: 3 × {product name} ({total} MAD).   // quantity > 1
```

Then a toast confirms: "Message copied, paste it in the DM" + the message. Payment is **cash on delivery**, shipping is **Cathedis, 2–3 days** to priority destinations across Morocco.

## 2. Folder map

| Path | What |
|---|---|
| `design-source/Main.dc.html` | Home page spec |
| `design-source/Shop.dc.html` | Shop / collection with filters + sort |
| `design-source/Product.dc.html` | Product detail page |
| `design-source/About.dc.html` | "Who’s the raccoon?" |
| `design-source/HowToOrder.dc.html` | How to order (DM → confirm → shipped) |
| `css/site.css` | Shared tokens + components (header, buttons, product cards, holo card, carousel, burst badge, footer, toast) |
| `products.json` | 13 real products, categories, Instagram post thumbnails |
| `assets/` | All images (WebP, transparent cut-outs for boxes/packs, card scans), `burst.svg` badge shape |

**About the `.dc.html` files:** they are from a design tool. Each is HTML with a template layer: `{{value}}` holes, `<sc-for list=… as=…>` loops, `<sc-if value=…>` conditionals, `<helmet>` for page-specific `<style>`, and a `class Component extends DCLogic` script whose `renderVals()` holds the data and event handlers. Treat them as a precise spec: markup + CSS are final; translate the logic into your framework's components/state. Asset paths are already relative (`../assets/…`, `../css/site.css`).

## 3. Design tokens

**Colours** (from her logo and profile picture)

| Token | Hex | Use |
|---|---|---|
| ink | `#1E1714` | text, primary buttons |
| white | `#FFFFFF` | page + product backgrounds |
| orange | `#F08448` | logo raccoon tail: announcement bar, sale tags, hover fills |
| orange-ink | `#A9471A` | sale prices on white (AA contrast) |
| plum | `#905484` | logo ring: small tags, hero headline words |
| yellow | `#FEC604` | pfp background: hero, "Meet Ponpoko" band, feedback CTA |
| pink | `#E7C9DF` | badge fill accent |
| mute | `#6E625C` | secondary text |
| line | `#ECE7E3` | hairlines |
| tint | `#F6F3F0` | soft fills, category tiles |
| footer | `#21191A` bg, `#F3EEE9` text |

**Type**
- **Instrument Sans** 400/500 (Google Fonts) for everything, including small labels and tags.
- **Chivo** 400/500 (Google Fonts) for prices only, with `font-variant-numeric: tabular-nums`.
- No monospace anywhere (client explicitly rejected it).
- Scale: 12, 14, 16, 20, 24, 32, 48, 64. Headings weight 400 with tight negative tracking; `h1` 32 → 48 (≥768) → 64 (≥1200).

**Shape:** pill buttons (999px), product images square-edged on white, tags are pills, category tiles 0 radius, feedback cards 20/20/20/6 radius.

**Icons:** **Phosphor Icons, Fill weight** (`@phosphor-icons/react` or `@phosphor-icons/web`). Used: Money, Truck, AirplaneTilt, ShieldCheck, ChatCircle, Play, BookOpen, Cookie, GameController, Star, Barbell, CaretLeft/CaretRight (Bold). Icons sit inside a wobbly **burst badge** (`assets/burst.svg` used as a CSS mask, fill colour per badge, rotates 30° on parent hover). No icon next to every link.

## 4. Global pieces

- **Announcement bar** (orange): "Pay on delivery · Delivered across Morocco in 2–3 days".
- **Header** (sticky, white): desktop = links left (Shop all, Singles, Booster boxes, About, How to order), **logo centred**, black "Order on Instagram" pill right. Mobile = logo + button, links in a horizontal sub-nav row.
- **Buttons**: `btn-ink` black → hover orange with ink text. `btn-line` white with light outline → hover orange. Never turn white-on-white.
- **Footer** (dark): transparent logo (no box, soft shadow), Shop / Help / Ponpo columns, policy links to ponpokollect.ma pages, and the legal line: *"Ponpo Kollect is an independent shop and is not affiliated with, endorsed or sponsored by Konami or Yu-Gi-Oh!."*
- **Toast** after any copy action, bottom-right, dark.
- **Motion**: fade-up on load; scroll reveal via `animation-timeline: view()` (progressive enhancement); everything disabled under `prefers-reduced-motion`.

### Product card (Kith-style) — `.kcard`
White square-ish image (4:5), title (1 line, ellipsis), sub line, price (Chivo; sale price orange-ink + struck old price + "−11%" orange tag). Hover: image scales 1.04; if the product has a 2nd image (Shaddoll) it cross-fades. Two order styles, chosen by a setting (client still picking):
- **A** — a **black** "Quick order · via DM" strip slides up inside the photo; hovering the strip turns it **orange**.
- **B** — an outline "Order on Instagram" pill under every card, fills black on card hover, orange on button hover; card lifts 4px.
- Touch devices always use B.

### Holo card — `.hc`
CSS recreation of React Bits **HoloCard** (client loves that component — in a React codebase, use the real one: https://reactbits.dev, preset `bursts`). Behaviour: pointer-driven 3D tilt (±14°), glare spot following the pointer, rainbow foil "bursts" pattern (rings of dashes) with color-dodge, sparkling border, slow idle drift of tilt + light when not hovered, lift 1.06 on hover. Used on: all hero cards + the box, and the Rare singles grid. The sealed box variant masks the foil to the box's own silhouette.

## 5. Pages

### Home (`Main.dc.html`)
1. **Hero** (yellow, full-bleed, 720px desktop): `assets/hero.webp` (Ponpoko on the right; yellow extends left). Headline 3 lines: "**Rare cards,** / **sealed boxes,** / handpicked abroad." (first two lines plum). Lede wraps to ~3 lines. Buttons: "Shop the vault" (ink) + "Order on Instagram" (white). **Floating products spread across the hero, never under the text**: LOB 25th box bottom-right + 5 holo cards (top-left corner, under the buttons, two mid, one by her ear), each dealing in on load, bobbing gently, holo on hover, linking to the product. Phone: image on top (4:3), copy below, only box + 2 cards.
   - The hero image is an **interim composite**; the client will generate a final AI image (2400×1200, subject right 55%, flat yellow left).
2. **Shop the vault** — 4 category tiles (tint bg, product photo, name + count; image lifts on hover). Client likes these.
3. **New in the vault** — 8 product cards grid (4 / 3 / 2 columns).
4. **Why order** band (tint): 4 items with burst badges — Pay on delivery, 2–3 day delivery, Handpicked abroad, Customs cleared.
5. **Watch the pulls** — Instagram posts carousel: **3 visible, round prev/next arrows on the left and right sides**, progress dashes; native swipe on phones. Thumbnails are low-res crops from her profile; replace with real reels/links.
6. **Rare singles** — grid (6 / 3 / 2), holo cards, rarity tag, name, price. No horizontal scroll.
7. **Straight from the DMs** (feedback):
   - 1 real: **ElGrandeToto** ordered and shared it in his story → link https://www.instagram.com/stories/highlights/17881132455395042/ (orange-ring initials avatar, no photo).
   - 2 **sample** Darija reviews clearly tagged "Sample — swap for a real review", product thumbnails as images. **Do not ship these as real reviews**; replace with real buyer messages.
   - Yellow CTA card with the sticker: "Send feedback" (copies "Hi Ponpo! Feedback on my order: ").
8. **Meet Ponpoko** band (yellow): `ponpoko-sticker.webp` standing on the bottom edge (tilts on hover), "The raccoon behind the vault.", stats 13.1K / 10K / 13, buttons.

### Shop (`Shop.dc.html`)
Title, sticky filter bar: pill chips with counts (All, Booster boxes, Rare singles, Decks, Boosters, Accessories, Collector boxes) + sort (Featured, price ↑, price ↓). Product grid. Empty categories show the bobbing sticker + specific copy + "Ask Ponpoko" (copies a category-specific DM) + "Shop everything".

### Product (`Product.dc.html`) — Velora-style
- Breadcrumb.
- Gallery: thumbnails left (below on mobile), large white image. **Hover shows "Click to zoom"; click zooms 2.2× and the image pans with the mouse; click/leave to exit.** Thumbs = full + two detail crops (or the real 2nd photo).
- Info column (sticky on desktop): category + discount tags, title (2-line clamp), price (Chivo 32, sale styling), blurb, 2×2 spec grid (Condition, Rarity, Set/print, Language), "Quantity" label, pill stepper + **black button "Order on Instagram · {live total}"**, note under it ("3 × 1 800 MAD · paid in cash on delivery"), 3 assurance items.
- Tabs: Details / Condition / Shipping (Cathedis 2–3 days, cash on delivery, link to return policy) + "Ask Ponpoko" tint card.
- "You may also like" product cards (clicking swaps the product in place).

### About (`About.dc.html`)
Tint hero "Meet Ponpoko." with pfp in an arch + sticker + star burst; big vault statement (highlighted phrase); collage of 5 Instagram photos; "How the vault gets filled" (She travels → Customs cleared → You ask for it); dark numbers band; "What she posts" (6 items with burst icons); yellow CTA with sticker.

### How to order (`HowToOrder.dc.html`)
3 steps (DM / Confirm / Shipped across Morocco); **message builder** (product select + quantity → live message + total → "Copy and open Instagram"); FAQ accordion (payment, delivery time, stock origin, special requests, returns).

## 6. Open items for the client

- Final AI hero image.
- Real reviews (replace the 2 samples); real reel links + higher-res thumbnails.
- Confirm "Malicious Bane" vs the photo showing "Malicious Edge"; Don Zaloog rarity/language.
- Pick product-card style A or B.
- Fonts are free stand-ins for DedCool's commercial Universal Sans Display; license the original if desired.
- Snacks are in her bio but not in her catalogue; no Snacks category for now.

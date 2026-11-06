"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { IG } from "@/lib/products";
import { Burst, Icon } from "./ui";

// Endless carousel: the posts are rendered three times and we start on the middle copy.
// Desktop (3 visible, side arrows): after each slide past an edge copy, jump back by one copy with no transition.
// Phones (native swipe): same jump, done on scroll position.
export default function Carousel({ posts }: { posts: { image: string; title: string }[] }) {
  const n = posts.length;
  const [i, setI] = useState(n);
  const [anim, setAnim] = useState(true);
  const view = useRef<HTMLDivElement>(null);
  const loop = [...posts, ...posts, ...posts];

  // Phones: start scrolled to the middle copy.
  useEffect(() => {
    const v = view.current;
    if (v && getComputedStyle(v).overflowX !== "hidden") v.scrollLeft = v.scrollWidth / 3;
  }, []);

  // Re-enable the slide transition one frame after a silent jump.
  useEffect(() => {
    if (anim) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
    return () => cancelAnimationFrame(id);
  }, [anim]);

  const settle = () => {
    if (i >= 2 * n || i < n) { setAnim(false); setI(i >= 2 * n ? i - n : i + n); }
  };
  const onScroll = () => {
    const v = view.current;
    if (!v || getComputedStyle(v).overflowX === "hidden") return;
    const set = v.scrollWidth / 3;
    if (v.scrollLeft < set * 0.5) v.scrollLeft += set;
    else if (v.scrollLeft > set * 1.5) v.scrollLeft -= set;
  };
  const go = (d: number) => {
    if (!anim) return;
    // Reduced motion has no transition (so no transitionend): wrap straight away.
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) setI(n + ((((i + d - n) % n) + n) % n));
    else setI(Math.min(3 * n - 3, Math.max(0, i + d)));
  };

  return (
    <div className="carousel sides reveal">
      <button className="carrow side l" type="button" aria-label="Previous videos" onClick={() => go(-1)}><Icon name="caretLeft" /></button>
      <button className="carrow side r" type="button" aria-label="Next videos" onClick={() => go(1)}><Icon name="caretRight" /></button>
      <div className="cviewport" ref={view} onScroll={onScroll}>
        <div className="ctrack" style={{ "--i": i, transition: anim ? undefined : "none" } as CSSProperties} onTransitionEnd={(e) => e.target === e.currentTarget && settle()}>
          {loop.map((r, k) => {
            const copy = k < n || k >= 2 * n;
            return (
              <a key={k} className="reel" href={IG} target="_blank" rel="noopener" aria-hidden={copy || undefined} tabIndex={copy ? -1 : undefined}>
                <span className="rimg"><img src={r.image} alt={copy ? "" : r.title} loading="lazy" /><Burst icon="play" sm /></span>
                <span className="s14 clamp2">{r.title}</span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="cdots" aria-hidden="true">
        {posts.map((p, d) => <span key={p.image} className={d === ((i % n) + n) % n ? "on" : ""} />)}
      </div>
    </div>
  );
}

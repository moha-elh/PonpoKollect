"use client";
import { useState, type CSSProperties } from "react";
import { IG } from "@/lib/products";
import { Burst, Icon } from "./ui";

// 3 visible on desktop with side arrows; native swipe on phones (see .carousel in globals.css).
export default function Carousel({ posts }: { posts: { image: string; title: string }[] }) {
  const [i, setI] = useState(0);
  const max = Math.max(0, posts.length - 3);
  return (
    <div className="carousel sides reveal">
      <button className="carrow side l" type="button" aria-label="Previous videos" disabled={i <= 0} onClick={() => setI(i - 1)}><Icon name="caretLeft" /></button>
      <button className="carrow side r" type="button" aria-label="Next videos" disabled={i >= max} onClick={() => setI(i + 1)}><Icon name="caretRight" /></button>
      <div className="cviewport">
        <div className="ctrack" style={{ "--i": i } as CSSProperties}>
          {posts.map((r) => (
            <a key={r.image} className="reel" href={IG} target="_blank" rel="noopener">
              <span className="rimg"><img src={r.image} alt={r.title} loading="lazy" /><Burst icon="play" sm /></span>
              <span className="s14 clamp2">{r.title}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="cdots" aria-hidden="true">
        {Array.from({ length: max + 1 }, (_, d) => <span key={d} className={d === i ? "on" : ""} />)}
      </div>
    </div>
  );
}

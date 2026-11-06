"use client";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { DM } from "@/lib/products";
import { icons, type IconName } from "./icons";

/* ---------- Toast + clipboard ---------- */
const CopyCtx = createContext<(text: string) => void>(() => {});
export const useCopy = () => useContext(CopyCtx);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [text, setText] = useState<string | null>(null);
  const t = useRef<ReturnType<typeof setTimeout>>(undefined);
  const copy = (msg: string) => {
    navigator.clipboard?.writeText(msg).catch(() => {});
    setText(msg);
    clearTimeout(t.current);
    t.current = setTimeout(() => setText(null), 5000);
  };
  useEffect(() => () => clearTimeout(t.current), []);
  return (
    <CopyCtx.Provider value={copy}>
      {children}
      {text && (
        <div className="toast" role="status">
          <b>Message copied, paste it in the DM</b>
          <q>{text}</q>
        </div>
      )}
    </CopyCtx.Provider>
  );
}

/** Opens Ponpoko's Instagram DMs and copies `msg` (ig.me can't prefill text). */
export function DmLink({ msg, className, style, children }: { msg: string; className?: string; style?: CSSProperties; children: ReactNode }) {
  const copy = useCopy();
  return (
    <a className={className} style={style} href={DM} target="_blank" rel="noopener" onClick={() => copy(msg)}>
      {children}
    </a>
  );
}

/* ---------- Icons ---------- */
export function Icon({ name }: { name: IconName }) {
  return <svg viewBox="0 0 256 256" aria-hidden="true"><path d={icons[name]} /></svg>;
}
export function Burst({ icon, color, sm, className = "", style }: { icon: IconName; color?: string; sm?: boolean; className?: string; style?: CSSProperties }) {
  return (
    <span className={`burst${sm ? " sm" : ""} ${className}`} style={{ ...(color ? ({ "--bc": color } as CSSProperties) : {}), ...style }}>
      <Icon name={icon} />
    </span>
  );
}

import { useState, useEffect, useRef } from "react";

/* ── Typewriter effect ── */
export function useTyping(phrases) {
  const [text, setText] = useState("");
  const state = useRef({ pIdx: 0, cIdx: 0, deleting: false });

  useEffect(() => {
    let timer;
    function tick() {
      const { pIdx, cIdx, deleting } = state.current;
      const word = phrases[pIdx];
      if (!deleting) {
        const next = cIdx + 1;
        setText(word.slice(0, next));
        state.current.cIdx = next;
        if (next === word.length) {
          state.current.deleting = true;
          timer = setTimeout(tick, 1600);
          return;
        }
      } else {
        const next = cIdx - 1;
        setText(word.slice(0, next));
        state.current.cIdx = next;
        if (next === 0) {
          state.current.deleting = false;
          state.current.pIdx = (pIdx + 1) % phrases.length;
        }
      }
      timer = setTimeout(tick, state.current.deleting ? 60 : 100);
    }
    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, []);   // eslint-disable-line react-hooks/exhaustive-deps

  return text;
}

/* ── Scroll progress (0–100) ── */
export function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      setPct((window.scrollY / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return pct;
}

/* ── Scroll Y position ── */
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const handler = () => setY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return y;
}

/* ── IntersectionObserver reveal ── */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); io.disconnect(); }
      },
      { threshold }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Animated counter (triggers on scroll into view) ── */
export function useCounter(target) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let current = 0;
        const step = Math.ceil(target / 30);
        const t = setInterval(() => {
          current += step;
          if (current >= target) { setVal(target); clearInterval(t); }
          else setVal(current);
        }, 50);
      },
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  return [ref, val];
}

/* ── Cursor position ── */
export function useCursor() {
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top  = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);
  return ref;
}

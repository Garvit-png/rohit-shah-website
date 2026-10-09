import { useState, useEffect, useRef } from 'react';

export function useCounter(
  target: number,
  duration = 1800,
  startOnMount = false
): [number, (el: HTMLElement | null) => void] {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(startOnMount);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const refCallback = (el: HTMLElement | null) => {
    if (!el) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observerRef.current.observe(el);
  };

  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return [count, refCallback];
}

"use client";

import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
}

export default function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const node = ref.current;
    
    // Animate from 0 to value
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        node.textContent = Math.floor(value).toString() + suffix;
      },
    });

    return () => controls.stop();
  }, [value, isInView, suffix]);

  return <span ref={ref} className="font-numbers font-extrabold" />;
}

"use client";
import { useEffect } from "react";

export default function Ripple() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const d = document.createElement("div");
      d.className = "ripple-el";
      const size = 40;
      d.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;width:${size}px;height:${size}px;margin-top:-${size/2}px;margin-left:-${size/2}px`;
      document.body.appendChild(d);
      d.addEventListener("animationend", () => d.remove());
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}

"use client";

import { useEffect, useState } from "react";

export function TypingAnimation({
  text,
  className = "",
  speed = 80,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    if (done) return;
    const char = text[count];
    const delay = char === "\n" ? speed * 6 : speed;
    const id = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(id);
  }, [count, text, speed, done]);

  return (
    <div
      className={`font-mono text-white whitespace-pre-wrap ${className}`}
    >
      {text.slice(0, count)}
      <span className="typing-cursor" aria-hidden />
    </div>
  );
}

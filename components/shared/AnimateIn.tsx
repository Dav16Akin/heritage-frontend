"use client";
import { useInView } from "@/lib/hooks/useInView";
import { ReactNode, CSSProperties } from "react";

type Variant = "fade-up" | "fade-in" | "scale-up" | "fade-left" | "fade-right";

interface AnimateInProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;         // ms
  duration?: number;      // ms
  className?: string;
  threshold?: number;
}

const INITIAL: Record<Variant, CSSProperties> = {
  "fade-up":    { opacity: 0, transform: "translateY(40px)" },
  "fade-in":    { opacity: 0 },
  "scale-up":   { opacity: 0, transform: "scale(0.92)" },
  "fade-left":  { opacity: 0, transform: "translateX(-40px)" },
  "fade-right": { opacity: 0, transform: "translateX(40px)" },
};

const VISIBLE: CSSProperties = { opacity: 1, transform: "none" };

export default function AnimateIn({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.15,
}: AnimateInProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });

  const style: CSSProperties = {
    ...(inView ? VISIBLE : INITIAL[variant]),
    transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}

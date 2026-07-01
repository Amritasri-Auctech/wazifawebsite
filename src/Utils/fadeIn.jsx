// src/utils/FadeIn.jsx
import { useEffect, useRef, useState } from "react";

export const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

export const FadeIn = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
}) => {
  const [ref, inView] = useInView();
  const dirMap = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : dirMap[direction],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

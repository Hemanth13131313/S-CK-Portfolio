"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity
} from "framer-motion";

interface ScrollSkewProps {
  children: React.ReactNode;
}

export default function ScrollSkew({ children }: ScrollSkewProps) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // Smooth the velocity out using a spring
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // Map the smoothed velocity to a skew value
  const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [2, -2]);

  return (
    <motion.div style={{ skewY: skewVelocity }}>
      {children}
    </motion.div>
  );
}

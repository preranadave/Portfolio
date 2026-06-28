/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Magnetic — wraps a button/link and gently pulls it toward the cursor on
 * hover, snapping back on leave. Used sparingly on primary CTAs.
 */
function Magnetic({ children, strength = 22, className = "" }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    setPos({ x: x / strength, y: y / strength });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;

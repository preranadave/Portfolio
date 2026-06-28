/* eslint-disable react/prop-types */
import { createElement, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollSection
 * The outer tag (id anchor) has NO transform — so native anchor scrolling
 * always lands exactly where the browser computed. The animation is on an
 * inner <div> so the visual reveal still plays, but it never shifts the
 * element's anchor position.
 *
 * This is the root cause of "scrolling lands in wrong place": previously
 * the id-bearing element had y:36 applied, making scrollIntoView undershoot.
 */
export function ScrollSection({
  id,
  className,
  children,
  as = "section",
}) {
  const innerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ["start 0.92", "start 0.55"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [28, 0]);

  if (reduceMotion) {
    return createElement(as, { id, className }, children);
  }

  // Outer tag: pure anchor, no transform, no opacity change.
  // Inner div: gets the scroll-driven animation.
  return createElement(
    as,
    { id, className },
    <motion.div ref={innerRef} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}

/**
 * ScrollParagraph
 * Horizontal slide-in kept (x: 56 → 0). Overflow is clipped at body level
 * so it never causes a scrollbar. Reduced from 72 → 56 for a subtler feel.
 */
export function ScrollParagraph({
  children,
  className,
  as = "p",
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.94", "start 0.58"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [56, 0]);

  if (reduceMotion) {
    return createElement(as, { className }, children);
  }

  const MotionTag = motion[as];

  return (
    <MotionTag ref={ref} className={className} style={{ opacity, x }}>
      {children}
    </MotionTag>
  );
}

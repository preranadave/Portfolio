import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const roles = ['Front-End Developer', 'Shopify Developer', 'React Developer'];

function TypewriterRoles() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let t;
    if (!deleting) {
      if (displayed.length < target.length) {
        t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
      } else {
        t = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % roles.length);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="hero-typewriter-text">
      {displayed}
      <span className="typer-cursor" />
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const chars = 'Prerana Dave'.split('');

  return (
    <section ref={containerRef} id="hero" className="hero-section">

      {/* Decorative guide lines */}
      <div className="hero-guide-line hero-guide-line-1" aria-hidden="true" />
      <div className="hero-guide-line hero-guide-line-2" aria-hidden="true" />
      <div className="hero-guide-line hero-guide-line-3" aria-hidden="true" />

      {/* Corner brackets */}
      <div className="hero-corner hero-corner-tl" aria-hidden="true" />
      <div className="hero-corner hero-corner-br" aria-hidden="true" />

      {/* Content */}
      <div className="container hero-inner">

        {/* Top bar */}
        <motion.div
          className="hero-top-bar"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="hero-status">
            <div className="hero-status-dot" />
            <span className="t-label">Available for work</span>
          </div>
          <div className="hero-meta">
            <span className="t-label">Rajkot, Gujarat 🇮🇳</span>
            <span className="t-label" style={{ marginTop: '3px' }}>4+ Years Experience</span>
          </div>
        </motion.div>

        {/* Name — character reveal */}
        <h1 className="hero-name" aria-label="Prerana Dave">
          {['Prerana', 'Dave'].map((word, wi) => (
            <span key={wi} className="hero-name-line">
              {word.split('').map((char, ci) => (
                <motion.span
                  key={ci}
                  style={{ display: 'inline-block' }}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4 + (wi * 7 + ci) * 0.04,
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Bottom 3-col grid */}
        <div className="hero-bottom">

          {/* Left — roles */}
          <motion.div
            className="hero-roles"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <div className="hero-role-item" style={{ color: 'var(--accent)' }}>
              <TypewriterRoles />
            </div>
            <div className="hero-role-item">Shopify Developer</div>
            <div className="hero-role-item">React Developer</div>
          </motion.div>

          {/* Center — CTA buttons */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <button
              className="btn btn-primary"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>View Work</span>
              <span className="btn-arrow">→</span>
            </button>
            <button
              className="btn btn-outline"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Contact</span>
            </button>
          </motion.div>

          {/* Right — description */}
          <motion.div
            className="hero-desc"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
          >
            <p>
              Front-end developer specializing in Shopify, React.js, and pixel-perfect UI.
              Transforming Figma designs into scalable, responsive web experiences.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator — absolutely positioned, never overlaps */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="t-label" style={{ fontSize: '9px' }}>Scroll</span>
        <div className="scroll-indicator-line" />
      </motion.div>

    </section>
  );
}

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadeUp } from '../Common/RevealText';

const stats = [
  { value: '4+', label: 'Years Exp.' },
  { value: '20+', label: 'Projects' },
  { value: '100%', label: 'Pixel Perfect' },
  { value: '∞', label: 'Lines of Code' },
];

const expertiseItems = [
  'Shopify Theme Development','React.js','HTML5 & CSS3',
  'JavaScript (ES6+)','Tailwind CSS','WordPress',
  'Responsive Design','Figma to Code','UI Engineering','AI-assisted Dev',
];

const hobbies = [
  { icon:'📷', label:'Photography', desc:'Composition, lighting, and visual storytelling — skills that translate directly into UI layouts and design thinking.' },
  { icon:'🎬', label:'Videography', desc:'Motion, pacing, and narrative — the same principles behind great scroll animations and micro-interactions.' },
  { icon:'🎵', label:'Music', desc:'Listening across genres — rhythm and flow that influences the cadence of how I write and structure code.' },
  { icon:'📺', label:'Film & TV', desc:'Cinematography and art direction that feeds creative instincts and keeps the eye sharp for detail.' },
];

const terminalLines = [
  { type:'comment', text:'// Prerana Dave — Front-End Developer' },
  { type:'blank', text:'' },
  { type:'key', text:'const developer = {' },
  { type:'prop', text:'  name:', value:'"Prerana Dave",' },
  { type:'prop', text:'  location:', value:'"Rajkot, Gujarat 🇮🇳",' },
  { type:'prop', text:'  role:', value:'"Front-End Developer",' },
  { type:'blank', text:'' },
  { type:'key', text:'  stack: [' },
  { type:'item', text:'    "React.js",' },
  { type:'item', text:'    "Shopify / Liquid",' },
  { type:'item', text:'    "Tailwind CSS",' },
  { type:'item', text:'    "JavaScript (ES6+)",' },
  { type:'item', text:'    "WordPress",' },
  { type:'item', text:'    "Figma → Code",' },
  { type:'key', text:'  ],' },
  { type:'blank', text:'' },
  { type:'key', text:'  passions: [' },
  { type:'item', text:'    "Photography & Videography",' },
  { type:'item', text:'    "Creative content",' },
  { type:'item', text:'    "AI-assisted workflows",' },
  { type:'key', text:'  ],' },
  { type:'blank', text:'' },
  { type:'prop', text:'  available:', value:'true,' },
  { type:'prop', text:'  openTo:', value:'"Freelance & Full-time",' },
  { type:'key', text:'};' },
];

function TerminalBlock() {
  const [count, setCount] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  useEffect(() => {
    if (!isInView || count >= terminalLines.length) return;
    const delay = terminalLines[count]?.type === 'blank' ? 80 : 50;
    const t = setTimeout(() => setCount(v => v + 1), delay);
    return () => clearTimeout(t);
  }, [isInView, count]);

  useEffect(() => {
    const t = setInterval(() => setCursorOn(v => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div ref={ref} className="terminal-wrap">
      <div className="terminal-bar">
        <div className="terminal-dot" style={{ background: '#FF5F57' }} />
        <div className="terminal-dot" style={{ background: '#FEBC2E' }} />
        <div className="terminal-dot" style={{ background: '#28C840' }} />
        <span className="terminal-filename">developer.js</span>
      </div>
      <div className="terminal-body">
        {terminalLines.slice(0, count).map((line, i) => {
          const cls = line.type === 'comment' ? 't-comment'
                    : line.type === 'key' ? 't-key'
                    : line.type === 'prop' ? 't-prop'
                    : line.type === 'item' ? 't-item'
                    : 't-plain';
          return (
            <div key={i} className={cls}>
              {line.type === 'prop' ? (
                <>{line.text} <span className="t-str-val">{line.value}</span></>
              ) : (line.text || '\u00A0')}
              {i === count - 1 && count < terminalLines.length && (
                <span className="t-cursor-inline" style={{ background: cursorOn ? 'var(--accent)' : 'transparent' }} />
              )}
            </div>
          );
        })}
        {count >= terminalLines.length && (
          <div className="t-prop">
            {'> '}<span className="t-cursor-final" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });
  const hobbiesRef = useRef(null);
  const hobbiesInView = useInView(hobbiesRef, { once: true, margin: '-10%' });

  return (
    <section id="about" className="about-section">
      <div className="container">

        <FadeUp>
          <div className="section-header">
            <div>
              <div className="section-num">01</div>
              <h2 className="section-title">About</h2>
            </div>
            <div className="section-header-line" />
          </div>
        </FadeUp>

        <div ref={ref} className="about-grid">
          {/* Left */}
          <div>
            <div style={{ overflow: 'hidden', marginBottom: '24px' }}>
              <motion.h3
                className="about-headline"
                initial={{ y: '100%' }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              >
                Crafting digital experiences with precision and creative intent.
              </motion.h3>
            </div>

            <FadeUp delay={0.15}>
              <p className="about-body">I'm Prerana Dave, a front-end developer based in Rajkot, Gujarat. I specialize in building fast, accessible, and visually refined web experiences that bridge the gap between design and engineering.</p>
              <p className="about-body">With expertise spanning Shopify theme development, React.js applications, and pixel-perfect HTML/CSS implementations, I bring Figma designs to life with meticulous attention to detail and modern development practices.</p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <span className="about-expertise-label">Expertise</span>
              <div className="about-badges">
                {expertiseItems.map((item, i) => (
                  <motion.span
                    key={item}
                    className="about-badge"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right */}
          <div>
            <FadeUp delay={0.1}>
              <TerminalBlock />
            </FadeUp>

            <div className="stats-grid">
              {stats.map((s, i) => (
                <FadeUp key={s.label} delay={0.2 + i * 0.07}>
                  <div className="stat-item">
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div ref={hobbiesRef} className="hobbies-section">
          <FadeUp>
            <div className="hobbies-divider">
              <div className="hobbies-divider-line" />
              <span className="t-label">Beyond the Code</span>
              <div className="hobbies-divider-line" />
            </div>
          </FadeUp>

          <div className="hobbies-grid">
            {hobbies.map((h, i) => (
              <motion.div
                key={h.label}
                className="hobby-card"
                initial={{ opacity: 0, y: 36 }}
                animate={hobbiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="hobby-icon">{h.icon}</span>
                <div className="hobby-name">{h.label}</div>
                <div className="hobby-desc">{h.desc}</div>
              </motion.div>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <div className="creative-callout">
              <span className="creative-callout-icon">✦</span>
              <div>
                <div className="creative-callout-title">Photography & Videography as a Creative Superpower</div>
                <div className="creative-callout-body">Years behind a camera sharpened how I see — framing, depth, contrast, and the moment that makes someone stop scrolling. That same instinct shapes every component I build: how content breathes, where the eye lands first, and what makes a layout feel alive. I'm always looking for the creative angle, whether in a UI pattern, a scroll animation, or a piece of content strategy.</div>
              </div>
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}

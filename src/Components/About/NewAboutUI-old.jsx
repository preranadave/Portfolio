import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadeUp } from '../Common/RevealText';
import { aboutImg } from '../../data/portfolioData';

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '100%', label: 'Pixel-Perfect UI' },
  { value: '∞', label: 'Lines of Code' },
];

const expertiseItems = [
  "Shopify Theme Development", "React.js", "HTML5 & CSS3",
  "JavaScript (ES6+)", "Tailwind CSS", "WordPress",
  "Responsive Design", "Figma to Code", "UI Engineering", "AI-assisted Dev",
];

const hobbies = [
  {
    icon: "📷",
    label: "Photography",
    color: "#7C5CFC",
    desc: "Composition, lighting, and visual storytelling — skills that translate directly into UI layouts and design thinking.",
  },
  {
    icon: "🎬",
    label: "Videography",
    color: "#00D9FF",
    desc: "Motion, pacing, and narrative — the same principles behind great scroll animations and micro-interactions.",
  },
  {
    icon: "🎵",
    label: "Music",
    color: "#A78BFA",
    desc: "Listening to music across genres — rhythm and flow that influences the cadence of how I write and structure code.",
  },
  {
    icon: "📺",
    label: "Film & TV",
    color: "#F472B6",
    desc: "Watching new shows and films for cinematography, art direction, and storytelling that feeds creative instincts.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });
  const hobbiesRef = useRef(null);
  const hobbiesInView = useInView(hobbiesRef, { once: true, margin: '-10%' });

  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <FadeUp>
          <span className="label-uppercase">About Me</span>
        </FadeUp>

        {/* Main split layout */}
        <div ref={ref} className="mt-16 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <div>
            <div className="overflow-hidden mb-6">
              <motion.h2
                className="display-lg gradient-text-warm"
                initial={{ y: '100%' }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              >
                Crafting digital experiences with precision.
              </motion.h2>
            </div>

            <FadeUp delay={0.15}>
              <p className="text-muted leading-relaxed text-base mb-5">
                I'm Prerana Dave, a front-end developer based in Rajkot, Gujarat.
                I specialize in building fast, accessible, and visually stunning web experiences
                that bridge the gap between design and engineering.
              </p>
              <p className="text-muted leading-relaxed text-base mb-10">
                With expertise spanning Shopify theme development, React.js applications, and
                pixel-perfect HTML/CSS implementations, I bring Figma designs to life with
                meticulous attention to detail and modern development practices.
              </p>
            </FadeUp>

            {/* Expertise */}
            <FadeUp delay={0.25}>
              <p className="label-uppercase mb-4">Expertise</p>
              <div className="flex flex-wrap gap-2">
                {expertiseItems.map((item, i) => (
                  <motion.span
                    key={item}
                    className="skill-badge"
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

          {/* Right — photo + stats */}
          <div className="space-y-8">
            <FadeUp delay={0.1}>
              <div
                className="relative rounded-2xl overflow-hidden gradient-border"
                style={{ aspectRatio: '4/3', background: '#111111' }}
              >
                <img
                  src={aboutImg}
                  alt="Prerana Dave"
                  className="w-full h-full object-cover"
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(124,92,252,0.15) 0%, transparent 60%)' }}
                />
                <div className="absolute top-4 left-4 w-6 h-6 border-l border-t" style={{ borderColor: 'rgba(124,92,252,0.5)' }} />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b" style={{ borderColor: 'rgba(0,217,255,0.5)' }} />
              </div>
            </FadeUp>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <FadeUp key={stat.label} delay={0.2 + i * 0.08}>
                  <div className="stat-card">
                    <div className="font-display font-bold text-3xl mb-1 gradient-text">{stat.value}</div>
                    <div className="label-uppercase" style={{ fontSize: '0.65rem' }}>{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* ── Beyond the Code ── */}
        <div ref={hobbiesRef} className="mt-28">

          {/* Header */}
          <FadeUp>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(124,92,252,0.3), transparent)' }} />
              <span className="label-uppercase">Beyond the Code</span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,217,255,0.3))' }} />
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="text-muted text-sm text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              I see creativity everywhere — the eye trained behind a camera lens
              finds the same balance and hierarchy that makes a great UI.
            </p>
          </FadeUp>

          {/* Hobby cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hobbies.map((h, i) => (
              <motion.div
                key={h.label}
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover-lift"
                initial={{ opacity: 0, y: 40 }}
                animate={hobbiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ borderColor: `${h.color}20` }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${h.color}40`}
                onMouseLeave={e => e.currentTarget.style.borderColor = `${h.color}20`}
              >
                {/* Icon bubble */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: `${h.color}15`, border: `1px solid ${h.color}25` }}
                >
                  {h.icon}
                </div>
                <div>
                  <p
                    className="font-display font-semibold text-sm mb-2"
                    style={{ color: h.color }}
                  >
                    {h.label}
                  </p>
                  <p className="text-muted text-xs leading-relaxed">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Creative mindset callout */}
          <FadeUp delay={0.2}>
            <div
              className="mt-8 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
              style={{
                background: 'linear-gradient(135deg, rgba(124,92,252,0.07) 0%, rgba(0,217,255,0.04) 100%)',
                border: '1px solid rgba(124,92,252,0.15)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                style={{ background: 'rgba(124,92,252,0.15)', border: '1px solid rgba(124,92,252,0.25)' }}
              >
                ✦
              </div>
              <div>
                <p className="text-white text-sm font-medium mb-1">
                  Photography & Videography as a Creative Superpower
                </p>
                <p className="text-muted text-xs leading-relaxed max-w-2xl">
                  Years behind a camera sharpened how I see — framing, depth, contrast, and the moment
                  that makes someone stop scrolling. That same instinct shapes every component I build:
                  how content breathes, where the eye lands first, and what makes a layout feel alive.
                  I'm always looking for the creative angle, whether it's in a UI pattern, a scroll
                  animation, or a piece of content strategy.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}

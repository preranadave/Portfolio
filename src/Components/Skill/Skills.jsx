import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadeUp } from '../Common/RevealText';
import { skills } from '../../data/portfolioData';

const catDotColors = {
  'Front-End': '#B9916A',
  'Shopify':   '#7C6954',
  'WordPress': '#A08060',
  'Design':    '#8A7562',
  'AI Workflow': '#6B8C6B',
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <FadeUp>
          <div className="section-header">
            <div>
              <div className="section-num">03</div>
              <h2 className="section-title">Skills</h2>
            </div>
            <div className="section-header-line" />
          </div>
        </FadeUp>

        <div ref={ref} className="skills-grid">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              className="skill-category-card"
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="skill-cat-header">
                <div className="skill-cat-dot" style={{ background: catDotColors[category] || '#B9916A' }} />
                <span className="skill-cat-name">{category}</span>
              </div>
              <div className="skill-items">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIdx * 0.1 + i * 0.04 + 0.1, duration: 0.3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadeUp } from '../Common/RevealText';
import { experience, education } from '../../data/portfolioData';

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      className="timeline-item"
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="timeline-dot" />
      <div className="timeline-period">{item.period}</div>
      <div className="timeline-role">{item.role}</div>
      <div className="timeline-company">{item.company}</div>
      <div className="timeline-type-badge">{item.type}</div>
      <ul className="timeline-resp">
        {item.responsibilities.map((r, i) => (
          <li key={i} className="timeline-resp-item">
            <span className="timeline-resp-arrow">›</span>
            {r}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">

        <FadeUp>
          <div className="section-header">
            <div>
              <div className="section-num">02</div>
              <h2 className="section-title">Experience</h2>
            </div>
            <div className="section-header-line" />
          </div>
        </FadeUp>

        <div className="timeline-wrap">
          <div className="timeline-spine" />
          {experience.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>

        <div className="education-wrap">
          <FadeUp>
            <span className="t-label" style={{ marginBottom: '20px', display: 'block' }}>Education</span>
          </FadeUp>
          <div className="edu-grid">
            {education.map((edu, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="edu-card">
                  <div className="edu-year">{edu.year}{edu.grade ? ` · ${edu.grade}` : ''}</div>
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-inst">{edu.institution}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

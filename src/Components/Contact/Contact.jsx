import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadeUp } from '../Common/RevealText';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const contactLinks = [
  { icon: FiMail,     label: 'Email',    value: 'psdave.3399@gmail.com',   href: 'mailto:psdave.3399@gmail.com' },
  { icon: FiGithub,   label: 'GitHub',   value: '@preranadave',             href: 'https://github.com/preranadave' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'Prerna Dave',              href: 'https://www.linkedin.com/in/prerna-dave-b76b66179' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <FadeUp>
          <div className="section-header">
            <div>
              <div className="section-num">05</div>
              <h2 className="section-title">Contact</h2>
            </div>
            <div className="section-header-line" />
          </div>
        </FadeUp>

        <div ref={ref} className="contact-grid">
          {/* Left */}
          <div>
            <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
              <motion.h3
                className="contact-headline"
                initial={{ y: '100%', opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              >
                Let's build something great.
              </motion.h3>
            </div>

            <FadeUp delay={0.15}>
              <p className="contact-intro">
                Open to freelance projects, full-time roles, and interesting collaborations.
                Whether it's a Shopify store, a React app, or a design brought to life — let's talk.
              </p>
              <a href="mailto:psdave.3399@gmail.com" className="contact-email-link">
                psdave.3399@gmail.com →
              </a>
            </FadeUp>
          </div>

          {/* Right — links */}
          <div className="contact-links">
            {contactLinks.map((link, i) => (
              <FadeUp key={link.label} delay={0.2 + i * 0.1}>
                <a
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-link-row"
                >
                  <div className="contact-link-icon-wrap">
                    <link.icon size={16} />
                  </div>
                  <div>
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">{link.value}</span>
                  </div>
                  <span className="contact-link-arrow">→</span>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

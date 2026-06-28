import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-accent-line" />
        <div className="footer-inner">
          <span className="footer-name">Prerana Dave</span>

          <p className="footer-copy">© {year} Prerana Dave. All rights reserved.</p>

          <div className="footer-socials">
            {[
              { href: 'mailto:psdave.3399@gmail.com',                          Icon: FiMail,     label: 'Email' },
              { href: 'https://github.com/preranadave',                         Icon: FiGithub,   label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/prerna-dave-b76b66179',      Icon: FiLinkedin, label: 'LinkedIn' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="footer-social-link"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <motion.button
            className="footer-back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowUp size={13} /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => { setDone(true); setTimeout(onComplete, 600); }, 300);
          return 100;
        }
        return prev + Math.random() * 12 + 4;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [onComplete]);

  const letters = 'Prerana Dave'.split('');

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader-screen"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader-name-wrap">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                className="loader-letter"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              >
                {l === ' ' ? '\u00A0' : l}
              </motion.span>
            ))}
          </div>

          <div className="loader-bar-track">
            <motion.div
              className="loader-bar-fill"
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>

          <motion.span
            className="loader-pct"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

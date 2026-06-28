import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FadeUp } from '../Common/RevealText';
import { clientProjects, personalProjects } from '../../data/portfolioData';
import { FiExternalLink, FiGithub, FiFigma } from 'react-icons/fi';

function ClientCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-5%' });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 8,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -8,
    });
  };

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`, transition: 'transform 0.15s ease' }}
    >
      <div className="project-img-wrap">
        <img src={project.preview} alt={project.title} loading="lazy" />
        {/* Accent tint */}
        <div
          className="project-tint"
          style={{ background: `linear-gradient(to top, ${project.accent}50, transparent)` }}
        />
        {/* Overlay */}
        <div className="project-overlay">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="project-overlay-btn project-overlay-btn-live"
            style={{ background: project.accent }}>
            <FiExternalLink size={12} /> Live Site
          </a>
          {project.figmaUrl && (
            <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer"
              className="project-overlay-btn project-overlay-btn-figma">
              <FiFigma size={12} /> Figma
            </a>
          )}
        </div>
      </div>

      <div className="project-body">
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-tag"
              style={{ borderColor: `${project.accent}40`, color: project.accent, background: `${project.accent}10` }}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-title">{project.title}</div>
        <div className="project-tech-label" style={{ color: project.accent }}>{project.tech}</div>
        <div className="project-desc">{project.description}</div>
        <div className="project-footer">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link"
            onMouseEnter={e => e.currentTarget.style.color = project.accent}
            onMouseLeave={e => e.currentTarget.style.color = ''}>
            <FiExternalLink size={11} /> Live Site
          </a>
          {project.figmaUrl && (
            <>
              <span className="project-link-sep">·</span>
              <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <FiFigma size={11} /> Figma
              </a>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function PersonalCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-5%' });

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="project-img-wrap">
        <img src={project.preview} alt={project.title} loading="lazy" />
        <div className="project-overlay">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="project-overlay-btn project-overlay-btn-github">
            <FiGithub size={12} /> GitHub
          </a>
        </div>
      </div>

      <div className="project-body">
        <div className="project-tags">
          {project.tech.map(tag => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-title">{project.title}</div>
        <div className="project-desc">{project.description}</div>
        <div className="project-footer">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            <FiGithub size={11} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [tab, setTab] = useState('client');

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <FadeUp>
          <div className="section-header">
            <div>
              <div className="section-num">04</div>
              <h2 className="section-title">Projects</h2>
            </div>
            <div className="section-header-line" />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="projects-tabs">
            <button
              className={`projects-tab${tab === 'client' ? ' active' : ''}`}
              onClick={() => setTab('client')}
            >
              Client Work <span className="projects-tab-count">({clientProjects.length})</span>
            </button>
            <button
              className={`projects-tab${tab === 'personal' ? ' active' : ''}`}
              onClick={() => setTab('personal')}
            >
              Personal <span className="projects-tab-count">({personalProjects.length})</span>
            </button>
          </div>
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="projects-grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {tab === 'client'
              ? clientProjects.map((p, i) => <ClientCard key={p.id} project={p} index={i} />)
              : personalProjects.map((p, i) => <PersonalCard key={p.id} project={p} index={i} />)
            }
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

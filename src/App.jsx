import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const data = {
  projects: [
    {
      title: 'Emotion AI Support',
      desc: 'An AI-driven emotional support system that uses real-time sentiment analysis to provide personalized empathetic responses and tracking.',
      stack: ['Python', 'Flask', 'NLP', 'TensorFlow', 'MongoDB'],
      image: '/project_emotion_ai_1771853882672.png'
    },
    {
      title: 'Car Dodge Game',
      desc: 'A browser-based reflex game where players dodge incoming objects. Built with a custom game loop, canvas rendering, and DOM manipulation.',
      stack: ['HTML5', 'Canvas API', 'JavaScript', 'Node.js'],
      image: '/project_canvas_dodge_1771853442578.png'
    },
    {
      title: 'Expense Manager',
      desc: 'Full-stack web app to log, manage, and analyze personal expenses. Features data visualization, CRUD operations, and REST API architecture.',
      stack: ['Flask', 'Python', 'MongoDB', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop'
    },
    {
      title: 'Cricket Training AI',
      desc: 'ML model that recommends personalized cricket training drills based on player statistics. Uses neural network architecture with preprocessed data.',
      stack: ['Python', 'TensorFlow', 'NumPy', 'Pandas'],
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2070&auto=format&fit=crop'
    },
  ],
};

function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${clientX - 14}px, ${clientY - 14}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="custom-cursor-follower" />
    </>
  );
}

function CommandPalette() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="cmd-k"
    >
      <span>Search</span>
      <kbd>Ctrl K</kbd>
    </motion.div>
  );
}

function Dock({ activeSection }) {
  return (
    <div className="dock-wrapper">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className="dock"
      >
        <a href="mailto:2005.dhanushkrishna@gmail.com">Contact</a>
        <div className="dock-separator" />
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
        <a href="#work" className={activeSection === 'work' ? 'active' : ''}>Work</a>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CustomCursor />
      <motion.div className="progress-bar" style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: 2, background: 'var(--accent)', transformOrigin: '0%', zIndex: 10001 }} />
      <CommandPalette />
      <Dock activeSection={activeSection} />

      {/* BACKGROUND ORBS */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="parallax-orb"
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="parallax-orb"
        style={{ bottom: '20%', right: '10%', background: 'radial-gradient(circle, rgba(235, 94, 40, 0.05), transparent 70%)' }}
      />

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hero-title"
          >
            Crafting <span className="accent italic">Intelligent</span> <br />
            Digital Experiences.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="hero-image-container"
          >
            <img src="/hero_vanguard_interface_1771855190344.png" alt="Hero Art" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="section-label"
          >
            01 // About
          </motion.span>
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="about-text"
            >
              I am <span className="highlight">Chandavolu Dhanush</span>, an AI/ML enthusiast and
              Full-Stack Developer based in Bangalore. Currently pursuing my engineering at
              <span className="highlight"> Alliance University</span>, I focus on building
              seamless applications that bridge the gap between
              <span className="highlight"> raw data</span> and <span className="highlight">user interaction</span>.
            </motion.div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work">
        <div className="container">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="section-label"
          >
            02 // Selected Work
          </motion.span>
          <div className="projects-list">
            {data.projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ margin: "-100px" }}
                className="project-item"
              >
                <div className="project-media">
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="project-content">
                  <span className="project-number">0{i + 1} ———</span>
                  <motion.h3
                    whileHover={{ x: 10, color: 'var(--accent)' }}
                    className="project-name"
                  >
                    {p.title}
                  </motion.h3>
                  <p className="project-description">{p.desc}</p>
                  <div className="project-tags">
                    {p.stack.map((s, idx) => (
                      <span key={idx} className="project-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact">
        <div className="container">
          <span className="section-label">Connect</span>
          <motion.a
            href="mailto:2005.dhanushkrishna@gmail.com"
            whileHover={{ scale: 1.02 }}
            className="footer-email"
          >
            Let's build something <br />
            <span className="accent italic">meaningful.</span>
          </motion.a>

          <div className="footer-bottom">
            <div>© {new Date().getFullYear()} Dhanush krishna</div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <motion.a whileHover={{ color: 'var(--accent)' }} href="https://github.com/krdhanushBTE" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GITHUB</motion.a>
              <motion.a whileHover={{ color: 'var(--accent)' }} href="https://www.linkedin.com/in/dhanush-krishna-796012287/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LINKEDIN</motion.a>
            </div>
            <div>Bangalore, IN</div>
          </div>
        </div>
      </footer>
    </>
  );
}

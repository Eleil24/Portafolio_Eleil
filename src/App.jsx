import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, User, Monitor, Smartphone, MapPin, CheckCircle } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-animation"></div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="nav-logo">&lt;Eleil /&gt;</a>
          <div className="nav-links">
            <a href="#home" className="nav-link">Inicio</a>
            <a href="#about" className="nav-link">Sobre mí</a>
            <a href="#projects" className="nav-link">Proyectos</a>
            <a href="#contact" className="nav-link">Contacto</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Inicio / Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div className="fade-up">
              <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Bienvenido</h2>
              <h1>ELEIL UCHPA</h1>
              <p className="delay-1 fade-up" style={{ fontSize: '1.5rem', marginBottom: '2.5rem', color: '#fff' }}>
                Soy desarrollador web...
              </p>
              <div className="delay-2 fade-up" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a href="#about" className="btn btn-primary">Conóceme más</a>
                <a href="#projects" className="btn btn-outline glass" style={{ padding: '0.8rem 1.5rem', borderRadius: '9999px', textDecoration: 'none' }}>Ver proyectos</a>
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: '-8rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite' }}>
              <ChevronDown size={32} color="white" />
            </div>
          </div>
        </section>

        {/* Sobre Mí Section */}
        <section id="about" className="container about-section">
          <h2 className="fade-up" style={{ marginBottom: '3rem', borderBottom: '3px solid var(--accent)', display: 'inline-block', paddingBottom: '0.5rem' }}>Sobre mí</h2>

          <div className="about-grid">
            <div className="about-image-wrapper fade-up delay-1">
              <div className="about-image">
                {/* La imagen de fondo se carga mediante CSS (.about-image) */}
              </div>
            </div>

            <div className="about-content fade-up delay-2">
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Full Stack Web Developer.</h3>
              <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                Soy un profesional altamente responsable, con facilidad para trabajar en equipo, interactuar con los clientes, con disposición permanente al aprendizaje y entrega de valor a la empresa.
              </p>

              <div className="info-grid">
                <div className="info-item">
                  <User className="info-icon" />
                  <div>
                    <strong style={{ display: 'block' }}>Nombre:</strong> <span style={{ color: 'var(--text-secondary)' }}>Eleil Uchpa</span>
                  </div>
                </div>
                <div className="info-item">
                  <Monitor className="info-icon" />
                  <div>
                    <strong style={{ display: 'block' }}>Perfil:</strong> <span style={{ color: 'var(--text-secondary)' }}>Desarrollador Web</span>
                  </div>
                </div>
                <div className="info-item">
                  <Smartphone className="info-icon" />
                  <div>
                    <strong style={{ display: 'block' }}>Celular:</strong> <span style={{ color: 'var(--text-secondary)' }}>+51 999 999 999</span>
                  </div>
                </div>
                <div className="info-item">
                  <Mail className="info-icon" />
                  <div>
                    <strong style={{ display: 'block' }}>Correo:</strong> <span style={{ color: 'var(--text-secondary)' }}>eleil@ejemplo.com</span>
                  </div>
                </div>
                <div className="info-item">
                  <MapPin className="info-icon" />
                  <div>
                    <strong style={{ display: 'block' }}>Ciudad:</strong> <span style={{ color: 'var(--text-secondary)' }}>Lima, Perú</span>
                  </div>
                </div>
                <div className="info-item">
                  <CheckCircle className="info-icon" />
                  <div>
                    <strong style={{ display: 'block' }}>Freelance:</strong> <span style={{ color: 'var(--text-secondary)' }}>Disponible</span>
                  </div>
                </div>
              </div>

              <p style={{ marginTop: '2.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Siempre busco trabajar con personas que son idealistas como yo, y que están interesadas en crear y trabajar en proyectos geniales, interesantes y significativos. Envíame un <a href="#contact" style={{ color: 'var(--accent)', textDecoration: 'none' }}>mensaje</a> si eso suena como una taza de café.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container">
          <h2 className="fade-up" style={{ textAlign: 'center' }}>Proyectos Destacados</h2>

          <div className="project-grid">
            {/* Project 1 */}
            <div className="project-card glass fade-up delay-1">
              <div className="project-img-wrapper">
                {/* Placeholder gradient matching theme */}
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #1e1b4b, #6366f1)', opacity: 0.8 }}></div>
              </div>
              <div className="project-content">
                <h3 style={{ marginBottom: '0.5rem' }}>E-commerce Premium</h3>
                <p>Plataforma de comercio electrónico con carrito de compras en tiempo real y panel de administración.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Vite</span>
                  <span className="tech-tag">Tailwind</span>
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                  <a href="#" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    <Github size={16} /> Código
                  </a>
                  <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    <ExternalLink size={16} /> Visitar
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card glass fade-up delay-2">
              <div className="project-img-wrapper">
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #0f172a, #38bdf8)', opacity: 0.8 }}></div>
              </div>
              <div className="project-content">
                <h3 style={{ marginBottom: '0.5rem' }}>Sistema de Gestión</h3>
                <p>Dashboard administrativo para control de inventario y gestión de usuarios con roles.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Prisma</span>
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                  <a href="#" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    <Github size={16} /> Código
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card glass fade-up delay-2">
              <div className="project-img-wrapper">
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #312e81, #c084fc)', opacity: 0.8 }}></div>
              </div>
              <div className="project-content">
                <h3 style={{ marginBottom: '0.5rem' }}>App de Tareas Pro</h3>
                <p>Aplicación de productividad con arrastrar y soltar, temas personalizados y modo oscuro.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">CSS Modules</span>
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                  <a href="#" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    <Github size={16} /> Código
                  </a>
                  <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    <ExternalLink size={16} /> Visitar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container" style={{ textAlign: 'center', minHeight: '60vh' }}>
          <div className="glass fade-up" style={{ padding: '4rem 2rem', borderRadius: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h2>¿Trabajamos juntos?</h2>
            <p style={{ marginBottom: '2rem' }}>
              Actualmente estoy abierto a nuevas oportunidades. Si tienes un proyecto en mente o simplemente quieres saludar, mi bandeja de entrada siempre está abierta.
            </p>
            <a href="mailto:hola@ejemplo.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              <Mail size={20} /> Enviar Mensaje
            </a>

            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
              <a href="https://github.com/Eleil" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/eleil" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Eleil. Diseñado y construido con React.</p>
      </footer>
    </>
  );
}

export default App;

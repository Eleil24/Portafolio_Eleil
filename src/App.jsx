import { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, User, Monitor, Smartphone, MapPin, CheckCircle, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollProjects = (direction) => {
    if (projectsRef.current) {
      const scrollAmount = projectsRef.current.clientWidth / 2 + 32;
      projectsRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="bg-animation"></div>

      {/* Lightbox de foto */}
      {isLightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
            <img
              src="/Portafolio_Eleil/images/imagen_eleil.jpg"
              alt="Eleil Uchpa Mayuntupa"
              className="lightbox-img"
            />
            <p className="lightbox-caption">Eleil Uchpa Mayuntupa &mdash; Full Stack Developer</p>
          </div>
        </div>
      )}

      {/* Overlay móvil */}
      <div
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
        <div className="container nav-container">
          <a
            href="#"
            className="nav-logo"
            title="Ver foto"
            onClick={e => { e.preventDefault(); setIsLightboxOpen(true); }}
          >
            <div className="nav-profile-img"></div>
          </a>

          <button className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {/* Header del panel */}
            <div className="mobile-menu-header">
              <span className="mobile-menu-name">Eleil Uchpa Mayuntupa</span>
              <span className="mobile-menu-role">Full Stack Developer</span>
            </div>

            <a href="#home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
            <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Sobre mí</a>
            <a href="#skills" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Conocimientos</a>
            <a href="#experience" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Experiencia</a>
            <a href="#projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Proyectos</a>
            <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Inicio / Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div className="fade-up">
              <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px' }}>Hola, soy</h2>
              <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', lineHeight: '1.1' }}>ELEIL UCHPA</h1>
              <p className="delay-1 fade-up" style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: '#e2e8f0', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
                Desarrollador Web Full Stack apasionado por construir aplicaciones modernas, eficientes y con un diseño impecable.
              </p>
              <div className="delay-2 fade-up" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#about" className="btn btn-outline glass" style={{ padding: '0.8rem 1.5rem', borderRadius: '9999px', textDecoration: 'none' }}>Conóceme más</a>
                <a href="#projects" className="btn btn-outline glass" style={{ padding: '0.8rem 1.5rem', borderRadius: '9999px', textDecoration: 'none' }}>Ver proyectos</a>
              </div>
            </div>

            <a href="#about" style={{ position: 'absolute', bottom: '-8rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite', cursor: 'pointer', zIndex: 10 }}>
              <ChevronDown size={32} color="white" />
            </a>
          </div>
        </section>

        {/* Sobre Mí Section */}
        <section id="about" className="container about-section">
          <h2 className="fade-up" style={{ marginBottom: '1rem', borderBottom: '3px solid var(--accent)', display: 'inline-block', paddingBottom: '0.5rem' }}>Sobre mí</h2>

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
                    <strong style={{ display: 'block' }}>Nombre:</strong> <span style={{ color: 'var(--text-secondary)' }}>Eleil Uchpa Mayuntupa</span>
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
                    <strong style={{ display: 'block' }}>Celular:</strong> <span style={{ color: 'var(--text-secondary)' }}>+51 927 712 406</span>
                  </div>
                </div>
                <div className="info-item">
                  <Mail className="info-icon" />
                  <div>
                    <strong style={{ display: 'block' }}>Correo:</strong> <span style={{ color: 'var(--text-secondary)' }}>eleil.uchpam@gmail.com</span>
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

              <div style={{ marginTop: '2rem' }}>
                <a
                  href="/Portafolio_Eleil/docs/Uchpa Eleil 2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline glass"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem' }}
                >
                  Descargar Curriculum
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Conocimientos Section */}
        <section id="skills" className="skills-section">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="fade-up" style={{ marginBottom: '1rem', borderBottom: '3px solid var(--accent)', display: 'inline-block', paddingBottom: '0.5rem' }}>Conocimientos</h2>

            <div className="skills-grid">
              {/* Backend */}
              <div className="skill-category fade-up delay-1">
                <h4 className="skill-title">BACKEND DEVELOPER:</h4>
                <div className="skill-badges">
                  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" className="skill-badge-img" />
                  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Boot" className="skill-badge-img" />
                  {/* Usando '#43853d' para un verde más claro, o usando estilo claro con logo original */}
                  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" className="skill-badge-img" />
                  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" className="skill-badge-img" />
                </div>
              </div>

              {/* Deploy */}
              <div className="skill-category fade-up delay-2">
                <h4 className="skill-title">DEPLOY:</h4>
                <div className="skill-badges">
                  <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=orange" alt="AWS" className="skill-badge-img" />
                  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" className="skill-badge-img" />
                  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" className="skill-badge-img" />
                  <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git" className="skill-badge-img" />
                  <img src="https://img.shields.io/badge/GitHub-FFFFFF?style=for-the-badge&logo=github&logoColor=black" alt="GitHub" className="skill-badge-img" />
                </div>
              </div>

              {/* Frontend */}
              <div className="skill-category fade-up delay-1">
                <h4 className="skill-title">FRONTEND DEVELOPER:</h4>
                <div className="skill-badges">
                  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" className="skill-badge-img" />
                  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" className="skill-badge-img" />
                  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" className="skill-badge-img" />
                  {/* React force bright blue color block instead of dark grey */}
                  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" className="skill-badge-img" />
                  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" className="skill-badge-img" />
                </div>
              </div>

              {/* QA Automation (as in your example image) */}
              {/* This section was removed as per instructions */}

              {/* Database */}
              <div className="skill-category fade-up delay-1">
                <h4 className="skill-title">DATABASE:</h4>
                <div className="skill-badges">
                  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" className="skill-badge-img" />
                  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" className="skill-badge-img" />
                  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" className="skill-badge-img" />
                  <img src="https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" alt="SQL Server" className="skill-badge-img" />
                </div>
              </div>

              {/* Editors */}
              <div className="skill-category fade-up delay-2">
                <h4 className="skill-title">EDITORS:</h4>
                <div className="skill-badges">
                  <img src="https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VS Code" className="skill-badge-img" />
                  <img src="https://img.shields.io/badge/Sublime_Text-FF9800?style=for-the-badge&logo=sublime-text&logoColor=white" alt="Sublime Text" className="skill-badge-img" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Experiencia Section */}
        <section id="experience" className="experience-section">
          <div className="experience-overlay"></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="fade-up" style={{ marginBottom: '4rem', borderBottom: '3px solid var(--accent)', display: 'inline-block', paddingBottom: '0.5rem' }}>Experiencia</h2>

            <div className="experience-grid">

              {/* Columna Educación */}
              <div className="timeline-column fade-up delay-1">
                <h3 className="timeline-header">Educación</h3>
                <div className="timeline">

                  {/* Item Educación 1 */}
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content glass">
                      <h4>Desarrollo web Fullstack con Java</h4>
                      <div className="timeline-date">2025 - 2025</div>
                      <a href="https://codigo.edu.pe/" target="_blank" rel="noopener noreferrer" className="timeline-institution" style={{ display: 'inline-block', textDecoration: 'none' }}>BOOTCAMP / INSTITUTO</a>
                      <p>Formación intensiva en tecnologías modernas de desarrollo web, abarcando tanto el Front-end como el Back-end para la creación de aplicaciones completas.</p>
                    </div>
                  </div>

                  {/* Item Educación 2 */}
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content glass">
                      <h4>Ingeniería en Sistemas Computacionales</h4>
                      <div className="timeline-date">2019 - 2024</div>
                      <a href="https://www.upn.edu.pe/" target="_blank" rel="noopener noreferrer" className="timeline-institution" style={{ display: 'inline-block', textDecoration: 'none' }}>UNIVERSIDAD</a>
                      <p>Formación profesional enfocada en el diseño, desarrollo y gestión de sistemas de información, bases de datos y arquitecturas de software orientadas a resolver problemas complejos.</p>
                    </div>
                  </div>

                  {/* Item Educación 3 */}
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content glass">
                      <h4>Administración de Redes y Comunicaciones</h4>
                      <div className="timeline-date">2016 - 2018</div>
                      <a href="https://www.cibertec.edu.pe/" target="_blank" rel="noopener noreferrer" className="timeline-institution" style={{ display: 'inline-block', textDecoration: 'none' }}>CIBERTEC</a>
                      <p>Formación profesional enfocada en el diseño, implementación y gestión de infraestructuras de red y sistemas de comunicación.</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Columna Experiencia Profesional */}
              <div className="timeline-column fade-up delay-2">
                <h3 className="timeline-header">Experiencia Profesional</h3>
                <div className="timeline">

                  {/* Item Trabajo 1 */}
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content glass">
                      <h4>Analista programador</h4>
                      <div className="timeline-date">2024 - 2026</div>
                      <a href="https://nus-lab.github.io/soluciones-informaticas/" target="_blank" rel="noopener noreferrer" className="timeline-institution" style={{ display: 'inline-block', textDecoration: 'none' }}>SOLUCIONES INFORMATICAS NUS</a>
                      <p>
                        Encargado de diseñar, desarrollar e implementar desde cero la página web institucional de la empresa. Responsable completo del ciclo de vida del proyecto web, asegurando un diseño responsivo, moderno y altamente funcional.
                      </p>
                      <p style={{ marginTop: '0.8rem' }}>
                        Me encargué de automatizar procesos desarrollando sistemas por medio del lenguaje VBA (Visual Studio para Aplicaciones) como sistemas Generadores de Reportes o Guardar datos de las diferentes maquinas que hay en la empresa SINEA para realizar un Certificado de Calidad que se lo lleva el cliente. Otras de mis funciones es la instalación del sistema para cada computadora y los Testing respectivos, además el manejo de base de datos Access.
                      </p>
                      <p style={{ marginTop: '0.8rem' }}>
                        Se desarrolló un sistema de pagos masivos del banco BCP para los proveedores de la empresa BERICAP, utilizando VBA y basado en una guía técnica proporcionada por la entidad financiera.
                      </p>
                      <p style={{ marginTop: '0.8rem' }}>
                        Se llevo a cabo la migración de código VBA hacia una solución basada en Electron, utilizando JavaScript como lenguaje principal. Este proceso busca modernizar y optimizar nuestras herramientas, mejorando su rendimiento, escalabilidad y facilidad de mantenimiento, al mismo tiempo que nos alineamos con tecnologías más flexibles y robustas para el desarrollo de aplicaciones multiplataforma.
                      </p>
                      <p style={{ marginTop: '0.8rem' }}>
                        En paralelo se realizaron pruebas y análisis de costos para migrar la base de datos Access de SINEA a soluciones en la nube como Azure SQL, SharePoint Online y AWS (MySQL/RDS). Se evaluaron aspectos como escalabilidad, integración con sistemas existentes, seguridad y costos operativos.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '0.5rem' }}>
            <div className="fade-up" style={{ marginBottom: '3rem', textAlign: 'left' }}>
              <h2 style={{ margin: 0, borderBottom: '3px solid var(--accent)', display: 'inline-block', paddingBottom: '0.2rem' }}>Proyectos Destacados</h2>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Botón Izquierda */}
              <button
                onClick={() => scrollProjects('left')}
                className="btn btn-outline glass carousel-arrow left-arrow"
                aria-label="Anterior proyecto"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Botón Derecha */}
              <button
                onClick={() => scrollProjects('right')}
                className="btn btn-outline glass carousel-arrow right-arrow"
                aria-label="Siguiente proyecto"
              >
                <ChevronRight size={28} />
              </button>

              <div className="project-grid" ref={projectsRef}>
                {/* Project 1 */}
                <div className="project-card glass fade-up delay-1">
                  <div className="project-img-wrapper">
                    <img src="/Portafolio_Eleil/projects/calificacion_peliculas.JPG" alt="App de Tareas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="project-content">
                    <h3 style={{ marginBottom: '0.5rem' }}>Plataforma de Calificación de Películas</h3>
                    <p>Aplicación web Full Stack para la exploración y evaluación de películas. Diseñada con una arquitectura cliente-servidor, permite a los usuarios interactuar con un catálogo dinámico y dejar sus críticas. Incluye un panel administrativo para la gestión completa del contenido, usuarios y reseñas, garantizando la seguridad de los endpoints mediante autenticación con JWT y documentada de forma interactiva con Swagger.</p>
                    <div className="project-tech">
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">Vite</span>
                      <span className="tech-tag">Tailwind</span>
                      <span className="tech-tag">Spring Boot</span>
                      <span className="tech-tag">PostgreSQL</span>
                      <span className="tech-tag">JWT</span>
                      <span className="tech-tag">Swagger</span>
                    </div>
                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {/* Botón Front */}
                      <a href="https://github.com/Eleil24/Proyect_movie_crud" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                        <Github size={16} /> Front
                      </a>
                      {/* Botón Back */}
                      <a href="https://github.com/eleil-uchpa/Peliculas_Backend_Up" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                        <Github size={16} /> Back
                      </a>
                      {/* Botón API (Render) */}
                      <a href="https://peliculas-backend-up.onrender.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                        <Monitor size={16} /> API Server
                      </a>
                      {/* Botón Visitar */}
                      <a href="https://proyect-movie-crud.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', marginLeft: 'auto' }}>
                        <ExternalLink size={16} /> Visitar
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="project-card glass fade-up delay-2">
                  <div className="project-img-wrapper">
                    <img src="/Portafolio_Eleil/projects/gestor_de_stock.JPG" alt="App de Tareas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="project-content">
                    <h3 style={{ marginBottom: '0.5rem' }}>Gestión de Stock</h3>
                    <p>Dashboard administrativo para control de inventario y gestión de productos. Incluye módulos para registrar compras, gestión dinámica de carrito de productos, administración de proveedores y control de stock. Arquitectura segura con autenticación basada en roles y manejo eficiente de base de datos relacional.</p>
                    <div className="project-tech">
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">TypeScript</span>
                      <span className="tech-tag">Vite</span>
                      <span className="tech-tag">Node.js</span>
                      <span className="tech-tag">Prisma ORM</span>
                      <span className="tech-tag">PostgreSQL</span>
                      <span className="tech-tag">JWT</span>
                      <span className="tech-tag">NestJS</span>
                    </div>
                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <a href="https://github.com/Eleil24/Control_stock_frontend_levantar" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                        <Github size={16} /> Front
                      </a>
                      <a href="https://github.com/eleil-um-98/Gestion_de_Stock_Render" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                        <Github size={16} /> Back
                      </a>
                      <a href="https://gestion-de-stock-render.onrender.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                        <Monitor size={16} /> API Server
                      </a>
                      <a href="https://control-stock-frontend-levantar.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', marginLeft: 'auto' }}>
                        <ExternalLink size={16} /> Visitar
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="project-card glass fade-up delay-2">
                  <div className="project-img-wrapper">
                    <img src="/Portafolio_Eleil/projects/gestor_de_tareas.JPG" alt="App de Tareas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="project-content">
                    <h3 style={{ marginBottom: '0.5rem' }}>Gestor de Tareas</h3>
                    <p>Aplicación web Full Stack orientada a la productividad y organización personal. Permite a los usuarios crear, clasificar, editar y gestionar el ciclo de vida de sus tareas diarias. Cuenta con una interfaz intuitiva y responsiva desarrollada con React y Tailwind CSS, respaldada por una API RESTful robusta construida con Spring Boot y PostgreSQL para asegurar la persistencia de datos.</p>
                    <div className="project-tech">
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">Vite</span>
                      <span className="tech-tag">Spring Boot</span>
                      <span className="tech-tag">PostgreSQL</span>
                      <span className="tech-tag">Tailwind</span>
                    </div>
                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {/* Botón Front */}
                      <a href="https://github.com/Eleil24/Gestor_de_Tareas_Front_levantar" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                        <Github size={16} /> Front
                      </a>
                      {/* Botón Back */}
                      <a href="https://github.com/Eleil24/gestor-tareas-backend_levantar" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                        <Github size={16} /> Back
                      </a>
                      {/* Botón API (Render) */}
                      <a href="https://gestor-tareas-backend-levantar.onrender.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                        <Monitor size={16} /> API Server
                      </a>
                      {/* Botón Visitar */}
                      <a href="https://gestor-de-tareas-front-levantar.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', marginLeft: 'auto' }}>
                        <ExternalLink size={16} /> Visitar
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="project-card glass fade-up delay-2">
                  <div className="project-img-wrapper">
                    <img src="/Portafolio_Eleil/projects/gestor_de_comandas.JPG" alt="App de Tareas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="project-content">
                    <h3 style={{ marginBottom: '0.5rem' }}>Gestor de Comandas</h3>
                    <p>Sistema diseñado para optimizar el flujo de pedidos en restaurantes, facilitando la toma y seguimiento de comandas en tiempo real. Interfaz ágil construida con React y Bootstrap, utilizando Mockito para simular y proveer los datos de la carta y platos (Mock Data), emulando el comportamiento de una base de datos real.</p>
                    <div className="project-tech">
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">Bootstrap</span>
                      <span className="tech-tag">Mockito</span>
                    </div>
                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <a href="https://github.com/Eleil24/Sistema-de-comandas" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                        <Github size={16} /> Código
                      </a>
                      <a href="https://eleil24.github.io/Sistema-de-comandas/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', marginLeft: 'auto' }}>
                        <ExternalLink size={16} /> Visitar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container" style={{ textAlign: 'center', minHeight: '40vh', padding: '2rem 0' }}>
          <div className="glass fade-up" style={{ padding: '2rem 2rem', borderRadius: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h2>¿Trabajamos juntos?</h2>
            <p style={{ marginBottom: '2rem' }}>
              Actualmente estoy abierto a nuevas oportunidades. Si tienes un proyecto en mente o simplemente quieres saludar, mi bandeja de entrada siempre está abierta.
            </p>
            <a href="mailto:eleil.uchpam@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              <Mail size={20} /> Enviar Mensaje
            </a>

            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
              <a href="https://github.com/Eleil24" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/eleil-azarias-uchpa-mayuntupa-28b896181" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Eleil Uchpa Mayuntupa.</p>
      </footer>
    </>
  );
}

export default App;

import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const handleDownloadCV = () => {
    // Crear un enlace temporal para descargar el CV
    const link = document.createElement('a');
    link.href = '/CV SCOTT BENAVIDES.pdf';
    link.download = 'CV-Scott-Benavides.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <motion.div 
            className="home-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="home-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hola, soy <span className="highlight">Scott Benavides</span>
            </motion.h1>
            
            <motion.h2 
              className="home-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ingeniero en Informática
            </motion.h2>
            
            <motion.p 
              className="home-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ingeniero en Informática con experiencia sólida en análisis de datos, automatización de procesos con Python y desarrollo de
 dashboards en Power BI. Especializado en calidad y transformación de datos, desarrollo de soluciones ETL con SQL Server y
 visualización de indicadores clave (KPI). Proactivo, con liderazgo comprobado y enfoque en resultados y mejora continua
            </motion.p>
            
            <motion.div 
              className="home-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button 
                className="btn btn-large"
                onClick={handleDownloadCV}
              >
                <FaDownload />
                Descargar CV
              </button>
              <a href="#contact" className="btn btn-outline btn-large">
                Contáctame
              </a>
            </motion.div>
            
            <motion.div 
              className="home-social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="https://github.com/Scott894139" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/scott-benavides-silva-000b69167/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:tu-email@gmail.com">
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="home-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-container">
              <img 
                src="/images/Screenshot_20221212-222836_Instagram.jpg" 
                alt="Scott Benavides"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80';
                }}
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home; 
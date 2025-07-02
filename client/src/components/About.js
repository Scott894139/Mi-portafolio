import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaLanguage } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaCode />, number: '3+', label: 'Años de Experiencia' },
    { icon: <FaDatabase />, number: '3+', label: 'Proyectos Completados' },
    { icon: <FaTools />, number: '10+', label: 'Tecnologías' },
    { icon: <FaLanguage />, number: '3', label: 'Idiomas' }
  ];

  const tools = [
    'Python', 'JavaScript', 'React.js', 'Node.js', 'SQL', 'Power BI', 
    'MySQL', 'Excel', 'RStudio', 'HTML', 'CSS'
  ];

  const languages = [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Básico' },
    { name: 'Portugues', level: 'Básico' }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sobre mí
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="about-description">
              Soy un Ingeniero en Informática apasionado por crear soluciones tecnológicas 
              innovadoras. Mi experiencia abarca desde el desarrollo web full-stack hasta 
              el análisis de datos y la automatización de procesos empresariales.
            </p>
            
            <p className="about-description">
              Me especializo en transformar ideas complejas en aplicaciones funcionales y 
              eficientes, siempre enfocándome en la experiencia del usuario y la escalabilidad 
              del sistema. Disfruto trabajando en equipos multidisciplinarios y enfrentando 
              nuevos desafíos tecnológicos.
            </p>
            
            <div className="about-objective">
              <h3>Objetivo Profesional</h3>
              <p>
                Busco contribuir al crecimiento de organizaciones innovadoras mediante el 
                desarrollo de soluciones tecnológicas que optimicen procesos y generen 
                valor agregado, mientras continúo expandiendo mis conocimientos en 
                tecnologías emergentes.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-details"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="tools-section">
              <h3>Herramientas y Tecnologías</h3>
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <motion.span 
                    key={tool}
                    className="tool-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="languages-section">
              <h3>Idiomas</h3>
              <div className="languages-list">
                {languages.map((lang, index) => (
                  <motion.div 
                    key={lang.name}
                    className="language-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="about-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
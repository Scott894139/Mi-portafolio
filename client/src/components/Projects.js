import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Empresarial',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&auto=format&q=80',
      description: 'Aplicación web completa para gestión de inventarios, ventas y reportes. Automatizó procesos manuales reduciendo el tiempo de operación en un 60%.',
      technologies: ['React', 'Node.js', 'MySQL', 'Express'],
      github: 'https://github.com/Scott894139/Proyecto-CRUD',
      demo: 'https://proyecto1-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Dashboard de Análisis de Datos',
      category: 'analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format&q=80',
      description: 'Dashboard interactivo en Power BI para visualización de KPIs empresariales. Integra múltiples fuentes de datos y genera reportes automáticos.',
      technologies: ['Power BI', 'SQL Server', 'Python', 'DAX'],
      github: 'https://github.com/Scott894139/pagina_iq',
      demo: null,
      featured: true
    },

    {
      id: 4,
      title: 'Automatización de Reportes',
      category: 'automation',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop&auto=format&q=80',
      description: 'Script en Python que automatiza la generación de reportes financieros mensuales, reduciendo el tiempo de proceso de 8 horas a 30 minutos.',
      technologies: ['Python', 'Pandas', 'Excel', 'Power BI', 'SQL'],
      github: 'https://github.com/Scott894139/tareaPyrthon',
      demo: null,
      featured: false
    },

    
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'backend', name: 'Backend' },
    { id: 'automation', name: 'Automatización' },
    { id: 'mobile', name: 'Móvil' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Proyectos
        </motion.h2>

        <motion.div 
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaFilter className="filter-icon" />
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>No se encontraron proyectos en esta categoría.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects; 
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'IQVIA',
      position: ' Analista de Datos',
      period: ' Octubre 2022 - Febrero 2025',
      location: 'Santiago, Chile',
      type: 'Tiempo Completo',
      description: [
        'Automatización de procesos con Python, reduciendo tiempos de validación en un 40%.',
        'Validación médica a nivel LATAM sobre uso de recetas.',
        'Creación de dashboards en Power BI conectados a SQL Server.',
        'Análisis estadístico y limpieza de datos en RStudio',
        'Desarrollo de soluciones web internas (HTML, CSS, JS)',
        'Generación de reportes automatizados para gerencias'
      ],
      technologies: ['Python', 'Power BI', 'SQL', 'RStudio', 'HTML', 'CSS', 'JS', 'Excel','Word','PowerPoint'],
    },
    {
      id: 2,
      company: 'MANPOWER (Samsung)',
      position: ' Analista de Reclamos',
      period: '  Septiembre 2021 - Octubre 2022',
      location: 'Santiago, Chile',
      type: 'Tiempo Completo',
      description: [
        'Gestión de garantías y devoluciones a nivel nacional.',
        'Soporte técnico a clientes, mejorando tiempos de respuesta en un 20%.',
      ],
      technologies: ['Python', 'Power BI', 'SQL', 'RStudio', 'HTML', 'CSS', 'JS', 'Excel','Word','PowerPoint'],
    },
    {
      id: 3,
      company: 'HELICO',
      position: 'Analista de Licitaciones Públicas',
      period: ' Agosto 2018 - Diciembre 2019',
      location: 'Santiago, Chile',
      type: 'Tiempo Completo',
      description: [
        'Ingreso y validación de documentos en Mercado Público.',
        'Coordinación logística de despachos por licitación.',
      ],
      technologies: ['Python', 'Power BI', 'SQL', 'RStudio', 'HTML', 'CSS', 'JS', 'Excel','Word','PowerPoint'],
    },
    {
      id: 4,
      company: 'BITELCO DIEBOLD',
      position: 'Coordinador de Servicio Técnico ATM',
      period: 'Junio 2017 - Mayo 2018',
      location: 'Santiago, Chile',
      type: 'Tiempo Completo',
      description: [
        'Planificación de mantenciones preventivas y correctivas.',
        'Gestión de RRHH (entrevistas, contrataciones, asistencia).',
        'Soporte a bancos: gestión de incidentes y turnos técnicos.',
      ],
      technologies: ['Python', 'Power BI', 'SQL', 'RStudio', 'HTML', 'CSS', 'JS', 'Excel','Word','PowerPoint'],
    },
    {
      id: 5,
      company: 'AVANT Technologies',
      position: 'Jefe de Proyecto y Supervisor (Banco Santander y Banco Estado)',
      period: 'Octubre 2013 - Junio 2017',
      location: 'Santiago, Chile',
      type: 'Tiempo Completo',
      description: [
        'Coordinación de equipos técnicos y ETV (transportadora de valores).',
        'Gestión de RRHH (entrevistas, contrataciones, asistencia)',
        'Soporte a bancos: gestión de incidentes y turnos técnicos.',
        'Liderazgo de equipos y soporte a bancos..',
        'Coordinación de equipo de mesa de ayuda para atención de incidentes.',
        'Seguimiento y control de cumplimiento de turnos y asistencia del personal técnico y ETV.',
      ],
      technologies: ['Python', 'Power BI', 'SQL', 'RStudio', 'HTML', 'CSS', 'JS', 'Excel','Word','PowerPoint'],
    },
    {
      id: 5,
      company: 'Sony / LG / PlayStation',
      position: 'Gestor de Ventas y Merchandising.',
      period: 'Junio 2011 – Enero 2014',
      location: 'Santiago, Chile',
      type: 'Tiempo Completo',
      description: [
        'Representación de marcas en retail.',
        'Promoción y demostración de productos electrónicos.',
      ],
      technologies: ['Python', 'Power BI', 'SQL', 'RStudio', 'HTML', 'CSS', 'JS', 'Excel','Word','PowerPoint'],
    },
    {
      id: 6,
      company: 'Ripley S.A',
      position: 'Vendedor Full.',
      period: 'Diciembre 2007 – Junio 2011',
      location: 'Santiago, Chile',
      type: 'Tiempo Completo',
      description: [
        'Promoción y demostración de productos electrónicos.',
        'Atención al cliente en retail.',
      ],
      technologies: ['Python', 'Power BI', 'SQL', 'RStudio', 'HTML', 'CSS', 'JS', 'Excel','Word','PowerPoint'],
    },
  ];

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experiencia Profesional
        </motion.h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <div className="company-info">
                    <h3 className="position">{exp.position}</h3>
                    <h4 className="company">{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <div className="meta-item">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                    <div className="meta-item">
                      <FaBriefcase />
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="experience-content">
                  <div className="description">
                    <h5>Responsabilidades:</h5>
                    <ul>
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    <h5>Tecnologías utilizadas:</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="achievements">
                      <h5><FaAward /> Logros destacados:</h5>
                      <ul>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="timeline-connector">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="experience-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="summary-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Proyectos Completados</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Empresas Atendidas</span>
            </div>
            <div className="stat">
              <span className="stat-number">40%</span>
              <span className="stat-label">Mejora Promedio en Eficiencia</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 
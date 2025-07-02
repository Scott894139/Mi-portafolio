import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt,
  FaChartLine, FaBrain, FaRocket
} from 'react-icons/fa';
import { 
  SiMysql, SiPowerbi, SiMicrosoftexcel
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      title: 'Fortalezas Principales',
      icon: <FaRocket />,
      color: 'var(--primary-color)',
      skills: [
        { name: 'Análisis de datos y visualización con Power BI', icon: <SiPowerbi /> },
        { name: 'Automatización de procesos con Python', icon: <FaPython /> },
        { name: 'Dominio avanzado de Excel y herramientas Office', icon: <SiMicrosoftexcel /> },
        { name: 'Creación de dashboards y reportes ejecutivos', icon: <FaChartLine /> },
        { name: 'Validación y limpieza de datos', icon: <FaDatabase /> },
        { name: 'Metodologías ágiles y trabajo en equipo', icon: <FaGitAlt /> },
        { name: 'Análisis predictivo y estadística avanzada', icon: <FaChartLine /> },
      ]
    },
    {
      title: 'En Constante Aprendizaje',
      icon: <FaBrain />,
      color: 'var(--accent-color)',
      skills: [
        { name: 'Inteligencia Artificial y Machine Learning', icon: <FaBrain /> },
        { name: 'Arquitectura de microservicios', icon: <FaNodeJs /> },
        { name: 'DevOps y CI/CD', icon: <FaGitAlt /> },
        { name: 'Tecnologías cloud avanzadas (AWS, Azure)', icon: <FaDatabase /> },
        { name: 'Desarrollo Full Stack avanzado', icon: <FaJs /> },
        { name: 'Desarrollo web react', icon: <FaReact /> },
        { name: 'Gestión de bases de datos SQL', icon: <FaDatabase /> },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Habilidades
        </motion.h2>

        <div className="skills-main-grid">
          {skillsData.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              className="skills-main-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="skills-card-header">
                <div 
                  className="skills-card-icon"
                  style={{ color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="skills-card-title">{category.title}</h3>
              </div>
              
              <div className="skills-main-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-main-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="skill-main-icon">{skill.icon}</span>
                    <span className="skill-main-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
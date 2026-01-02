import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../../components/AnimatedPage';
import './Skills.css';

const Skills = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const skills = {
    frontend: {
      title: 'تطوير الواجهات',
      icon: 'fa-code',
      items: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Redux', level: 80 }
      ]
    },
    backend: {
      title: 'تطوير الخلفية',
      icon: 'fa-server',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 70 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    design: {
      title: 'تصميم واجهات المستخدم',
      icon: 'fa-paint-brush',
      items: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Photoshop', level: 75 },
        { name: 'Illustrator', level: 70 },
        { name: 'UI/UX', level: 85 }
      ]
    },
    tools: {
      title: 'أدوات التطوير',
      icon: 'fa-tools',
      items: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'VS Code', level: 90 },
        { name: 'Webpack', level: 75 },
        { name: 'npm', level: 85 }
      ]
    }
  };

  return (
    <AnimatedPage>
      <div className="skills-page">
        <div className="skills-hero">
          <motion.div 
            className="skills-hero-content"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={titleVariants}>مهاراتي التقنية</motion.h1>
            <motion.p variants={contentVariants}>
              مجموعة من المهارات التقنية التي اكتسبتها خلال رحلتي في مجال تطوير الويب
            </motion.p>
          </motion.div>
        </div>

        <div className="skills-content">
          {Object.values(skills).map((category, index) => (
            <motion.div 
              key={index}
              className="skills-category"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="category-header"
                variants={titleVariants}
              >
                <motion.i 
                  className={`fas ${category.icon}`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                ></motion.i>
                <motion.h2 variants={titleVariants}>{category.title}</motion.h2>
              </motion.div>

              <motion.div 
                className="skills-grid"
                variants={contentVariants}
              >
                {category.items.map((skill, i) => (
                  <motion.div 
                    key={i}
                    className="skill-card"
                    variants={contentVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="skill-info">
                      <motion.h3 
                        variants={contentVariants}
                        whileHover={{ x: 10, color: "var(--primary-color)" }}
                      >
                        {skill.name}
                      </motion.h3>
                      <motion.span 
                        className="skill-level"
                        variants={contentVariants}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <motion.div 
                      className="skill-progress"
                      variants={contentVariants}
                    >
                      <motion.div 
                        className="progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Skills; 
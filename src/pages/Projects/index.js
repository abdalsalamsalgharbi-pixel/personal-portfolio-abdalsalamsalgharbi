import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../../components/AnimatedPage';
import './Projects.css';
import dashboardImage from '../../assets/images/ain-al-amn/dashboard.jpg';
import mobileAppImage from '../../assets/images/ain-al-amn/security-eye-main.png';
import uiuxImage from '../../assets/images/projects/uiux.png';
import brandingImage from '../../assets/images/projects/branding.png';
import analysisImage from '../../assets/images/projects/analysis.png';
import researchImage from '../../assets/images/projects/research.png';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const projects = {
    all: [
      {
        id: 1,
        title: 'نظام عين الامن - لوزاره الداخلية',
        category: 'web',
        image: dashboardImage,
        description: 'منصة إدارة متكاملة لتطبيق عين الأمن تتيح متابعة البلاغات والإحصائيات وإدارة المستخدمين',
        technologies: ['React', 'Bootstrap', 'Material-UI', 'Socket.io', 'Redux', 'Django', 'Python']
      },
      {
        id: 2,
        title: 'تطبيق عين الامن - لوزاره الداخلية',
        category: 'mobile',
        image: mobileAppImage,
        description: 'تطبيق موبايل متكامل يسمح للمواطنين بإرسال البلاغات الأمنية ومتابعتها مع نظام تحديد الموقع',
        technologies: ['React Native', 'Redux', 'Socket.io', 'Google Maps API', 'Firebase', 'Node.js']
      },
      {
        id: 3,
        title: 'تصميم تطبيق الخدمات الذكية',
        category: 'uiux',
        image: uiuxImage,
        description: 'تجربة مستخدم متكاملة لتطبيق خدمات لوجستية تركز على سهولة الوصول والتفاعل السلس مع واجهات زجاجية عصرية',
        technologies: ['Figma', 'User Research', 'Prototyping', 'Design Systems']
      },
      {
        id: 4,
        title: 'هوية شركة ايثيون التقنية',
        category: 'branding',
        image: brandingImage,
        description: 'تصميم هوية بصرية كاملة تشمل الشعار والمطبوعات التجارية مع دليل استخدام العلامة التجارية',
        technologies: ['Illustrator', 'Photoshop', 'Branding Strategy', 'Visual Design']
      },
      {
        id: 5,
        title: 'تحليل نظام ادارة الموارد (ERP)',
        category: 'analysis',
        image: analysisImage,
        description: 'تحليل شامل لمتطلبات نظام إدارة موارد المؤسسات مع رسم خرائط العمليات وهيكلية النظام',
        technologies: ['Systems Analysis', 'UML', 'Data Flow', 'Requirements Engineering']
      },
      {
        id: 6,
        title: 'بحث في تطبيقات الذكاء الاصطناعي',
        category: 'research',
        image: researchImage,
        description: 'دراسة بحثية معمقة حول أثر استخدام تقنيات الذكاء الاصطناعي في تحسين تجربة مستخدم تطبيقات الموبايل',
        technologies: ['AI Research', 'Data Analysis', 'User Behavior', 'Academic Writing']
      }
    ],
    web: [
      {
        id: 1,
        title: 'نظام عين الامن - لوزاره الداخلية',
        category: 'web',
        image: dashboardImage,
        description: 'منصة إدارة متكاملة لتطبيق عين الأمن تتيح متابعة البلاغات والإحصائيات وإدارة المستخدمين',
        technologies: ['React', 'Bootstrap', 'Material-UI', 'Socket.io', 'Redux', 'Django', 'Python']
      }
    ],
    mobile: [
      {
        id: 2,
        title: 'تطبيق عين الامن - لوزاره الداخلية',
        category: 'mobile',
        image: mobileAppImage,
        description: 'تطبيق موبايل متكامل يسمح للمواطنين بإرسال البلاغات الأمنية ومتابعتها مع نظام تحديد الموقع',
        technologies: ['React Native', 'Redux', 'Socket.io', 'Google Maps API', 'Firebase', 'Node.js']
      }
    ],
    uiux: [
      {
        id: 3,
        title: 'تصميم تطبيق الخدمات الذكية',
        category: 'uiux',
        image: uiuxImage,
        description: 'تجربة مستخدم متكاملة لتطبيق خدمات لوجستية تركز على سهولة الوصول والتفاعل السلس مع واجهات زجاجية عصرية',
        technologies: ['Figma', 'User Research', 'Prototyping', 'Design Systems']
      }
    ],
    branding: [
      {
        id: 4,
        title: 'هوية شركة ايثيون التقنية',
        category: 'branding',
        image: brandingImage,
        description: 'تصميم هوية بصرية كاملة تشمل الشعار والمطبوعات التجارية مع دليل استخدام العلامة التجارية',
        technologies: ['Illustrator', 'Photoshop', 'Branding Strategy', 'Visual Design']
      }
    ],
    analysis: [
      {
        id: 5,
        title: 'تحليل نظام ادارة الموارد (ERP)',
        category: 'analysis',
        image: analysisImage,
        description: 'تحليل شامل لمتطلبات نظام إدارة موارد المؤسسات مع رسم خرائط العمليات وهيكلية النظام',
        technologies: ['Systems Analysis', 'UML', 'Data Flow', 'Requirements Engineering']
      }
    ],
    research: [
      {
        id: 6,
        title: 'بحث في تطبيقات الذكاء الاصطناعي',
        category: 'research',
        image: researchImage,
        description: 'دراسة بحثية معمقة حول أثر استخدام تقنيات الذكاء الاصطناعي في تحسين تجربة مستخدم تطبيقات الموبايل',
        technologies: ['AI Research', 'Data Analysis', 'User Behavior', 'Academic Writing']
      }
    ]
  };

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <AnimatedPage>
      <div className="projects-page">
        <div className="projects-hero">
          <motion.div
            className="projects-hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants}>مشاريعي</motion.h1>
            <motion.p variants={itemVariants}>
              استكشف مجموعة من مشاريعي المتميزة في تطوير الويب وتطبيقات الموبايل
            </motion.p>
          </motion.div>
        </div>

        <div className="projects-content">
          <motion.div
            className="projects-categories"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-th"></i>
              الكل
            </motion.button>
            <motion.button
              className={`category-btn ${activeCategory === 'web' ? 'active' : ''}`}
              onClick={() => setActiveCategory('web')}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-globe"></i>
              مواقع الويب
            </motion.button>
            <motion.button
              className={`category-btn ${activeCategory === 'mobile' ? 'active' : ''}`}
              onClick={() => setActiveCategory('mobile')}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-mobile-alt"></i>
              تطبيقات الموبايل
            </motion.button>
            <motion.button
              className={`category-btn ${activeCategory === 'uiux' ? 'active' : ''}`}
              onClick={() => setActiveCategory('uiux')}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-paint-brush"></i>
              تصميم UI/UX
            </motion.button>
            <motion.button
              className={`category-btn ${activeCategory === 'branding' ? 'active' : ''}`}
              onClick={() => setActiveCategory('branding')}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-ad"></i>
              شعارات ودعاية
            </motion.button>
            <motion.button
              className={`category-btn ${activeCategory === 'analysis' ? 'active' : ''}`}
              onClick={() => setActiveCategory('analysis')}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-chart-line"></i>
              تحليل مشاريع
            </motion.button>
            <motion.button
              className={`category-btn ${activeCategory === 'research' ? 'active' : ''}`}
              onClick={() => setActiveCategory('research')}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-search"></i>
              بحوثات
            </motion.button>
          </motion.div>

          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects[activeCategory].length > 0 ? (
              projects[activeCategory].map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                  }}
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <span className="project-category">
                        <i className={`fas ${project.category === 'web' ? 'fa-globe' :
                          project.category === 'mobile' ? 'fa-mobile-alt' :
                            project.category === 'uiux' ? 'fa-paint-brush' :
                              project.category === 'branding' ? 'fa-ad' :
                                project.category === 'analysis' ? 'fa-chart-line' : 'fa-search'
                          }`}></i>
                        {
                          project.category === 'web' ? 'موقع ويب' :
                            project.category === 'mobile' ? 'تطبيق موبايل' :
                              project.category === 'uiux' ? 'تصميم UI/UX' :
                                project.category === 'branding' ? 'شعارات ودعاية' :
                                  project.category === 'analysis' ? 'تحليل مشاريع' : 'بحوثات'
                        }
                      </span>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="tech-tag"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <motion.button
                      className="view-project-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      عرض المشروع
                      <i className="fas fa-arrow-left"></i>
                    </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="no-projects-message"
                variants={itemVariants}
                style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}
              >
                <h3>قريباً...</h3>
                <p>سيتم إضافة مشاريع في هذا القسم قريباً.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Projects; 
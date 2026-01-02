import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCheckCircle,
  FaRocket, FaCode, FaLayerGroup, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import { projectsData } from '../Projects/data';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="project-details-page">
        <div className="details-container">
          <Link to="/projects" className="back-link">
            <FaArrowLeft /> الرجوع للمشاريع
          </Link>
          <div className="content-section" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h2>المشروع غير موجود</h2>
            <p>نعتذر، لم نتمكن من العثور على المشروع المطلوب.</p>
          </div>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setActiveImage((prev) => (project.images && prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (project.images && prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="project-details-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="details-container">
        <motion.div variants={itemVariants}>
          <Link to="/projects" className="back-link">
            <FaArrowLeft /> الرجوع للمشاريع
          </Link>
        </motion.div>

        <motion.div
          className="project-hero"
          variants={itemVariants}
        >
          <div className="gallery-container">
            <AnimatePresence mode='wait'>
              <motion.img
                key={activeImage}
                src={project.images ? project.images[activeImage] : project.image}
                alt={project.title}
                className="hero-image"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {project.images && project.images.length > 1 && (
              <>
                <button className="gallery-nav prev" onClick={prevImage}>
                  <FaChevronLeft />
                </button>
                <button className="gallery-nav next" onClick={nextImage}>
                  <FaChevronRight />
                </button>

                <div className="gallery-thumbnails">
                  {project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`thumb-item ${activeImage === idx ? 'active' : ''}`}
                      onClick={() => setActiveImage(idx)}
                    >
                      <img src={img} alt={`${project.title} ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="hero-overlay">
            <div className="hero-info">
              <span className="project-category">
                {
                  project.category === 'web' ? 'موقع ويب' :
                    project.category === 'mobile' ? 'تطبيق موبايل' :
                      project.category === 'uiux' ? 'تصميم UI/UX' :
                        project.category === 'branding' ? 'شعارات ودعاية' :
                          project.category === 'analysis' ? 'تحليل مشاريع' : 'بحوثات'
                }
              </span>
              <h1>{project.title}</h1>
            </div>
          </div>
        </motion.div>

        <div className="main-content">
          <div className="left-side">
            <motion.section
              className="content-section"
              variants={itemVariants}
            >
              <h2><FaRocket /> عن المشروع</h2>
              <p className="description-text">{project.fullDescription || project.description}</p>

              <div className="features-grid">
                <h3><FaCheckCircle /> المميزات الأساسية</h3>
                <div className="features-list">
                  {project.features?.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <FaCheckCircle className="check-icon" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          <aside className="sidebar">
            <motion.div
              className="content-section sidebar-card"
              variants={itemVariants}
            >
              <h3><FaCode /> التقنيات المستخدمة</h3>
              <div className="tech-tags">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="content-section sidebar-card"
              variants={itemVariants}
            >
              <h3><FaLayerGroup /> روابط المشروع</h3>
              <div className="links-section">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="action-button primary-btn">
                    <FaExternalLinkAlt /> معاينة مباشرة
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="action-button secondary-btn">
                    <FaGithub /> الكود المصدري
                  </a>
                )}
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
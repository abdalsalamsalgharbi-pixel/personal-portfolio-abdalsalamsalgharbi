import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  FaReact, FaNodeJs, FaPython, FaJs, FaDatabase, FaDocker, FaGitAlt, FaFigma,
  FaCode, FaPalette, FaDraftingCompass, FaMobileAlt, FaProjectDiagram,
  FaLayerGroup, FaPaintBrush, FaTasks, FaTools, FaGraduationCap, FaDownload
} from 'react-icons/fa';
import AnimatedPage from '../../components/AnimatedPage';
import profileImage from '../../assets/images/profile.jpg';
import './Home.css';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // --- 3D Tilt Logic for Main Card ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // --- Contact Form State & Logic ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'الاسم مطلوب';
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صالح';
    }
    if (!formData.subject.trim()) newErrors.subject = 'الموضوع مطلوب';
    if (!formData.message.trim()) newErrors.message = 'الرسالة مطلوبة';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setShowSuccess(false), 3000);
      }, 1500);
    } else {
      setErrors(formErrors);
    }
  };

  // --- Data Arrays ---
  const experiences = [
    {
      icon: FaCode,
      title: 'تطوير الويب',
      description: 'خبرة في تطوير مواقع الويب باستخدام React و Node.js، مع التركيز على تجربة المستخدم والتصميم المتجاوب',
      skills: ['React', 'Node.js', 'JavaScript', 'HTML/CSS']
    },
    {
      icon: FaPalette,
      title: 'تصميم الجرافيكس',
      description: 'تصميم هويات بصرية ومواد تسويقية باستخدام أحدث أدوات التصميم',
      skills: ['Photoshop', 'Illustrator', 'Figma', 'XD']
    },
    {
      icon: FaDraftingCompass,
      title: 'تصميم أوتوكاد',
      description: 'تصميم رسومات هندسية ومخططات تقنية باستخدام برنامج AutoCAD',
      skills: ['AutoCAD', 'AutoLISP', '3D Modeling']
    },
    {
      icon: FaMobileAlt,
      title: 'صيانة الهواتف',
      description: 'صيانة وإصلاح الهواتف الذكية وبرمجة الأجهزة المحمولة',
      skills: ['Hardware Repair', 'Software Debugging', 'Device Programming']
    },
    {
      icon: FaProjectDiagram,
      title: 'محلل ومصمم مشاريع',
      description: 'تحليل متطلبات المشاريع وتصميم الحلول التقنية وإدارة تنفيذ المشاريع البرمجية',
      skills: ['Project Management', 'Requirements Analysis', 'System Design']
    }
  ];

  const certificates = [
    {
      icon: FaGraduationCap,
      title: 'بكالوريوس علوم الحاسوب',
      description: 'جامعة صنعاء - كلية الحاسوب',
      year: '2025'
    },
    {
      icon: FaPalette,
      title: 'مصمم جرافيكس محترف',
      description: 'معهد الاتصالات',
      year: '2022'
    },
    {
      icon: FaDraftingCompass,
      title: 'مصمم أوتوكاد',
      description: 'معهد الاتصالات',
      year: '2022'
    },
    {
      icon: FaMobileAlt,
      title: 'صيانة وبرمجة الهواتف',
      description: 'معهد الاتصالات',
      year: '2021'
    },
    {
      icon: FaCode,
      title: 'مطور ويب محترف',
      description: 'شهادة معتمدة من Google',
      year: '2023'
    },
    {
      icon: FaReact,
      title: 'مطور React متقدم',
      description: 'شهادة معتمدة من Meta',
      year: '2023'
    }
  ];

  const skills = [
    {
      title: 'اللغات البرمجية',
      icon: FaCode,
      items: ['JavaScript', 'Python', 'PHP', 'HTML/CSS', 'AutoLISP']
    },
    {
      title: 'أطر العمل',
      icon: FaLayerGroup,
      items: ['React', 'Node.js', 'Django', 'Laravel', 'Express.js']
    },
    {
      title: 'أدوات التصميم',
      icon: FaPaintBrush,
      items: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'AutoCAD', 'Adobe XD']
    },
    {
      title: 'إدارة المشاريع',
      icon: FaTasks,
      items: ['تحليل المتطلبات', 'إدارة المشاريع', 'Git & GitHub', 'Docker', 'Jira']
    },
    {
      title: 'صيانة وإصلاح',
      icon: FaTools,
      items: ['صيانة الهواتف', 'برمجة الأجهزة', 'إصلاح الأجهزة', 'تشخيص الأعطال', 'تحديث البرامج']
    }
  ];

  return (
    <AnimatedPage>
      <div className="home-page">
        {/* Bento Grid Hero */}
        <motion.div
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Card */}
          <motion.div
            className="bento-item hero-main"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d"
            }}
            variants={itemVariants}
          >
            <div className="status-badge" style={{ transform: "translateZ(20px)" }}>
              <span className="pulse-dot"></span>
              متاح للعمل (Open to work)
            </div>
            <h1 style={{ transform: "translateZ(40px)" }}>
              عبدالسلام الغربي.
              <br />
              <span style={{ color: "var(--text-secondary)", fontWeight: "400" }}>Full-Stack Developer</span>
            </h1>
            <p style={{ transform: "translateZ(30px)" }}>
              مهندس برمجيات شغوف ببناء تجارب رقمية استثنائية.
              أقوم بتحويل الأفكار المعقدة إلى منتجات برمجية أنيقة وقابلة للتطوير.
            </p>
            <div className="hero-buttons" style={{ transform: "translateZ(50px)" }}>
              <Link to="/projects" className="cta-button">
                تصفح أعمالي <i className="fas fa-arrow-left" style={{ marginLeft: "10px" }}></i>
              </Link>
              <a href="#contact" className="secondary-cta-button">
                تواصل معي
              </a>
              <a href="cv.pdf" download="Abdal-Salam-CV.pdf" className="secondary-cta-button" style={{ gap: '10px' }}>
                <FaDownload /> تحميل السيرة الذاتية
              </a>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div id="about" className="bento-item hero-profile-card" variants={itemVariants}>
            <div className="profile-image-outer">
              <div className="profile-image-inner">
                <img src={profileImage} alt="Profile" className="profile-image" />
              </div>
              <div className="profile-glow"></div>
            </div>
            <div className="profile-info-mini">
              <h3>صنعاء، اليمن</h3>
              <p>بتوقيت محلي (GMT+3)</p>
            </div>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div className="bento-item hero-tech-card" variants={itemVariants}>
            <span className="section-label">التقنيات (Stacks)</span>
            <div className="tech-grid-mini">
              <FaReact className="tech-icon-mini" title="React" />
              <FaNodeJs className="tech-icon-mini" title="Node.js" />
              <FaPython className="tech-icon-mini" title="Python" />
              <FaJs className="tech-icon-mini" title="JavaScript" />
              <FaDatabase className="tech-icon-mini" title="SQL" />
              <FaDocker className="tech-icon-mini" title="Docker" />
              <FaGitAlt className="tech-icon-mini" title="Git" />
              <FaFigma className="tech-icon-mini" title="Figma" />
            </div>
          </motion.div>

        </motion.div>

        {/* Experience Section */}
        <motion.div
          id="experience"
          className="experience-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}
        >
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: '2.5rem',
              marginBottom: '3rem',
              textAlign: 'center',
              background: 'linear-gradient(to right, #fff, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            الخبرات العملية
          </motion.h2>

          <div className="experience-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-card bento-item"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                style={{ display: 'block' }}
              >
                <div style={{ marginBottom: '1.5rem', fontSize: '2.5rem', color: 'var(--primary-color)' }}>
                  <exp.icon />
                </div>
                <h3>{exp.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{exp.description}</p>
                <div className="skills-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: '#60a5fa',
                        border: '1px solid rgba(59, 130, 246, 0.2)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          id="skills"
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}
        >
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: '2.5rem',
              marginBottom: '3rem',
              textAlign: 'center',
              background: 'linear-gradient(to right, #fff, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            مهاراتي
          </motion.h2>

          <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card bento-item"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <div style={{ marginBottom: '1rem', fontSize: '2rem', color: 'var(--primary-color)' }}>
                  <skill.icon />
                </div>
                <h3 style={{ marginBottom: '1.5rem' }}>{skill.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, width: '100%', textAlign: 'center' }}>
                  {skill.items.map((item, i) => (
                    <li key={i} style={{
                      padding: '0.5rem 0',
                      borderBottom: i !== skill.items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                      color: 'var(--text-secondary)'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          className="certificates-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}
        >
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: '2.5rem',
              marginBottom: '3rem',
              textAlign: 'center',
              background: 'linear-gradient(to right, #fff, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            الشهادات
          </motion.h2>

          <div className="certificates-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="certificate-card bento-item"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ marginBottom: '1rem', fontSize: '2.5rem', color: 'var(--secondary-color)' }}>
                    <cert.icon />
                  </div>
                  <h3>{cert.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: '1rem 0' }}>{cert.description}</p>
                </div>
                <span style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  background: 'var(--surface-light)',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  color: 'var(--primary-color)'
                }}>
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          id="contact"
          className="contact-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ maxWidth: '1200px', margin: '6rem auto 4rem', padding: '0 2rem' }}
        >
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: '2.5rem',
              marginBottom: '3rem',
              textAlign: 'center',
              background: 'linear-gradient(to right, #fff, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            تواصل معي
          </motion.h2>

          <div className="contact-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>

            {/* Contact Info Cards */}
            <motion.div className="contact-info" variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <motion.div
                className="info-card bento-item"
                whileHover={{ y: -5 }}
                style={{ textAlign: 'center', padding: '2rem' }}
              >
                <i className="fas fa-map-marker-alt" style={{ fontSize: '2rem', marginBottom: '1rem', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>
                <h3>العنوان</h3>
                <p style={{ color: 'var(--text-secondary)' }}>اليمن، صنعاء</p>
              </motion.div>
              <motion.div
                className="info-card bento-item"
                whileHover={{ y: -5 }}
                style={{ textAlign: 'center', padding: '2rem' }}
              >
                <i className="fas fa-envelope" style={{ fontSize: '2rem', marginBottom: '1rem', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>
                <h3>البريد الإلكتروني</h3>
                <p style={{ color: 'var(--text-secondary)' }}>abdalsalamsalgharbi@gmail.com</p>
              </motion.div>
              <motion.div
                className="info-card bento-item"
                whileHover={{ y: -5 }}
                style={{ textAlign: 'center', padding: '2rem' }}
              >
                <i className="fas fa-phone" style={{ fontSize: '2rem', marginBottom: '1rem', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>
                <h3>رقم الهاتف</h3>
                <p style={{ color: 'var(--text-secondary)' }}>+967778080815</p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form-container bento-item"
              variants={itemVariants}
              style={{ padding: '3rem' }}
            >
              <form className="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="الاسم"
                    style={{
                      width: '100%', padding: '1.2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(15, 23, 42, 0.6)', color: 'white', fontSize: '1rem'
                    }}
                  />
                  {errors.name && <span style={{ color: '#ef4444', fontSize: '0.9rem', display: 'block', marginTop: '0.5rem', textAlign: 'right' }}>{errors.name}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="البريد الإلكتروني"
                    style={{
                      width: '100%', padding: '1.2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(15, 23, 42, 0.6)', color: 'white', fontSize: '1rem'
                    }}
                  />
                  {errors.email && <span style={{ color: '#ef4444', fontSize: '0.9rem', display: 'block', marginTop: '0.5rem', textAlign: 'right' }}>{errors.email}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="الموضوع"
                    style={{
                      width: '100%', padding: '1.2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(15, 23, 42, 0.6)', color: 'white', fontSize: '1rem'
                    }}
                  />
                  {errors.subject && <span style={{ color: '#ef4444', fontSize: '0.9rem', display: 'block', marginTop: '0.5rem', textAlign: 'right' }}>{errors.subject}</span>}
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="الرسالة"
                    style={{
                      width: '100%', padding: '1.2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(15, 23, 42, 0.6)', color: 'white', fontSize: '1rem', minHeight: '150px', resize: 'vertical'
                    }}
                  ></textarea>
                  {errors.message && <span style={{ color: '#ef4444', fontSize: '0.9rem', display: 'block', marginTop: '0.5rem', textAlign: 'right' }}>{errors.message}</span>}
                </div>
                <motion.button
                  type="submit"
                  className="cta-button"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ justifyContent: 'center', width: '100%', marginTop: '1rem', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'} <i className="fas fa-paper-plane" style={{ marginRight: '10px' }}></i>
                </motion.button>
              </form>
            </motion.div>
          </div>

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              style={{
                position: 'fixed', bottom: '2rem', right: '2rem', background: 'rgba(16, 185, 129, 0.9)',
                backdropFilter: 'blur(10px)', color: 'white', padding: '1.5rem 2.5rem', borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.2)', zIndex: 1000,
                display: 'flex', alignItems: 'center', gap: '1rem'
              }}
            >
              <i className="fas fa-check-circle"></i>
              <p>تم إرسال رسالتك بنجاح!</p>
            </motion.div>
          )}

        </motion.div>

      </div>
    </AnimatedPage>
  );
};

export default Home;

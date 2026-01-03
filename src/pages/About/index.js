import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../../components/AnimatedPage';
import profileImage from '../../assets/images/profile.jpg';
import './About.css';

const FloatingSymbols = ({ isHovered }) => {
  const symbols = ['>', '<', '(', ')', '$', '{', '}', ':', ';', "'"];

  return (
    <AnimatePresence>
      {isHovered && symbols.map((symbol, index) => (
        <motion.div
          key={index}
          className="floating-symbol"
          initial={{
            opacity: 0,
            scale: 0,
            x: 0,
            y: 0
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
            x: Math.random() * 300 - 150,
            y: Math.random() * 300 - 150,
            rotate: Math.random() * 360
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 2,
            delay: index * 0.15,
            repeat: Infinity,
            repeatDelay: 0.3
          }}
          style={{
            position: 'absolute',
            color: `hsl(${Math.random() * 360}, 80%, 60%)`,
            fontSize: '2rem',
            fontWeight: 'bold',
            textShadow: '0 0 8px rgba(255,255,255,0.8)',
            zIndex: 5
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

const About = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  const certificates = [
    {
      icon: 'fa-graduation-cap',
      title: 'بكالوريوس تقنية معلومات',
      description: 'جامعة صنعاء - كلية الحاسوب',
      year: '2025'
    },
    {
      icon: 'fa-palette',
      title: 'مصمم جرافيكس محترف',
      description: 'معهد الاتصالات',
      year: '2022'
    },
    {
      icon: 'fa-drafting-compass',
      title: 'مصمم أوتوكاد',
      description: 'معهد الاتصالات',
      year: '2022'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'صيانة وبرمجة الهواتف',
      description: 'معهد الاتصالات',
      year: '2021'
    },
    {
      icon: 'fa-code',
      title: 'مطور ويب محترف',
      description: 'شهادة معتمدة من Google',
      year: '2023'
    },
    {
      icon: 'fa-react',
      title: 'مطور React متقدم',
      description: 'شهادة معتمدة من Meta',
      year: '2023'
    }
  ];

  const experiences = [
    {
      icon: 'fa-code',
      title: 'تطوير الويب',
      description: 'خبرة في تطوير مواقع الويب باستخدام React و Node.js، مع التركيز على تجربة المستخدم والتصميم المتجاوب',
      skills: ['React', 'Node.js', 'JavaScript', 'HTML/CSS']
    },
    {
      icon: 'fa-palette',
      title: 'تصميم الجرافيكس',
      description: 'تصميم هويات بصرية ومواد تسويقية باستخدام أحدث أدوات التصميم',
      skills: ['Photoshop', 'Illustrator', 'Figma', 'XD']
    },
    {
      icon: 'fa-drafting-compass',
      title: 'تصميم أوتوكاد',
      description: 'تصميم رسومات هندسية ومخططات تقنية باستخدام برنامج AutoCAD',
      skills: ['AutoCAD', 'AutoLISP', '3D Modeling']
    },
    {
      icon: 'fa-mobile-alt',
      title: 'صيانة الهواتف',
      description: 'صيانة وإصلاح الهواتف الذكية وبرمجة الأجهزة المحمولة',
      skills: ['Hardware Repair', 'Software Debugging', 'Device Programming']
    },
    {
      icon: 'fa-project-diagram',
      title: 'محلل ومصمم مشاريع',
      description: 'تحليل متطلبات المشاريع وتصميم الحلول التقنية وإدارة تنفيذ المشاريع البرمجية',
      skills: ['Project Management', 'Requirements Analysis', 'System Design']
    }
  ];

  const skills = {
    programming: {
      title: 'اللغات البرمجية',
      icon: 'fa-code',
      items: ['JavaScript', 'Python', 'PHP', 'HTML/CSS', 'AutoLISP']
    },
    frameworks: {
      title: 'أطر العمل',
      icon: 'fa-layer-group',
      items: ['React', 'Node.js', 'Django', 'Laravel', 'Express.js']
    },
    design: {
      title: 'أدوات التصميم',
      icon: 'fa-paint-brush',
      items: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'AutoCAD', 'Adobe XD']
    },
    projectManagement: {
      title: 'إدارة المشاريع',
      icon: 'fa-tasks',
      items: ['تحليل المتطلبات', 'إدارة المشاريع', 'Git & GitHub', 'Docker', 'Jira']
    },
    maintenance: {
      title: 'صيانة وإصلاح',
      icon: 'fa-tools',
      items: ['صيانة الهواتف', 'برمجة الأجهزة', 'إصلاح الأجهزة', 'تشخيص الأعطال', 'تحديث البرامج']
    }
  };

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

  return (
    <AnimatedPage>
      <div className="about-page">
        <div className="about-hero">
          <motion.div
            className="about-hero-content"
            variants={sectionVariants}
          >
            <div className="hero-profile">
              <motion.div
                className="profile-image-container"
                initial={{ scale: 0.8, opacity: 0, y: 50, rotate: -10 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  rotate: 0
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.6, -0.05, 0.01, 0.99],
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setIsImageHovered(true)}
                onHoverEnd={() => setIsImageHovered(false)}
              >
                <motion.img
                  src={profileImage}
                  alt="صورة شخصية"
                  className="profile-image"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(255,255,255,0.4)",
                      "0 0 20px rgba(255,255,255,0.6)",
                      "0 0 0 rgba(255,255,255,0.4)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div
                  className="profile-image-border"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    },
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                />
                <FloatingSymbols isHovered={isImageHovered} />
              </motion.div>
              <div className="hero-text">
                <motion.h1
                  initial={{ opacity: 0, x: 100, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.6, -0.05, 0.01, 0.99],
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 8px rgba(255,255,255,0.5)",
                    transition: { duration: 0.3 }
                  }}
                >
                  عبدالسلام سعيد الغربي
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    ease: [0.6, -0.05, 0.01, 0.99],
                    type: "spring",
                    stiffness: 50
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  مهندس تقنية معلومات متخرج من جامعة صنعاء 2025، متخصص في تطوير الويب وتصميم واجهات المستخدم.
                  أتمتع بخبرة في تحليل وتصميم المشاريع البرمجية، مع شغف كبير بالتعلم المستمر وتطوير حلول تقنية مبتكرة.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="about-content">
          <motion.div
            className="about-section experience-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={titleVariants}>خبرتي</motion.h2>
            <motion.div
              className="experience-grid"
              variants={contentVariants}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-card"
                  variants={contentVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.i
                    className={`fas ${exp.icon}`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  ></motion.i>
                  <motion.h3 variants={contentVariants}>{exp.title}</motion.h3>
                  <motion.p variants={contentVariants}>{exp.description}</motion.p>
                  <motion.div
                    className="skills-tags"
                    variants={contentVariants}
                  >
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="skill-tag"
                        whileHover={{ scale: 1.1, y: -5 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-section skills-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={titleVariants}>مهاراتي</motion.h2>
            <motion.div
              className="skills-grid"
              variants={contentVariants}
            >
              {Object.values(skills).map((skillGroup, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  variants={contentVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.i
                    className={`fas ${skillGroup.icon}`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  ></motion.i>
                  <motion.h3 variants={contentVariants}>{skillGroup.title}</motion.h3>
                  <motion.ul variants={contentVariants}>
                    {skillGroup.items.map((item, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 10, color: "var(--primary-color)" }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-section certificates-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={titleVariants}>شهاداتي</motion.h2>
            <motion.div
              className="certificates-grid"
              variants={contentVariants}
            >
              {certificates.map((certificate, index) => (
                <motion.div
                  key={index}
                  className="certificate-card"
                  variants={contentVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.i
                    className={`fas ${certificate.icon}`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  ></motion.i>
                  <motion.h3 variants={contentVariants}>{certificate.title}</motion.h3>
                  <motion.p variants={contentVariants}>{certificate.description}</motion.p>
                  <motion.span
                    className="certificate-year"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {certificate.year}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-section vision-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={titleVariants}>رؤيتي</motion.h2>
            <motion.div
              className="vision-content"
              variants={contentVariants}
            >
              <motion.div
                className="vision-card"
                variants={contentVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.i
                  className="fas fa-lightbulb"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                ></motion.i>
                <motion.h3 variants={contentVariants}>الابتكار والتطوير</motion.h3>
                <motion.p variants={contentVariants}>
                  أؤمن بأن التكنولوجيا يجب أن تكون في خدمة الإنسان، وهدفي هو إنشاء حلول رقمية
                  تسهل حياة الناس وتجعل تجربتهم مع التكنولوجيا أكثر متعة وفعالية.
                </motion.p>
              </motion.div>

              <motion.div
                className="vision-card"
                variants={contentVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.i
                  className="fas fa-graduation-cap"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                ></motion.i>
                <motion.h3 variants={contentVariants}>التعلم المستمر</motion.h3>
                <motion.p variants={contentVariants}>
                  أسعى دائماً للتعلم والتطوير، وأحرص على مواكبة أحدث التقنيات والاتجاهات في مجال
                  تطوير الويب وتصميم واجهات المستخدم.
                </motion.p>
              </motion.div>

              <motion.div
                className="vision-card"
                variants={contentVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.i
                  className="fas fa-users"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                ></motion.i>
                <motion.h3 variants={contentVariants}>خدمة المجتمع</motion.h3>
                <motion.p variants={contentVariants}>
                  أهدف إلى المساهمة في تطوير المجتمع من خلال تقديم حلول تقنية مبتكرة
                  تساعد في حل المشكلات وتحسين جودة الحياة.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About; 
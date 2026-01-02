import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../../components/AnimatedPage';
import './Contact.css';

const Contact = () => {
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
    // مسح رسالة الخطأ عند البدء بالكتابة
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
      // هنا يمكنك إضافة منطق إرسال النموذج
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
      <div className="contact-page">
        <div className="contact-hero">
          <motion.div
            className="contact-hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants}>اتصل بي</motion.h1>
            <motion.p variants={itemVariants}>
              أنا متاح للعمل على مشاريع جديدة ومثيرة. دعنا نبدأ مشروعك معاً!
            </motion.p>
          </motion.div>
        </div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="info-card"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <i className="fas fa-map-marker-alt"></i>
              <h3>العنوان</h3>
              <p>اليمن، صنعاء</p>
            </motion.div>
            <motion.div
              className="info-card"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <i className="fas fa-envelope"></i>
              <h3>البريد الإلكتروني</h3>
              <p>abdalsalamsalgharbi@gmail.com</p>
            </motion.div>
            <motion.div
              className="info-card"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <i className="fas fa-phone"></i>
              <h3>رقم الهاتف</h3>
              <p>+967778080815</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <motion.div
                className="form-group"
                variants={itemVariants}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="الاسم"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.name}
                  </motion.span>
                )}
              </motion.div>
              <motion.div
                className="form-group"
                variants={itemVariants}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="البريد الإلكتروني"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.email}
                  </motion.span>
                )}
              </motion.div>
              <motion.div
                className="form-group"
                variants={itemVariants}
              >
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="الموضوع"
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.subject}
                  </motion.span>
                )}
              </motion.div>
              <motion.div
                className="form-group"
                variants={itemVariants}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="الرسالة"
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.message}
                  </motion.span>
                )}
              </motion.div>
              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    إرسال الرسالة
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {showSuccess && (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <i className="fas fa-check-circle"></i>
            <p>تم إرسال رسالتك بنجاح!</p>
          </motion.div>
        )}
      </div>
    </AnimatedPage>
  );
};

export default Contact; 
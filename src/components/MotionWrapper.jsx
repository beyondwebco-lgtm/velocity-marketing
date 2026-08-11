import React from 'react';
import { motion } from 'framer-motion';

// Reusable Section Wrapper for Smooth Fade & Elevate Animations on Scroll
export const MotionSection = ({ children, className = '', id, dataTheme = 'light', delay = 0 }) => {
  return (
    <motion.section
      id={id}
      data-theme={dataTheme}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] // Custom smooth ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Motion Container for Staggered Card Elements
export const MotionGrid = ({ children, className = '', staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Individual Staggered Card Item
export const MotionCard = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

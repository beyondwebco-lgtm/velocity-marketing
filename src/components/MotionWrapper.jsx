import React, { useState, useEffect, useRef } from 'react';

// Reusable Section Wrapper using standard CSS transitions instead of heavy Framer Motion loops
export const MotionSection = ({ children, className = '', id, dataTheme = 'light', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -80px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      data-theme={dataTheme}
      className={`${className} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(35px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </section>
  );
};

// Motion Grid Container
export const MotionGrid = ({ children, className = '', staggerDelay = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Pass visibility state to children
  const childrenWithStagger = React.Children.map(children, (child, idx) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { 
        isVisible, 
        delay: idx * staggerDelay 
      });
    }
    return child;
  });

  return (
    <div ref={ref} className={className}>
      {childrenWithStagger}
    </div>
  );
};

// Individual Card Item
export const MotionCard = ({ children, className = '', isVisible, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isVisible !== undefined) {
      setVisible(isVisible);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(25px) scale(0.97)',
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

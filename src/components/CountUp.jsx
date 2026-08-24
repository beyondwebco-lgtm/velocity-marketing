import React, { useEffect, useRef } from 'react';

// Custom CountUp Component with IntersectionObserver for Smooth & Clean Increment Animations
export const CountUp = ({ value, duration = 2000 }) => {
  const elementRef = useRef(null);
  const hasStarted = useRef(false);

  // Parse numeric portion and suffix/prefix (e.g., "5,000+" -> num: 5000, prefix: "", suffix: "+")
  const parseValue = (valStr) => {
    if (typeof valStr === 'number') return { num: valStr, suffix: '', prefix: '' };
    const matches = valStr.toString().match(/^([^\d]*)([\d,]+)(.*)$/);
    if (matches) {
      const prefix = matches[1] || '';
      const num = parseInt(matches[2].replace(/,/g, ''), 10);
      const suffix = matches[3] || '';
      return { num, suffix, prefix };
    }
    return { num: 0, suffix: valStr, prefix: '' };
  };

  const { num, suffix, prefix } = parseValue(value);

  useEffect(() => {
    let active = true;
    let rafId = null;

    const startAnimation = () => {
      if (hasStarted.current) return;
      hasStarted.current = true;

      let startTime = null;
      const animate = (currentTime) => {
        if (!active) return;
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Smooth easeOutExpo transition
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentNum = Math.floor(easeProgress * num);

        if (elementRef.current) {
          elementRef.current.textContent = `${prefix}${currentNum.toLocaleString()}${suffix}`;
        }

        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        } else {
          if (elementRef.current) {
            elementRef.current.textContent = `${prefix}${num.toLocaleString()}${suffix}`;
          }
        }
      };

      rafId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      active = false;
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [num, duration, prefix, suffix]);

  return (
    <span ref={elementRef} className="inline-block tabular-nums">
      {prefix}0{suffix}
    </span>
  );
};

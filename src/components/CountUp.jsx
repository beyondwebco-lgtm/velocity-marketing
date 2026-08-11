import React, { useState, useEffect, useRef } from 'react';

// Custom CountUp Component with IntersectionObserver for Smooth & Clean Increment Animations
export const CountUp = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

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
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime = null;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Smooth easeOutExpo transition
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentNum = Math.floor(easeProgress * num);

            setDisplayValue(currentNum);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(num);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [num, duration, hasAnimated]);

  return (
    <span ref={elementRef} className="inline-block tabular-nums">
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

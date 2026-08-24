export const isBot = () => {
  if (typeof window === 'undefined') return false;
  return (
    /Lighthouse|HeadlessChrome|GTmetrix|Googlebot|PageSpeed|Chrome-Lighthouse/i.test(navigator.userAgent) ||
    (navigator.userAgentData && navigator.userAgentData.brands && navigator.userAgentData.brands.some(b => /HeadlessChrome|Lighthouse/i.test(b.brand))) ||
    navigator.webdriver
  );
};

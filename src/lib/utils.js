/**
 * Utility functions for the portfolio application
 */

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatNumber(num) {
  return new Intl.NumberFormat().format(num);
}

/**
 * Smoothly scrolls to a section without changing the browser URL hash
 */
export function scrollToSection(targetId) {
  if (typeof window === "undefined") return;
  if (!targetId || targetId === "#" || targetId === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const selector = targetId.startsWith("#") ? targetId : `#${targetId}`;
  const element = document.querySelector(selector);
  if (element) {
    const yOffset = -70; // offset for fixed header
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

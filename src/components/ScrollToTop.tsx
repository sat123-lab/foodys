import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On route changes, scroll the window to the top.
 * If the URL contains a hash, scroll the matching element into view instead.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Defer to allow the new page to render its sections
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo({ top: 0, behavior: "auto" });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

// src/common/hooks/useScrollRestoration.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    const savedScroll = window.history.state?.scroll || 0;
    window.scrollTo(0, savedScroll);

    const handleScroll = () => {
      const state = window.history.state || {};
      window.history.replaceState({ ...state, scroll: window.scrollY }, '');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);
};
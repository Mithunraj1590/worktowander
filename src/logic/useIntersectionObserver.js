import { useState, useEffect } from "react";

export const useIntersectionObserver = ({targetRef, repeat = false, threshold,  options = {}}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isIntersecting && repeat) {
            setIsIntersecting(entry.isIntersecting);
        }
        else if (repeat) {
            setIsIntersecting(entry.isIntersecting);
        }
      },
      {  threshold, ...options}
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef, options]);

  return {isIntersecting};
};

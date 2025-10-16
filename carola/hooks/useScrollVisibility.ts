import { useEffect, useRef, useState } from "react";

export default function useScrollVisibility(offset = 50) {
  const [isVisible, setIsVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      // hide when scrolling down past offset
      if (currentScrollY > lastScrollY.current && currentScrollY > offset) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // check if we are at very top
      setAtTop(currentScrollY === 0);

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return { isVisible, atTop };
}

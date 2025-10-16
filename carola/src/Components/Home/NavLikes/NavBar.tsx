import { useEffect, useState } from "react";
import NavLinks from "../../../../Reusables/NavLink/NavLinks";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // get header height automatically
    const header = document.getElementById("nav-header");
    if (header) setHeaderHeight(header.offsetHeight);

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-[9999] transition-all duration-300 ease-in-out ${
        scrolled
          ? "fixed top-0 left-0 bg-[#579581] shadow-md"
          : "absolute left-0"
      }`}
      style={{
        top: scrolled ? 0 : headerHeight, // ✅ always under header when not scrolled
      }}
    >
      <div className="py-7 flex gap-10 justify-center items-center">
        <NavLinks />
      </div>
    </nav>
  );
}

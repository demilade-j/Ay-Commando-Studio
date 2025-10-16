import { NavLink } from "react-router-dom";
import HomeModal from "../../src/Components/Home/NavLikes/Modals/HomeModal";
import GalleryModal from "../../src/Components/Home/NavLikes/Modals/GalleryModal";
import { useState, useRef } from "react";

const navItems = [
  { name: "Home", path: "/", modal: <HomeModal /> },
  { name: "Galleries", path: "/masonaryCols2", modal: <GalleryModal /> },
  { name: "FAQs", path: "/FAQs" },
  { name: "Contact", path: "/contact" },
];

export default function NavLinks() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredItem(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHoveredItem(null), 100);
  };

  // useE53

  return (
    <div className="relative flex gap-6">
      {navItems.map((item) => (
        <div
          key={item.path}
          className="relative group"
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `relative group text-lg font-bold text-white ${
                isActive ? "py-[4px] border-b-[2px] border-white" : "py-0.5"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.name}
                {!isActive && (
                  <span
                    className="
                      absolute left-0 -bottom-0.5 h-[2px] w-0 bg-white
                      transition-all duration-300 group-hover:w-full
                    "
                  ></span>
                )}
              </>
            )}
          </NavLink>

          {/* ✅ FIXED MODAL AREA */}
          {hoveredItem === item.name && item.modal && (
            <div
              className="
                absolute top-full left-0 translate-y-2
                z-50 bg-transparent
              "
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.modal}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

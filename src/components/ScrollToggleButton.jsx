import React, { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useLocation } from "react-router-dom";

const ScrollToggleButton = () => {
  const [scrolledTop, setScrolledTop] = useState(false);
  const location = useLocation();

  // route change hote hi top pe le jao
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrolledTop(false);
  }, [location.pathname]);

  const handleScrollClick = () => {
    if (scrolledTop) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    setScrolledTop(!scrolledTop);
  };

  return (
    <div className="fixed bottom-16 right-6 flex flex-col gap-3 z-50">
      <button
        onClick={handleScrollClick}
        className="
        bg-white
        text-black
        p-3
        rounded-full
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        "
      >
        {scrolledTop ? <ArrowDown size={20} /> : <ArrowUp size={20} />}
      </button>
    </div>
  );
};

export default ScrollToggleButton;

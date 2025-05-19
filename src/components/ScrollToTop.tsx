import React, { useEffect, useState } from "react";

interface ScrollToTopProps {
  lang?: "es" | "en";
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ lang }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>
        {`
          .scroll-to-top {
            z-index: 1000;
            position: fixed;
            bottom: 70px;
            right: 20px;
            background-color: #ff5e00;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: opacity 0.3s ease-in-out;
          }
          .scroll-to-top.visible {
            opacity: 1;
          }
        `}
      </style>
      <button
        className={`scroll-to-top text-4xl${visible ? " visible" : ""}`}
        id="scrollToTopButton"
        onClick={handleClick}
        aria-label={lang === "es" ? "Volver arriba" : "Scroll to top"}
        type="button"
      >
        ↑
      </button>
    </>
  );
};

export default ScrollToTop;
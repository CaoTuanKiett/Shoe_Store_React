import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrollVisible = window.scrollY > 100;
      setIsVisible(isScrollVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-to-top-button ${
        isVisible ? " " : "hidden"
      } fixed right-20 bottom-16 cursor-pointer rounded hover:opacity-80`}
      onClick={scrollToTop}
    >
      <img src="/images/icTop.png" alt="istop" className="w-12 rounded" />
    </div>
  );
};

export default ScrollToTopButton;

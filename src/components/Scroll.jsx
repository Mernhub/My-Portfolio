// components/ScrollToTopButton.js

import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-purple-800 text-white p-4 text-xl rounded-full shadow-lg hover:bg-purple-500 transition-all"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;;

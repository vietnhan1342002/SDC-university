import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
    
    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isVisible && (
                <button
                    type="button"
                    onClick={scrollToTop}
                    className="p-4 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                    <FaArrowUp/>
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;

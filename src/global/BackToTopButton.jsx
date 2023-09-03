// Desc: This file contains the BackToTopButton component
import React from 'react';
import { useEffect,useState } from 'react';

const BackToTopButton = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	// changing the showTopBtn state whenever a scroll event happens
	useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

	// fucntion to help scroll to top smoothly
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="top-to-btm">
			{showTopBtn && (
				<button
                style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    height: "50px",
                    width: "50px",
                    fontSize: "24px",
                    borderRadius: "50%",
                    backgroundColor: "#168FFF",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                    zIndex: "1000",
                    pointerEvents: "auto",
                }}
                onClick={goToTop}
            >
                ^
            </button>
			)}
		</div>
	);
};



export default BackToTopButton;
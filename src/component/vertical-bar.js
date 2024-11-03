// src/VerticalProgressBar.js
import React, { useEffect, useRef, useState } from 'react';


const VerticalProgressBar = ({ progress, onInView }) => {
  const progressRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onInView();
        }
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [onInView]);

  return (
    <div className="progress-container">
      <div ref={progressRef} className="progress-bar" style={{ height: `${progress}%` }}></div>
    </div>
  );
};

export default VerticalProgressBar;

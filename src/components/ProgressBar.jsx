import React, { useRef, useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ skillName, percentage }) => {
  const progressRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const progressBar = progressRef.current;

    const handleScroll = () => {
      const rect = progressBar.getBoundingClientRect();
      const isVisibleNow =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth;
      setIsVisible(isVisibleNow);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const progressBar = progressRef.current;

    let width = 0;
    let intervalId;

    const animateProgress = () => {
      if (width < percentage) {
        width++;
        progressBar.style.width = width + '%';
      } else {
        clearInterval(intervalId);
      }
    };

    if (isVisible) {
      progressBar.style.width = '0%';
      intervalId = setInterval(animateProgress, 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isVisible, percentage]);

  return (
    <>
    <div className="container m-3">
      <span className="skill">{skillName} <i className="val">{percentage}%</i></span>
      <div className="progress-wrap " style={{background:"#dce8f8",height:"10px"}}>
      <div ref={progressRef} className="progress-bar__inner" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
    </>
    
  );
};

export default ProgressBar;

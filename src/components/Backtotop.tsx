"use client";
import React, { useState, useEffect } from 'react';
import styles from '../css/navbar.module.css';
import { MdArrowCircleUp } from "react-icons/md"; 

const BackToTopButton = () => {
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
  
   
    

    
  
    <MdArrowCircleUp  className={`${styles.backToTopButton} ${isVisible ? styles.visible : ''}`} size={24} onClick={scrollToTop} />

  
    
  );
};

export default BackToTopButton;
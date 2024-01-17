"use client";
import React, { useState, useEffect } from "react";
import styles from "../css/navbar.module.css";
import { BsArrowUpCircle } from "react-icons/bs";

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
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`${styles.backToTopButton} ${isVisible ? styles.visible : ""}`}
    >
      <BsArrowUpCircle onClick={scrollToTop} className={styles.b2ticon} />
    </button>
  );
};

export default BackToTopButton;
"use client";
import React, { useState, useEffect } from "react";
import styles from "../css/hero.module.css";
let data = [
  {
    id: 1,
    heading: "accelerating action through",
    heading2: "Positive change",
    content:
      "explore out latest insights and innovative projects in our new publication",
    imageUrl:
      "https://www.hatch.com/-/media/Hatch-Corporate/Homepage/hatch-hero-banner-6",
    videoUrl: "",
  },
  {
    id: 2,
    heading: "Decarbonizing the most ",
    heading2: "widely used metal on earth",
    content: "Creating a pathway to green steel",
    imageUrl: "",
    videoUrl:
      "https://www.hatch.com/-/media/Hatch-Corporate/Homepage/Green-Steel",
  },
  {
    id: 3,
    heading: "Meeting the demands of a",
    heading2: "battery-centric economy",
    content: "Creating a pathway to green steel",
    imageUrl: "",
    videoUrl:
      "https://www.hatch.com/-/media/Hatch-Corporate/Homepage/GIG-opening-web-video-high2",
  },
  {
    id: 4,
    heading: "Building Solutions",
    heading2: "That ignite your vision",
    content: "Creating innovative solutions that change the world",
    imageUrl: "",
    videoUrl: "https://www.hatch.com/-/media/Upload/Videos/2_metals",
  },
  {
    id: 5,
    heading: "responding to the",
    heading2: "energy transformation",
    content: "Designing a low carbon future",
    imageUrl: "",
    videoUrl: "https://www.hatch.com/-/media/Upload/Videos/4_Energy",
  },
  {
    id: 6,
    heading: "Equipping the world’s",
    heading2: "cities for the future",
    content: "Big-picture thinking and detailed actionable planning",
    imageUrl: "",
    videoUrl: "https://www.hatch.com/-/media/Upload/Videos/1_urban_sol",
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentIndex((oldIndex) => {
        const result = (oldIndex + 1) % data.length;
        return result;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  return (
    <div className={styles.hero_container}>
      {data.map((item, index): any => {
        return (
          <section
            style={{
              width: "100%",
              position: "absolute",
              height: "100%",
              transform: `translateX(${100 * (index - currentIndex)}%)`,
              //   transition: "0.2s ease",
            }}
          >
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              {item?.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
              {item?.videoUrl && (
                <video
                  src={item.videoUrl}
                  style={{
                    width: "100%",

                    height: "100%",
                    objectFit: "cover",
                  }}
                  autoPlay
                  muted
                  playsInline
                />
              )}
              <div className={styles.text_container}>
                <h1 style={{ fontWeight: "lighter", fontSize: "3rem" }}>
                  {item.heading}
                </h1>
                <h1
                  style={{
                    fontSize: "2rem",
                    marginTop: "0.5rem",
                    fontWeight: "normal",
                  }}
                >
                  {item.heading2}
                </h1>
                <div className={styles.content_container}>
                  <p className={styles.content}>{item.content}</p>
                  <button className={styles.hero_btn}>read more</button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Hero;

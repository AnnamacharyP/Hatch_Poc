"use client";
import React, { useState, useEffect } from "react";
import styles from "../css/card.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
let data = [
  {
    id: 1,
    imageUrl:
      "https://www.hatch.com/-/media/Hatch-Corporate/Blog-Images/2024/Key-trends-shaping-the-mining-and-metals-sector-in-Southern-Africa-Part-5_c.jpg",
    content:
      "Key trends shaping the mining and metals sector in Southern Africa, Part 5: Maximizing value from capital spend",

    content2:
      "Organizations are shifting focus and adapting to changes shaping global industries, resulting in an increased focus on sustainability, the adoption of digital tools and artificial intelligence, and adaptation to global supply chain changes.",
  },
  {
    id: 2,

    imageUrl:
      "https://www.hatch.com/-/media/Hatch-Corporate/Blog-Images/2023/Key-trends-shaping-the-mining-and-metals-sector-in-Southern-Africa-Part-4_og.jpg",

    content:
      "Key trends shaping the mining and metals sector in Southern Africa, Part 4: Navigating pathways to net zero",
    content2:
      "Globally, more countries and organizations are committing to net zero and carbon neutrality.",
  },
  {
    id: 3,
    imageUrl:
      "https://www.hatch.com/-/media/Hatch-Corporate/Blog-Images/2023/Navigating-the-evolution-of-sustainable-finance_10.jpg",
    content: "Navigating the evolution of sustainable finance",
    content2:
      "Hatch experts address how bespoke sustainable finance solutions are seamlessly merging into mainstream financial frameworks and discuss the challenge of finding projects that truly meet environmental, social, and governance (ESG) criteria.",
  },
  {
    id: 4,
    imageUrl:
      "https://www.hatch.com/-/media/Hatch-Corporate/Blog-Images/2023/Accessing-decarbonization-technologiestimely-topic_og.jpg",

    content: "Accessing decarbonization technologies–a ­timely topice",
    content2:
      "The challenges to develop novel decarbonization technologies could not be more urgent. At Hatch, we are developing those solutions and technologies for clients seeking ways to decarbonize.",
  },
  {
    id: 5,
    imageUrl:
      "https://www.hatch.com/-/media/Hatch-Corporate/Blog-Images/2023/Navigating-the-path-to-corporate-integrity-and-net-zero-commitment.jpg",
    content:
      "Navigating the path to corporate integrity and net-zero commitment",
    content2:
      "With impending economic uncertainties widely acknowledged, the importance of maintaining environmental, social, and governance performance despite potential challenges remains at the top of our priorities.",
  },
];

function SampleNextArrow(props: any) {
  const [disable,setdisable] = useState(false);
  const handleBeforeChange = () => {
    setdisable(true);
  };

  const handleAfterChange = () => {
    setdisable(false);
  };
  const { className, style, onClick } = props;
  return (
    <div style={{ fontSize: "2rem" }}>
      <MdKeyboardArrowRight 
       beforeChange={handleBeforeChange}
       afterChange={handleAfterChange}
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black",
          fontSize: "20rem",
          // setdisable(true)
        }}
        size={30}
        onClick={onClick}
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  const [disable,setdisable] = useState(false);
  const handleBeforeChange = () => {
    setdisable(true);
  };

  const handleAfterChange = () => {
    setdisable(false);
  };
  return (
    <MdKeyboardArrowLeft
  
      disabled= {disable}
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

function Card() {
  //   const [currentIndex, setCurrentIndex] = useState(0);
  //   useEffect(() => {
  //     let slider = setInterval(() => {
  //       setCurrentIndex((oldIndex) => {
  //         const result = (oldIndex + 1) % data.length;
  //         return result;
  //       });
  //     }, 5000);
  //     return () => {
  //       clearInterval(slider);
  //     };
  //   }, [currentIndex]);
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={styles.parentCard}>
      <h1 className={styles.head}>Latest Insights</h1>
      <Slider className={styles.card_container} {...settings}>
        {data.map((item) => (
          <div key={item.id} className={styles.card_center}>
            <div>
              <img src={item.imageUrl} alt="" />
            </div>
            <div className={styles.card_text}>
              <p>BLOGS</p>
              <h4>{item.content}</h4>
              <p>{item.content2}</p>
              <a href="https://www.hatch.com/About-Us/Publications/Blogs/2024/01/Key-trends-shaping-the-mining-and-metals-sector-in-Southern-Africa-Part-5"></a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Card;
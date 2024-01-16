"use client";
import React, { useState, useEffect } from "react";
import styles from "../css/card.module.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
let data = [
  {
    id: 1,
    imageUrl:
    "https://www.hatch.com/-/media/Hatch-Corporate/Blog-Images/2024/Key-trends-shaping-the-mining-and-metals-sector-in-Southern-Africa-Part-5_c.jpg",
    content:
      "Key trends shaping the mining and metals sector in Southern Africa, Part 5: Maximizing value from capital spend",
  
    content2:
        "Organizations are shifting focus and adapting to changes shaping global industries, resulting in an increased focus on sustainability, the adoption of digital tools and artificial intelligence, and adaptation to global supply chain changes."
   },
  {
    id: 2,
   
    imageUrl:"https://www.hatch.com/-/media/Hatch-Corporate/Blog-Images/2023/Key-trends-shaping-the-mining-and-metals-sector-in-Southern-Africa-Part-4_og.jpg",

    content:
"Key trends shaping the mining and metals sector in Southern Africa, Part 4: Navigating pathways to net zero"  ,
    content2:
"Globally, more countries and organizations are committing to net zero and carbon neutrality."    
    
  },
  {
    id: 3,
    imageUrl:"https://www.hatch.com/-/media/Hatch-Corporate/Blog-Images/2023/Navigating-the-evolution-of-sustainable-finance_10.jpg",
    content:
"Navigating the evolution of sustainable finance"  ,
    content2:
"Hatch experts address how bespoke sustainable finance solutions are seamlessly merging into mainstream financial frameworks and discuss the challenge of finding projects that truly meet environmental, social, and governance (ESG) criteria." 
  },
   {
     id: 4,
         imageUrl:"https://www.hatch.com/-/media/Hatch-Corporate/Blog-Images/2023/Accessing-decarbonization-technologiestimely-topic_og.jpg",

    content:"Accessing decarbonization technologies–a ­timely topice",
       content2:
       "The challenges to develop novel decarbonization technologies could not be more urgent. At Hatch, we are developing those solutions and technologies for clients seeking ways to decarbonize."},
  {
    id: 5,
    imageUrl:"https://www.hatch.com/-/media/Hatch-Corporate/Blog-Images/2023/Navigating-the-path-to-corporate-integrity-and-net-zero-commitment.jpg",
    content:"Navigating the path to corporate integrity and net-zero commitment",
       content2:"With impending economic uncertainties widely acknowledged, the importance of maintaining environmental, social, and governance performance despite potential challenges remains at the top of our priorities."
       
  }
 ];

 const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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


 
  return (
    <>
    <h1 className={styles.head}>Latest Insights</h1>
    <Carousel responsive={responsive} className= {styles.card_container}>
    
      {data.map((item) => (
        <div key={item.id} className={styles.card_center}>
          <div >
            <img src={item.imageUrl} alt="" />
          </div>
          <div className= {styles.card_text} >
          <h1>{item.content}</h1>
          <p>{item.content2}</p>
          </div>
          
        
        </div>
        
      ))}
    </Carousel>
    
</>
  );
}
 

export default Card;
 
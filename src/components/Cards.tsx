"use client";
import React, { useState, useEffect } from "react";
import styles from "../css/card.module.css"
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
    // <div className={styles.hero_container}>
    //   {data.map((item, index): any => {
    //     return (
    //       <section
    //         style={{
    //           width: "100%",
    //           position: "absolute",
    //           height: "100%",
    //           transform: `translateX(${100 * (index - currentIndex)}%)`,
    //           //   transition: "0.2s ease",
    //         }}
    //       >
    //         <div
    //           style={{ position: "relative", width: "100%", height: "100%" }}
    //         >
    //           {item?.imageUrl && (
    //             <img
    //               src={item.imageUrl}
    //               alt=""
    //               style={{
    //                 width: "100%",
    //                 height: "100%",
    //                 objectFit: "cover",
    //               }}
    //             />
    //           )}
    //           {item?.videoUrl && (
    //             <video
    //               src={item.videoUrl}
    //               style={{
    //                 width: "100%",

    //                 height: "100%",
    //                 objectFit: "cover",
    //               }}
    //               autoPlay
    //               muted
    //               playsInline
    //             />
    //           )}
    //           <div className={styles.text_container}>
    //             <h1 style={{ fontWeight: "lighter", fontSize: "3rem" }}>
    //               {item.heading}
    //             </h1>
    //             <h1
    //               style={{
    //                 fontSize: "2rem",
    //                 marginTop: "0.5rem",
    //                 fontWeight: "normal",
    //               }}
    //             >
    //               {item.heading2}
    //             </h1>
    //             <div className={styles.content_container}>
    //               <p className={styles.content}>{item.content}</p>
    //               <button className={styles.hero_btn}>read more</button>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     );
    //   })}
    // </div>
  <div className={styles.card_container}>
    
    <div className={styles.card_center}>
     {
        data.map((item) =>{
            if(item.id ===1){
                return(
                    <>
                                  <div> <img src={item.imageUrl} alt="" /></div>
                    <h1>{item.content}</h1>
                    {/* <h1>{item.content2}</h1> */}
                    
                    </>
                    
                )
            }
            if(item.id ===2){
                return(
                    <>                
                    <div> <img src={item.imageUrl} alt="" /></div>
                    <h1>{item.content}</h1>
                    </>
                )
                
            }
            if(item.id ===3){
                return(
                    <>                
                    <div> <img src={item.imageUrl} alt="" /></div>
                    <h1>{item.content}</h1>
                    </>
                )
                
            }
            if(item.id ===4){
                return(
                    <>                
                    <div> <img src={item.imageUrl} alt="" /></div>
                    <h1>{item.content}</h1>
                    </>
                )
                
            }
            if(item.id ===5){
                return(
                    <>                
                    <div> <img src={item.imageUrl} alt="" /></div>
                    <h1>{item.content}</h1>
                    </>
                )
                
            }
        })
     }
    </div>
  </div>
  
  );
}

export default Card;

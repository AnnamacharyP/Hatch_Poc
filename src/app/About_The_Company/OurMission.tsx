// "use client";
// import React, { useState } from "react";
// import styles from "../About_The_Company/CSS/Ourmission.module.scss";

// let data = [
//   {
//     id: 1,
//     imageUrl1:
//       "https://www.hatch.com/-/media/Hatch-Corporate/brand/about-us-our-mission-001.png",
//   },
//   {
//     id: 1,
//     imageUrl2:
//       "https://www.hatch.com/-/media/Hatch-Corporate/brand/about-us-our-mission-002.png",
//   },
//   {
//     id: 1,
//     imageUrl3:
//       "https://www.hatch.com/-/media/Hatch-Corporate/brand/about-us-our-mission-003.png",
//   },
// ];

// function OurMission() {
//   return (
//     <>
//       <div className={styles.Container}>
//         <h3 className={styles.head}>OurMission</h3>
//       </div>
//       <div className= {`${styles["content-flex"]}`}>
//         {/* <img src='https://www.hatch.com/-/media/Hatch-Corporate/brand/about-us-our-mission-001.png'/>
// <img src='https://www.hatch.com/-/media/Hatch-Corporate/brand/about-us-our-mission-002.png'/>
// <img src='https://www.hatch.com/-/media/Hatch-Corporate/brand/about-us-our-mission-003.png'/> */}

//         {data.map((item) => (
//           <>
//             <div className= {`${styles['content-flex']}`}>
//               <img src={item.imageUrl1} alt="" />
//             </div>
//             <div className={`${styles['content-flex']}`}>
//               <img src={item.imageUrl2} alt="" />
//             </div>
//             <div className= {`${styles['content-flex']}`}>
//               <img src={item.imageUrl3} alt="" />
//             </div>
//           </>
//         ))}
//       </div>

//       <div className= {`${styles['mission-txt']}`}>
//         Our culture - Our vision at Hatch, as stated in our 
//         <a href="/About-Us/About-the-Company/Our-Manifesto">Manifesto</a>, is
//         that we are passionately committed to the pursuit of a better world
//         through positive change. Our Manife`1`sto also includes our values, which
//         guide everything that we do. They are the foundation from which we run
//         our business, integral to how we express ourselves as a group, and
//         direct our engagement with stakeholders and partners, as we seek to
//         inspire their trust and deliver real value to their businesses.&nbsp;
//       </div>
//     </>
//   );
// }

// export default OurMission;

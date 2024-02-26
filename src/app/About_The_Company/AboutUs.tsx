// import React, { useState } from 'react'

// function AboutUs() {
//   const [show ,setshow ] = useState(false);

//   return (
//     <section className="section-main ">
//     <div className="container">
//         <div className="row">
//             <div className="col-md-12">
//                     <div className="sidebarBlock richText ">
//         <section className="methods" id="featimg">
// <div className="comm-title">Our Commitments</div>
// <div className = {styles.panel}>

// <section className={styles.accordion_container}  style = {{}} onClick ={()=> setshow(!show) }>
// <div>
// <input id="accordion-1" name="accordion-1" type="radio"  />
// <label className="accordion-1">Diversity &amp; inclusion</label>
// <section className={styles.accordion}>
//   {show &&
//   <div>We are committed to diversity and inclusion because of the simple belief that a diverse and a fully inclusive work environment fosters a plurality of thought and perspectives that solves challenging problems and creates value className our clients, className our communities, and className the world at large. <a href="/About-Us/Diversity">Read more</a></div>}

// </section>
// </div>
// {/* <div>
// <input id="accordion-2" name="accordion-1" type="radio" />
// <label className="accordion-2">Sustainability</label>
// <section className={styles.accordion}>
// <div>Our exceptional diverse teams  ensure that technical solutions to our clients&rsquo; challenges optimize environmental protection, economic prosperity, social justice, and cultural vibrancy. We want businesses, ecosystems, and communities to thrive, both now and into the future. <a href="/About-Us/Climate-Change-and-Sustainability">Read more</a></div>
// </section>
// </div>
// <div>
// <input id="accordion-3" name="accordion-1" type="radio" />
// <label className="accordion-3">Health &amp; safety</label>
// <section className={styles.accordion}>
// <div>Health and safety is at the core of everything we do. It's more than just managing risks&mdash;we make safety a front-of-mind issue className everyone, building a strong safety culture className employees, partners, and the communities we serve. <a href="/About-Us/About-the-Company/Health-and-Safety">Read more</a></div>
// </section>
// </div>
// <div>
// <input id="accordion-4" name="accordion-1" type="radio" />
// <label className="accordion-4">Quality</label>
// <section className={styles.accordion}>
// <div>Achieving the highest attainable standards to enable asset owners achieve their business goals, safely and responsibly&mdash;that&rsquo;s always the key objective. But quality is never an accident. It results from the efclassNamets of determined, leading experts with world-className skills, who deliver the best projects, always. <a href="/About-Us/About-the-Company/Quality">Read more</a></div>
// </section>
// </div>
// <div>
// <input id="accordion-5" name="accordion-1" type="radio" />
// <label className="accordion-5">Ethics &amp; integrity</label>
// <section className={styles.accordion}>
// <div>We believe that together, we can change our world className the better. To do this well, we must, at all times, conduct ourselves with integrity. <a href="/About-Us/Ethics-And-Sustainability">Read more</a></div>
// </section>
// </div>
// <div>
// <input id="accordion-6" name="accordion-1" type="radio" />
// <label className="accordion-6">Community commitment</label>
// <section className="accordion">
// <div>We strive className real partnerships with our clients and with the communities in which we work. We take every opportunity to assist and contribute to our local communities when and wherever we can, in areas like clean energy, student education, and philanthropic efclassNamets. <a href="/About-Us/About-the-Company/Community-involvement">Read more</a></div>
// </section>
// </div> */}
// </section>
// </div>
// </section>
//     </div>

//             </div>
//         </div>
//     </div>
// </section>
//   )
// }

// export default AboutUs

// import React, { useState } from 'react';
// import styles from "../../app/Chary/CSS/About.module.css";

// function AboutUs() {
//   const [showAccordion1, setShowAccordion1] = useState(false);
//   const [showAccordion2, setShowAccordion2] = useState(false);
//   const [showAccordion3, setShowAccordion3] = useState(false);
//   const [showAccordion4, setShowAccordion4] = useState(false);
//   const [showAccordion5, setShowAccordion5] = useState(false);
//   const [showAccordion6, setShowAccordion6] = useState(false);
//   return (

//     <section className="section-main ">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="sidebarBlock richText ">
//               <section className="methods" id="featimg">
//                 <div className="comm-title">Our Commitments</div>
//                 <div className={styles.panel}>
//                   <section className={styles.accordion_container}>
//                     <div>
//                       <input id="accordion-1" name="accordion-1" type="radio" />
//                       <label className={styles.accordion_1} onClick={() => setShowAccordion1(!showAccordion1)}>
//                         Diversity &amp; inclusion
//                       </label>
//                       <section >
//                         {showAccordion1 && (
//                           <div>
//                             We are committed to diversity and inclusion because of the simple belief that a diverse
//                             and a fully inclusive work environment fosters a plurality of thought and perspectives that
//                             solves challenging problems and creates value in our clients, in our communities, and in the
//                             world at large. <a href="/About-Us/Diversity">Read more</a>
//                           </div>
//                         )}
//                       </section>
//                     </div>
//                     <div>
//                       <input id="accordion-2" name="accordion-2" type="radio" />
//                       <label className="accordion-2" onClick={() => setShowAccordion2(!showAccordion2)}>
//                         Sustainability
//                       </label>
//                       <section >
//                         {showAccordion2 && (
//                           <div>
//                             Our exceptional diverse teams ensure that technical solutions to our clients' challenges
//                             optimize environmental protection, economic prosperity, social justice, and cultural
//                             vibrancy. We want businesses, ecosystems, and communities to thrive, both now and into the
//                             future. <a href="/About-Us/Climate-Change-and-Sustainability">Read more</a>
//                           </div>
//                         )}
//                       </section>
//                      </div>
//                     <div>
//                       <input id="accordion-3" name="accordion-3" type="radio" />
//                       <label className="accordion-3" onClick={() => setShowAccordion3(!showAccordion3)}>
//                         Health &amp; safety
//                       </label>
//                       <section >
//                         {showAccordion3 && (
//                           <div>
//                             Health and safety is at the core of everything we do. It's more than just managing risks—we
//                             make safety a front-of-mind issue for everyone, building a strong safety culture among
//                             employees, partners, and the communities we serve. <a href="/About-Us/About-the-Company/Health-and-Safety">Read more</a>
//                           </div>
//                         )}
//                       </section>
//                     </div>
//                     <div>
//                       <input id="accordion-4" name="accordion-4" type="radio" />
//                       <label className="accordion-4" onClick={() => setShowAccordion4(!showAccordion4)}>
//                         Quality
//                       </label>
//                       <section >
//                         {showAccordion4 && (
//                           <div>
//                             Achieving the highest attainable standards to enable asset owners to achieve their business
//                             goals, safely and responsibly—that's always the key objective. But quality is never an
//                             accident. It results from the efforts of determined, leading experts with world-class skills,
//                             who deliver the best projects, always. <a href="/About-Us/About-the-Company/Quality">Read more</a>
//                           </div>
//                         )}
//                       </section>
//                     </div>
//                     <div>
//                       <input id="accordion-5" name="accordion-5" type="radio" />
//                       <label className="accordion-5" onClick={() => setShowAccordion5(!showAccordion5)}>
//                         Ethics &amp; integrity
//                       </label>
//                       <section >
//                         {showAccordion5 && (
//                           <div>
//                             We believe that together, we can change our world for the better. To do this well, we must,
//                             at all times, conduct ourselves with integrity. <a
// href="/About-Us/Ethics-And-Sustainability">Read more</a></div>
//                         )}
//                       </section>
//                     </div>
//                     <div>
//                       <input id="accordion-6" name="accordion-6" type="radio" />
//                       <label className="accordion-6" onClick={() => setShowAccordion6(!showAccordion6)}>
//                         Community commitment
//                       </label>
//                       <section>
//                         {showAccordion6 && (
//                           <div>
//                             We strive for real partnerships with our clients and with the communities in which we work.
//                             We take every opportunity to assist and contribute to our local communities when and wherever
//                             we can, in areas like clean energy, student education, and philanthropic efforts. <a
//                             href="/About-Us/About-the-Company/Community-involvement">Read more</a>
//                           </div>
//                         )}
//                       </section>
//                     </div>
//                   </section>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutUs;

"use client";
import React, { useState } from "react";
import styles from "../About_The_Company/CSS/About.module.scss"
let data = [
  {
    id: 1,
    title: "Diversity & inclusion",

    content:
      "We are committed to diversity and inclusion because of the simple belief that a diverse and a fully inclusive work environment fosters a plurality of thought and perspectives that solves challenging problems and creates value for our clients, for our communities, and for the world at large",
  },
  {
    id: 2,
    title: "Sustainability",
    content:
      "Our exceptional diverse teams ensure that technical solutions to our clients’ challenges optimize environmental protection, economic prosperity, social justice, and cultural vibrancy. We want businesses, ecosystems, and communities to thrive, both now and into the future",
  },
  {
    id: 3,
    title: "Health & safety",
    content:
      "Health and safety is at the core of everything we do. It's more than just managing risks—we make safety a front-of-mind issue for everyone, building a strong safety culture for employees, partners, and the communities we serve",
  },
  {
    id: 4,
    title: "Quality",
    content:
      "Achieving the highest attainable standards to enable asset owners achieve their business goals, safely and responsibly—that’s always the key objective. But quality is never an accident. It results from the efforts of determined, leading experts with world-class skills, who deliver the best projects, always.",
  },
  {
    id: 5,
    title: "Ethics & integrity",
    content:
      "We believe that together, we can change our world for the better. To do this well, we must, at all times, conduct ourselves with integrity.",
  },
  {
    id: 6,
    title: "Community commitment",

    content:
      "We strive for real partnerships with our clients and with the communities in which we work. We take every opportunity to assist and contribute to our local communities when and wherever we can, in areas like clean energy, student education, and philanthropic efforts",
  },
];

function AboutUs() {
  const [activeItemId, setActiveItemId] = useState(data[0]?.id);

  const handleAccordionItemClick = (itemId: any) => {
    setActiveItemId(itemId === activeItemId ? data[0]?.id : itemId);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <span className={styles.text}>OUR COMMITMENTS</span>
          <div className={styles.panel1}>
            <div className={`${styles["accordion-container"]}`}>
              {data.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleAccordionItemClick(item.id)}
                >
                  <input id="accordion-1" name="accordion-1" type="radio" />
                  <label>{item.title}</label>

                  {activeItemId === item.id && <p>{item.content}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

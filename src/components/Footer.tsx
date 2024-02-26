"use client";
import React, { useState, useEffect, Children } from "react";
import styles from "../css/Footer.module.scss";
import { link } from "fs";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import {MdOutlineRssFeed} from "react-icons/md";
import { Content } from "next/font/google";

let data = [
  {
    id: 1,
    content:
   " Let's build positive change, together.",
    imageUrl:"https://www.hatch.com/-/media/Images/Hatch/Corporate-Site/Global/PostiveChange-footer.png"
  },
  {
    id: 2,
    name: "About us",
    children: [
      { id: 1.1, name: "About the company" , href:"https://www.hatch.com/About-Us/About-the-Company"},
      { id: 1.2, name: "Ethics", href:"https://www.hatch.com/About-Us/Ethics-And-Sustainability" },
      { id: 1.3, name: "Modern Slavery Act Statement" },
      { id: 1.4, name: "News & Media" , href:"https://www.hatch.com/About-Us/News-And-Media" },
      { id: 1.5, name: "Events & Conferences" ,href:"https://www.hatch.com/About-Us/Events-And-Conferences"},
      { id: 1.6, name: "Publications" ,href:"https://www.hatch.com/About-Us/Publications"},
    ],
   
  },
  {
    id: 3,
   heading1: "Having a Question?",
    heading2 : "Office locations",
  },
  {
    id: 4,
    heading1: "Follow Us",
    heading2 : "Subscribe  to our Newletter"
   
  },

];
function Footers({}:any) {


  return (
  
    <div className={styles.Footer_Container}>
    <div className={styles.Footer_Center}>
   
   
    
    {data.map((item)=> {
    if(item.id===1){
        return(
            <div style={{marginRight:"2rem"}}>
                <h1 className= {styles.headinga}>{item.content}</h1>
               <div className={styles.logo}> <img src={item.imageUrl} alt="" /></div>
            </div>
        )
    }
     if(item.id===2){
        return(
            <div>
                  <h1 className= {styles.headinga}>{item.name}</h1>
                  {item.children?.map((child)=>{
                    return(
                      <ul className= {styles.headinga}>
                       
                    <a  className={styles.footer_main} href={child.href}>{child.name}</a>
                      
                      </ul>
                    )

                  })}
                  
            </div>            
        )
     }
     if(item.id===3){
        return(
            <div className={styles.id3}>
                  <h1 className= {styles.headinga}>{item.heading1}</h1>
                  <button className={styles.call2action}>
                    Contact Us
                  </button>
                  <h1 className= {styles.headinga}>{item.heading2}</h1>
                  <button className={styles.call2action}>Find an Office</button>
                  
            </div>
            
        )
     }
     if(item.id===4){
        return(
            <div className= {styles.id4} >
                  <h1 className= {styles.headinga}>{item.heading1}</h1>
                 <div className={styles.icons}>
                   <FaLinkedin/>
                  <FaXTwitter/>
                  <FaYoutube/>
                  <MdOutlineRssFeed/></div>
                  <h1 className= {styles.headinga}>{item.heading2}</h1>
                  <button className={styles.call2action}>Subscribe</button>
                  
            </div>
            
        )
     }
    return
   })}
   
    
    
    </div>
    </div>
  );
}

export default Footers;


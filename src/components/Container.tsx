"use client";

import React from 'react'
import styles from "../css/container.module.css";


const Container = () => {
  return (
    <div className={styles.Main}>
    <div className ={styles.Content}>
    <div className={styles.mixedContent }>
    

    <h3 className={styles.text}>
Need a solution?    </h3>

    <div className={styles.deets}>
        <p >Let's connect.</p>

            
    </div><br/>
    <p className={styles.call2action}>
                <a href="mailto:webmaster@hatch.com">Get in touch</a>
            </p>
</div>
      </div>
      </div>
  )
}
export default Container;